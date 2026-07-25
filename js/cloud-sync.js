/* Firebase account and synchronization layer.
   Local and guest study continue to work if Firebase is unavailable. */
(function () {
  "use strict";

  const state = { user: null, profile: null };
  const vocabularyRef = firestoreDb.collection("appData").doc("vocabulary");
  let authMode = "signin";
  let progressTimer = null;
  let applyingCloudProgress = false;

  function isTeacher() {
    return !!(state.user && state.profile && state.profile.role === "teacher");
  }

  function serverTime() {
    return firebase.firestore.FieldValue.serverTimestamp();
  }

  function toast(text, error) {
    let el = document.getElementById("cloud-toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "cloud-toast";
      document.body.appendChild(el);
    }
    el.textContent = text;
    el.className = "cloud-toast show" + (error ? " error" : "");
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => { el.className = "cloud-toast"; }, 3200);
  }

  function injectUi() {
    const style = document.createElement("style");
    style.textContent = `
      .cloud-account{position:fixed;right:14px;top:14px;z-index:900;display:flex;gap:8px;align-items:center;
        padding:7px 9px;border:1px solid rgba(255,255,255,.18);border-radius:999px;background:rgba(16,24,40,.9);
        color:#fff;font:600 12px/1.2 Inter,sans-serif;box-shadow:0 5px 18px rgba(0,0,0,.2)}
      .cloud-account button{border:0;border-radius:999px;padding:7px 11px;cursor:pointer;font-weight:800}
      .cloud-account .cloud-primary{background:#ffd43b;color:#202020}.cloud-account .cloud-link{background:#334155;color:#fff}
      .cloud-dot{width:8px;height:8px;border-radius:50%;background:#22c55e}.cloud-dot.offline{background:#f59e0b}
      .cloud-auth{position:fixed;inset:0;z-index:1200;display:none;align-items:center;justify-content:center;
        padding:20px;background:rgba(2,6,23,.72)}.cloud-auth.show{display:flex}
      .cloud-auth-card{width:min(420px,100%);background:#fff;color:#172033;border-radius:20px;padding:25px;
        box-shadow:0 25px 80px rgba(0,0,0,.35)}.cloud-auth-card h2{margin:0 0 7px}
      .cloud-auth-card p{margin:0 0 18px;color:#64748b}.cloud-auth-card input{box-sizing:border-box;width:100%;
        margin:6px 0;padding:12px;border:1px solid #cbd5e1;border-radius:10px;font:inherit}
      .cloud-auth-actions{display:flex;gap:8px;margin-top:13px}.cloud-auth-actions button{flex:1;border:0;border-radius:10px;
        padding:11px;cursor:pointer;font-weight:800}.cloud-auth-submit{background:#6d28d9;color:#fff}.cloud-auth-cancel{background:#e2e8f0}
      .cloud-auth-switch{display:block;margin:14px auto 0;border:0;background:none;color:#6d28d9;cursor:pointer;font-weight:700}
      .cloud-auth-error{min-height:20px;color:#b91c1c;font-size:13px;margin-top:7px}
      .cloud-toast{position:fixed;left:50%;bottom:22px;z-index:1500;transform:translate(-50%,20px);opacity:0;
        pointer-events:none;background:#153f36;color:#fff;padding:11px 16px;border-radius:10px;transition:.2s}
      .cloud-toast.show{opacity:1;transform:translate(-50%,0)}.cloud-toast.error{background:#991b1b}
      @media(max-width:640px){.cloud-account{position:static;margin:8px auto;width:max-content}}
    `;
    document.head.appendChild(style);

    const account = document.createElement("div");
    account.id = "cloud-account";
    account.className = "cloud-account";
    account.innerHTML = `
      <span id="cloud-dot" class="cloud-dot"></span>
      <span id="cloud-account-label">Guest · local mode</span>
      <button id="cloud-signin" class="cloud-primary" type="button">Sign in</button>
      <button id="cloud-signout" class="cloud-link" type="button" hidden>Sign out</button>`;
    document.body.appendChild(account);

    const auth = document.createElement("div");
    auth.id = "cloud-auth";
    auth.className = "cloud-auth";
    auth.innerHTML = `
      <form class="cloud-auth-card" id="cloud-auth-form">
        <h2 id="cloud-auth-title">Sign in</h2>
        <p>Sign in to keep your study progress across devices.</p>
        <input id="cloud-name" autocomplete="name" maxlength="60" placeholder="Your name" hidden>
        <input id="cloud-email" type="email" autocomplete="email" required placeholder="Email">
        <input id="cloud-password" type="password" autocomplete="current-password" minlength="6" required placeholder="Password">
        <div id="cloud-auth-error" class="cloud-auth-error"></div>
        <div class="cloud-auth-actions">
          <button class="cloud-auth-cancel" id="cloud-auth-cancel" type="button">Continue as guest</button>
          <button class="cloud-auth-submit" id="cloud-auth-submit" type="submit">Sign in</button>
        </div>
        <button class="cloud-auth-switch" id="cloud-auth-switch" type="button">Create a student account</button>
      </form>`;
    document.body.appendChild(auth);

    document.getElementById("cloud-signin").addEventListener("click", openAuth);
    document.getElementById("cloud-signout").addEventListener("click", () => firebaseAuth.signOut());
    document.getElementById("cloud-auth-cancel").addEventListener("click", closeAuth);
    document.getElementById("cloud-auth-switch").addEventListener("click", toggleMode);
    document.getElementById("cloud-auth-form").addEventListener("submit", submitAuth);
    auth.addEventListener("click", event => { if (event.target === auth) closeAuth(); });
    window.addEventListener("online", updateOnline);
    window.addEventListener("offline", updateOnline);
    updateOnline();
  }

  function updateOnline() {
    const dot = document.getElementById("cloud-dot");
    if (dot) dot.classList.toggle("offline", !navigator.onLine);
  }

  function openAuth() {
    document.getElementById("cloud-auth-error").textContent = "";
    document.getElementById("cloud-auth").classList.add("show");
    setTimeout(() => document.getElementById("cloud-email").focus(), 50);
  }

  function closeAuth() {
    document.getElementById("cloud-auth").classList.remove("show");
  }

  function toggleMode() {
    authMode = authMode === "signin" ? "register" : "signin";
    const registering = authMode === "register";
    document.getElementById("cloud-name").hidden = !registering;
    document.getElementById("cloud-name").required = registering;
    document.getElementById("cloud-auth-title").textContent = registering ? "Create student account" : "Sign in";
    document.getElementById("cloud-auth-submit").textContent = registering ? "Create account" : "Sign in";
    document.getElementById("cloud-auth-switch").textContent = registering ? "I already have an account" : "Create a student account";
    document.getElementById("cloud-password").autocomplete = registering ? "new-password" : "current-password";
    document.getElementById("cloud-auth-error").textContent = "";
  }

  async function submitAuth(event) {
    event.preventDefault();
    const email = document.getElementById("cloud-email").value.trim();
    const password = document.getElementById("cloud-password").value;
    const name = document.getElementById("cloud-name").value.trim();
    const error = document.getElementById("cloud-auth-error");
    const submit = document.getElementById("cloud-auth-submit");
    error.textContent = "";
    submit.disabled = true;
    try {
      if (authMode === "register") {
        const credential = await firebaseAuth.createUserWithEmailAndPassword(email, password);
        await credential.user.updateProfile({ displayName: name });
        await firestoreDb.collection("users").doc(credential.user.uid).set({
          displayName: name, email, role: "student", createdAt: serverTime(), updatedAt: serverTime()
        }, { merge: true });
      } else {
        await firebaseAuth.signInWithEmailAndPassword(email, password);
      }
      closeAuth();
    } catch (err) {
      error.textContent = friendlyError(err);
    } finally {
      submit.disabled = false;
    }
  }

  function friendlyError(err) {
    const code = err && err.code;
    if (code === "auth/email-already-in-use") return "That email already has an account.";
    if (code === "auth/invalid-email") return "Enter a valid email address.";
    if (code === "auth/weak-password") return "Use a password with at least six characters.";
    if (code === "auth/user-not-found" || code === "auth/wrong-password" || code === "auth/invalid-credential") return "Incorrect email or password.";
    if (code === "auth/network-request-failed") return "Network unavailable. Guest study still works.";
    return (err && err.message) || "Authentication failed.";
  }

  async function handleAuth(user) {
    state.user = user;
    state.profile = null;
    if (user) {
      try {
        const ref = firestoreDb.collection("users").doc(user.uid);
        const snapshot = await ref.get();
        if (snapshot.exists) {
          state.profile = snapshot.data();
          await ref.set({
            email: user.email || "",
            displayName: user.displayName || snapshot.data().displayName || "",
            updatedAt: serverTime()
          }, { merge: true });
        } else {
          state.profile = { displayName: user.displayName || user.email || "Student", email: user.email || "", role: "student" };
          await ref.set({ ...state.profile, createdAt: serverTime(), updatedAt: serverTime() }, { merge: true });
        }
      } catch (err) {
        state.profile = { displayName: user.displayName || user.email || "Student", role: "student" };
        toast("Signed in; cloud profile is temporarily unavailable.", true);
      }
      const name = (state.profile && state.profile.displayName) || user.displayName || user.email;
      if (name) {
        saveName(name);
        applyGreeting(name);
        const welcome = document.getElementById("welcome-modal");
        if (welcome) welcome.className = "modal-overlay";
      }
      await Promise.all([loadCloudVocabulary(), loadCloudProgress()]);
    }
    renderAccount();
  }

  function renderAccount() {
    const label = document.getElementById("cloud-account-label");
    if (!state.user) {
      label.textContent = "Guest · local mode";
      document.getElementById("cloud-signin").hidden = false;
      document.getElementById("cloud-signout").hidden = true;
    } else {
      const name = (state.profile && state.profile.displayName) || state.user.displayName || state.user.email;
      label.textContent = `${name}${isTeacher() ? " · Teacher" : " · Student"}`;
      document.getElementById("cloud-signin").hidden = true;
      document.getElementById("cloud-signout").hidden = false;
    }
  }

  async function loadCloudVocabulary() {
    try {
      const snapshot = await vocabularyRef.get();
      const data = snapshot.exists ? snapshot.data() : null;
      if (data && Array.isArray(data.words) && data.words.length) {
        localStorage.setItem("wordlist", JSON.stringify(data.words));
        words = loadWords();
        updateHomeStats();
        toast("Cloud vocabulary synchronized.");
      }
    } catch (err) {
      toast("Using the saved local vocabulary.", true);
    }
  }

  function progressRef() {
    return firestoreDb.collection("users").doc(state.user.uid).collection("appState").doc("flipcards");
  }

  async function loadCloudProgress() {
    try {
      const ref = progressRef();
      const snapshot = await ref.get();
      const localProgress = loadProgress();
      if (snapshot.exists && snapshot.data().progress) {
        progress = { ...localProgress, ...snapshot.data().progress };
        applyingCloudProgress = true;
        sessionStorage.setItem("flipProgress", JSON.stringify(progress));
        applyingCloudProgress = false;
        updateHomeStats();
        toast("Study progress synchronized.");
      } else if (Object.keys(localProgress).length) {
        progress = localProgress;
        await ref.set({ progress, updatedAt: serverTime(), schemaVersion: 1 }, { merge: true });
        toast("Local progress added to your account.");
      }
    } catch (err) {
      toast("Using progress saved in this browser.", true);
    }
  }

  function scheduleProgressSync() {
    if (!state.user || applyingCloudProgress) return;
    clearTimeout(progressTimer);
    progressTimer = setTimeout(() => {
      progressRef().set({
        progress: { ...progress },
        updatedAt: serverTime(),
        schemaVersion: 1
      }, { merge: true }).catch(() => toast("Progress saved locally; cloud update failed.", true));
    }, 450);
  }

  const originalSaveProgress = window.saveProgress;
  window.saveProgress = function () {
    originalSaveProgress();
    scheduleProgressSync();
  };

  const originalSaveWords = window.saveWords;
  window.saveWords = function (list) {
    originalSaveWords(list);
    if (isTeacher()) {
      vocabularyRef.set({
        words: list, updatedAt: serverTime(), updatedBy: state.user.uid, schemaVersion: 1
      }).then(() => toast("Vocabulary saved locally and to Firebase."))
        .catch(() => toast("Saved locally; cloud update failed.", true));
    } else if (state.user) {
      toast("Saved on this device. Teacher role is required for cloud publishing.", true);
    }
  };

  window.requirePw = function () {
    if (isTeacher()) {
      showScreen("editor");
      return;
    }
    if (state.user) {
      toast("This account does not have teacher permission.", true);
      return;
    }
    openAuth();
    toast("Sign in with a teacher account to continue.");
  };

  const originalSwitchUser = window.switchUser;
  window.switchUser = function () {
    if (state.user) {
      if (confirm("Sign out and clear this device's current study session?")) {
        firebaseAuth.signOut().then(() => originalSwitchUser());
      }
      return;
    }
    originalSwitchUser();
  };

  document.addEventListener("DOMContentLoaded", () => {
    injectUi();
    firebaseAuth.onAuthStateChanged(handleAuth);
  });
})();
