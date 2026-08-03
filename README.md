# EHSAN FlipCards

EHSAN FlipCards is a browser-based, language-flexible flashcard application for vocabulary study, active recall, and self-assessment.

Students can study Easy, Medium, or Hard decks and keep separate mastery progress for each level. Teachers manage all vocabulary and student access through Firebase-backed tools, while guests can begin immediately with a dedicated Guest Default deck.

[Open the live app](https://ehsan-flipcards.learninglabs.workers.dev/)

## Features

- Interactive two-sided vocabulary cards
- Easy, Medium, and Hard decks for signed-in students
- A separate teacher-managed Guest Default deck
- Independent mastery progress for every difficulty
- Study sessions of 10 cards, 25 cards, or the full deck
- Optional timed mode with 10 seconds per card
- Focus Mode for cards marked Hard or Again
- Self-assessment using Again, Hard, and Easy ratings
- Teacher-only vocabulary and student management
- UTF-8 word-list import and export
- Optional pronunciation using the Web Speech API
- English, Spanish, Russian, Persian, and Turkish interface options
- Keyboard shortcuts for faster study
- Optional sound effects and background music
- Responsive desktop and mobile layout
- Firebase Authentication and Cloud Firestore synchronization
- Local fallback vocabulary when Firebase is temporarily unavailable

## How Studying Works

### Study Cards

Students can choose one of three session sizes:

| Session | Cards |
| --- | ---: |
| Quick Review | 10 |
| Standard Session | 25 |
| Full Deck | Every card in the selected difficulty |

Each card starts with the vocabulary word on the front. Flipping the card reveals its definition, synonym, and antonym.

After checking the answer, the student rates the card:

- **Again** — the word was not recalled and should be reviewed again.
- **Hard** — the word was recalled with difficulty.
- **Easy** — the word has been mastered.

The selected rating is saved in the current difficulty's progress record.

### Focus Mode

Focus Mode creates a study queue containing only cards marked **Again** or **Hard** in the currently selected difficulty.

Marking a Focus Mode card Easy removes it from the queue. Again and Hard keep it in rotation until it is mastered.

### Timed Mode

Timed Mode gives the student 10 seconds to flip each card. If the timer expires before the card is flipped, the card is automatically marked Again.

Timed Mode is optional and can be enabled from the session-size dialog.

## Accounts and Access

### Guest

Guests can study without creating an account. They use the **Guest Default** deck and cannot select Easy, Medium, or Hard.

Guest mastery progress remains only in the current browser session. It is not uploaded to Firestore.

### Student

Students sign in or create an account using Firebase Authentication. A signed-in student can:

- Select Easy, Medium, or Hard
- Maintain independent progress for every difficulty
- Synchronize mastery progress across devices
- Continue studying locally if cloud synchronization is temporarily unavailable

The last selected difficulty is remembered in the browser.

### Teacher

Teacher access is controlled by the `role` field in the teacher's Firestore user document. Teachers can:

- Manage Guest Default, Easy, Medium, and Hard decks in separate tabs
- Add, edit, import, export, or remove vocabulary
- Send password-reset emails to students
- Remove a student's application access
- Delete a student's saved FlipCards progress

Teacher controls are hidden from guests and students, and Firestore rules enforce the same permissions at the database level.

## Difficulty Model

The application uses four vocabulary documents:

```text
vocabulary/guest
vocabulary/easy
vocabulary/medium
vocabulary/hard
```

Each document follows this general structure:

```javascript
{
  difficulty: "medium",
  words: [
    {
      word: "abundant",
      syn: "plentiful",
      ant: "scarce",
      def: "existing in large quantities"
    }
  ],
  schemaVersion: 2,
  updatedBy: "TEACHER_UID",
  updatedAt: "Firestore server timestamp"
}
```

Existing installations remain compatible with the former `appData/vocabulary` document. Until the new Guest Default and Medium documents are published, the previous vocabulary can be used as migration data.

## Progress Model

Signed-in progress is stored in the student's nested app-state document:

```text
users/{studentUid}/appState/flipcards
```

Progress is separated by difficulty:

```javascript
{
  progressByDifficulty: {
    easy: {
      "Example word": "easy"
    },
    medium: {
      "Another word": "hard"
    },
    hard: {
      "Advanced word": "again"
    }
  },
  schemaVersion: 2,
  updatedAt: "Firestore server timestamp"
}
```

Valid mastery values are `easy`, `hard`, and `again`.

Legacy cloud progress stored in a single `progress` object is treated as Medium progress during migration.

## Language Support

FlipCards is not limited to English vocabulary. Teachers can upload words, related terms, opposites, and definitions in any language or writing system supported by the browser.

The vocabulary language and interface language are independent:

- The interface can be displayed in English, Spanish, Russian, Persian, or Turkish.
- Each deck can contain vocabulary in any language.
- Guest Default, Easy, Medium, and Hard may use the same language or different languages.
- UTF-8 imports preserve Latin, Cyrillic, Persian/Arabic, and other Unicode scripts.

The bundled vocabulary and current text-to-speech configuration are English-oriented. Non-English decks remain fully usable, but accurate pronunciation may require changing `utt.lang` in `js/app.js` from `en-US` to the appropriate language code.

## Technology

- HTML5
- CSS3
- Vanilla JavaScript
- Firebase Authentication
- Cloud Firestore
- Firebase compatibility SDK
- Web Speech API
- Local Storage and Session Storage APIs
- QRCode.js
- Cloudflare hosting

The frontend requires no framework or build step.

## Project Structure

```text
.
|-- css/
|   `-- styles.css
|-- js/
|   |-- access-portal.js
|   |-- app.js
|   |-- cloud-sync.js
|   |-- firebase-init.js
|   `-- user-management.js
|-- firestore.rules
|-- index.html
`-- README.md
```

### Main files

- `index.html` contains the application screens, study dialogs, help content, editor, and script loading order.
- `css/styles.css` contains the complete responsive interface styling and card animations.
- `js/app.js` contains the flashcard engine, progress logic, difficulty controls, editor, translations, timer, audio, and text-to-speech behavior.
- `js/cloud-sync.js` connects authentication, vocabulary, and student progress to Firebase.
- `js/access-portal.js` controls Guest, Student, and Teacher entry paths.
- `js/user-management.js` provides teacher-only student management.
- `js/firebase-init.js` initializes Firebase.
- `firestore.rules` defines the application data permissions.

## Run Locally

Clone the repository:

```bash
git clone https://github.com/EAshourzadeh/ehsan-flipcards.git
cd ehsan-flipcards
```

Start a static web server. For example, with Python:

```bash
python -m http.server 8000
```

Open the application at:

```text
http://localhost:8000/
```

Using a local web server is recommended because browser behavior can differ when `index.html` is opened directly as a file.

## Firebase Setup

### 1. Create or select a Firebase project

Enable these Firebase services:

- Authentication
- Email/Password sign-in
- Cloud Firestore

### 2. Configure the web application

Place the Firebase web configuration in `js/firebase-init.js`:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

Firebase web configuration identifies the Firebase project. Database access is protected separately by Firestore rules.

### 3. Deploy the Firestore rules

The included `firestore.rules` file is required for role-based access and difficulty-specific vocabulary.

Copy its contents into **Firebase Console → Firestore Database → Rules**, or deploy it with the Firebase CLI after configuring the project:

```bash
firebase deploy --only firestore:rules --project YOUR_PROJECT_ID
```

The rules enforce these important permissions:

- Guests can read only the Guest Default vocabulary document.
- Signed-in users can read Easy, Medium, and Hard vocabulary.
- Only teachers can publish or delete vocabulary.
- Students can read and update only their own FlipCards progress.
- Teachers can inspect or remove student application data.

### 4. Create the first teacher

Create the teacher account in Firebase Authentication, then manually create the matching Firestore user document:

```text
Collection: users
Document ID: the teacher's Firebase Authentication UID
```

Example fields:

```javascript
{
  displayName: "Teacher Name",
  email: "teacher@example.com",
  role: "teacher"
}
```

The document ID must exactly match the Authentication UID. Normal registration intentionally creates a student profile and must not assign teacher permissions.

## Import and Export Format

Teachers can replace the active editor tab by importing a UTF-8 `.txt` file.

Every line must contain exactly four tab-separated fields. Every field must end with a semicolon:

```text
abandon;	leave;	keep;	to leave something behind;
benevolent;	kind;	cruel;	well meaning and generous;
scarce;	rare;	abundant;	available only in small quantities;
```

The fields are:

```text
word<TAB>synonym<TAB>antonym<TAB>definition
```

The definition may be empty, but its fourth field and semicolon must still be present:

```text
example;	sample;	original;	;
```

Blank lines, missing fields, additional fields, embedded semicolons, or missing terminating semicolons cause the import to be rejected.

Imports and exports affect only the currently selected Guest Default, Easy, Medium, or Hard editor tab.

## Browser Storage

Vocabulary is cached locally using difficulty-specific keys:

```text
wordlist:guest
wordlist:easy
wordlist:medium
wordlist:hard
```

Session progress uses keys such as:

```text
flipProgress:guest
flipProgress:easy
flipProgress:medium
flipProgress:hard
```

The previous `wordlist` and `flipProgress` keys remain recognized for migration compatibility. Existing student data is treated as Medium data, while the legacy vocabulary can also seed Guest Default until its dedicated document is published.

Browser storage provides convenience and temporary fallback behavior. It is not an authorization system; Firebase Authentication, user roles, and Firestore rules protect cloud operations.

## Keyboard Shortcuts

During a study session:

| Key | Action |
| --- | --- |
| Space or Enter | Flip the current card |
| Left Arrow | Previous card |
| Right Arrow | Next card |
| 1 | Mark Again after flipping |
| 2 | Mark Hard after flipping |
| 3 | Mark Easy after flipping |

Space, Enter, and the rating shortcuts also work in Focus Mode where applicable.

## Deployment

FlipCards is a static frontend. It can be deployed through Cloudflare Workers, Cloudflare Pages, or another static hosting provider.

Before publishing a new version:

1. Confirm that `js/firebase-init.js` points to the intended Firebase project.
2. Deploy the current `firestore.rules`.
3. Publish at least the Guest Default and Medium vocabulary documents.
4. Verify Guest, Student, and Teacher entry paths.
5. Test Easy, Medium, and Hard progress independently.
6. Confirm that student progress synchronizes after signing in on another browser.
7. Confirm that signing out does not interrupt an active study session.
8. Verify that teacher controls remain hidden from non-teachers.

The static host serves the frontend; Firebase separately provides authentication and database services.

## Security Notes

- Do not rely on hidden teacher buttons for security. Always deploy the included Firestore rules.
- Do not give students a Firestore profile with `role: "teacher"`.
- Do not place service-account credentials or private server keys in frontend files.
- Firebase web configuration may appear in browser code, but all data permissions must be enforced by Firestore rules.
- The teacher's Remove Access action deletes the student's app profile and FlipCards progress and adds a revocation record.
- Removing access does not delete the Firebase Authentication identity itself. Authentication-account deletion requires Firebase Console or a trusted server using the Firebase Admin SDK.

## Browser Support

FlipCards works best in current versions of Chrome, Edge, Firefox, and Safari. Unicode vocabulary is handled by the browser. Text-to-speech voice availability and quality depend on the selected speech language, browser, and operating system.

## Contributing

Contributions and bug reports are welcome.

1. Fork the repository.
2. Create a focused feature branch.
3. Test Guest, Student, and Teacher behavior when changing authentication or data logic.
4. Test all three student difficulties when changing study or progress behavior.
5. Commit the change with a clear message.
6. Open a pull request describing the behavior and verification performed.

## Author

Created by [Ehsan Ashourzadeh](https://github.com/EAshourzadeh) for educational use.
