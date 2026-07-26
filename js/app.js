/* ══════════════════════════════════════════════
   MULTI-LANGUAGE UI ENGINE
══════════════════════════════════════════════ */
const UI_LANG_KEY = 'ehsanUiLang';
const UI_LANG_META = {
  en:{label:'EN', dir:'ltr'},
  es:{label:'Español', dir:'ltr'},
  ru:{label:'Русский', dir:'ltr'},
  fa:{label:'فارسی', dir:'rtl'},
  tr:{label:'Türkçe', dir:'ltr'}
};
const UI_TEXT = {
  "es": {
    "Language": "Idioma",
    "🔒 Teacher Access": "🔒 Acceso docente",
    "Teacher Access": "Acceso docente",
    "Enter the teacher password to edit the word list": "Introduce la contraseña del profesor para editar la lista de palabras",
    "Enter the password to continue": "Introduce la contraseña para continuar",
    "Incorrect password. Try again.": "Contraseña incorrecta. Inténtalo de nuevo.",
    "Password": "Contraseña",
    "Cancel": "Cancelar",
    "Enter": "Entrar",
    "🔑 Change Password": "🔑 Cambiar contraseña",
    "Change Password": "Cambiar contraseña",
    "Enter a new teacher password": "Introduce una nueva contraseña del profesor",
    "Current password": "Contraseña actual",
    "New password": "Nueva contraseña",
    "Confirm new password": "Confirmar nueva contraseña",
    "Save": "Guardar",
    "Current password is incorrect.": "La contraseña actual es incorrecta.",
    "New password must be at least 4 characters.": "La nueva contraseña debe tener al menos 4 caracteres.",
    "New passwords do not match.": "Las nuevas contraseñas no coinciden.",
    "✅ Password changed successfully!": "✅ ¡Contraseña cambiada correctamente!",
    "⚠️": "⚠️",
    "Delete All Words?": "¿Eliminar todas las palabras?",
    "This will permanently remove": "Esto eliminará permanentemente",
    "words from the list. This cannot be undone.": "palabras de la lista. Esta acción no se puede deshacer.",
    "Delete All": "Eliminar todo",
    "⬆️ Upload Word List": "⬆️ Subir lista de palabras",
    "Upload Word List": "Subir lista de palabras",
    "Upload a .txt file to replace the current word list.": "Sube un archivo .txt para reemplazar la lista de palabras actual.",
    "Format (one word per line):": "Formato (una palabra por línea):",
    "(fields separated by a TAB, semicolon after each)": "(campos separados por TAB y punto y coma después de cada uno)",
    "Choose .txt file…": "Elegir archivo .txt…",
    "Replace List": "Reemplazar lista",
    "Please choose a .txt file.": "Elige un archivo .txt.",
    "No valid words found. Check the file format.": "No se encontraron palabras válidas. Revisa el formato del archivo.",
    "Could not read that file. Please try again.": "No se pudo leer ese archivo. Inténtalo de nuevo.",
    "Background music: Off": "Música de fondo: desactivada",
    "Background music: On": "Música de fondo: activada",
    "Designed and developed for educational purposes by Ehsan A.": "Diseñado y desarrollado con fines educativos por Ehsan A.",
    "✏️ Edit Word List": "✏️ Editar lista de palabras",
    "Edit Word List": "Editar lista de palabras",
    "Word": "Palabra",
    "Synonym": "Sinónimo",
    "Antonym": "Antónimo",
    "Definition (optional)": "Definición (opcional)",
    "+ Add Word": "+ Añadir palabra",
    "Save Changes": "Guardar cambios",
    "⬆️ Upload Word List (.txt)": "⬆️ Subir lista de palabras (.txt)",
    "🗑️ Delete All Words": "🗑️ Eliminar todas las palabras",
    "✅ Word list saved!": "✅ ¡Lista de palabras guardada!",
    "Optional definition…": "Definición opcional…",
    "Speak word": "Escuchar palabra",
    "Speak answer": "Escuchar respuesta",
    "← Back to Home": "← Volver al inicio",
    "← Home": "← Inicio",
    "Close": "Cerrar",
    "Got it!": "¡La sé!",
    "Easy": "Fácil",
    "Hard": "Difícil",
    "Again": "Otra vez",
    "Mastery": "Dominio",
    "Progress": "Progreso",
    "Score": "Puntuación",
    "Correct": "Correctas",
    "Incorrect": "Incorrectas",
    "Accuracy": "Precisión",
    "Play Again": "Jugar otra vez",
    "Study Again": "Estudiar otra vez",
    "Welcome!": "¡Bienvenido!",
    "Enter your name to personalise your experience,": "Introduce tu nombre para personalizar tu experiencia,",
    "or continue as a guest.": "o continúa como invitado.",
    "Enter your name…": "Escribe tu nombre…",
    "Let's Go →": "¡Vamos! →",
    "Continue as Guest": "Continuar como invitado",
    "Welcome back,": "Bienvenido de nuevo,",
    "📖 Choose Session Size": "📖 Elegir tamaño de sesión",
    "Choose Session Size": "Elegir tamaño de sesión",
    "How many cards do you want to study?": "¿Cuántas tarjetas quieres estudiar?",
    "⚡ Quick Review": "⚡ Repaso rápido",
    "Quick Review": "Repaso rápido",
    "~5 minutes": "~5 minutos",
    "10 cards": "10 tarjetas",
    "📘 Standard Session": "📘 Sesión estándar",
    "Standard Session": "Sesión estándar",
    "Standard": "Estándar",
    "~15 minutes": "~15 minutos",
    "25 cards": "25 tarjetas",
    "🏆 Full Deck": "🏆 Mazo completo",
    "Full Deck": "Mazo completo",
    "Full prep session": "Sesión completa de preparación",
    "All cards": "Todas las tarjetas",
    "⏱️ Timed Mode": "⏱️ Modo con tiempo",
    "Timed Mode": "Modo con tiempo",
    "(10s per card)": "(10 s por tarjeta)",
    "❓ How to Play": "❓ Cómo jugar",
    "How to Play": "Cómo jugar",
    "Flip the card": "Voltea la tarjeta",
    "— tap it (or press Space) to reveal the definition, synonym, and antonym on the back.": "— tócala (o pulsa Espacio) para ver la definición, el sinónimo y el antónimo al reverso.",
    "Judge yourself honestly": "Evalúate con honestidad",
    "— after flipping, pick": "— después de voltear, elige",
    ", or": "o",
    "based on how well you recalled the word.": "según qué tan bien recordaste la palabra.",
    "— only shows cards you marked": "— solo muestra las tarjetas que marcaste como",
    "or": "o",
    ". Use it to drill your weak spots.": ". Úsalo para practicar tus puntos débiles.",
    "Mastery bar": "Barra de dominio",
    "— fills up as you mark cards": "— se llena cuando marcas tarjetas como",
    ". Try to get it to 100%!": ". ¡Intenta llegar al 100%!",
    "Pronunciation": "Pronunciación",
    "— tap the 🔊 button on any card to hear the word spoken aloud.": "— toca el botón 🔊 en cualquier tarjeta para escuchar la palabra.",
    "Space / Enter": "Espacio / Enter",
    "— flip ·": "— voltear ·",
    "← →": "← →",
    "— navigate": "— navegar",
    "Again ·": "Otra vez ·",
    "Hard ·": "Difícil ·",
    "Easy (after flipping)": "Fácil (después de voltear)",
    "📱 Scan to Open": "📱 Escanear para abrir",
    "Scan to Open": "Escanear para abrir",
    "Point your phone's camera at this code to open EHSAN_FlipCards instantly.": "Apunta la cámara de tu teléfono a este código para abrir EHSAN_FlipCards al instante.",
    "📱 Open on Phone (QR)": "📱 Abrir en el teléfono (QR)",
    "SAT Vocab · Memory Cards": "Vocabulario SAT · Tarjetas de memoria",
    "Cards": "Tarjetas",
    "Mastered": "Dominadas",
    "Due": "Pendientes",
    "📖 Study Cards": "📖 Estudiar tarjetas",
    "Study Cards": "Estudiar tarjetas",
    "Choose 10, 25, or the full deck": "Elige 10, 25 o el mazo completo",
    "🎯 Focus Mode": "🎯 Modo enfoque",
    "Review only Hard & Again cards": "Repasa solo tarjetas Difícil y Otra vez",
    "🔄 Switch User": "🔄 Cambiar usuario",
    "This will clear your name and progress so another student can use this device. Continue?": "Esto borrará tu nombre y progreso para que otro estudiante use este dispositivo. ¿Continuar?",
    "Study All": "Estudiar todo",
    "Timed Mode — flip before time runs out": "Modo con tiempo — voltea antes de que se acabe el tiempo",
    "Card": "Tarjeta",
    "↕ Tap to flip": "↕ Toca para voltear",
    "Judgment": "Evaluación",
    "↩ Again": "↩ Otra vez",
    "Don't know it": "No la sé",
    "😓 Hard": "😓 Difícil",
    "Struggled a bit": "Me costó un poco",
    "✓ Easy": "✓ Fácil",
    "Nav": "Navegación",
    "⇄ Shuffle": "⇄ Mezclar",
    "↺ Reset": "↺ Reiniciar",
    "🎯 Nothing to Focus On Yet": "🎯 Aún no hay nada para enfocar",
    "Nothing to Focus On Yet": "Aún no hay nada para enfocar",
    "Study some cards first and mark any you find": "Primero estudia algunas tarjetas y marca las que te parezcan",
    "— they'll queue up here for drilling.": "— se guardarán aquí para practicar.",
    "📖 Start Studying": "📖 Empezar a estudiar",
    "🎉 All Clear!": "🎉 ¡Todo listo!",
    "All Clear!": "¡Todo listo!",
    "You've cleared every Hard & Again card.": "Has completado todas las tarjetas Difícil y Otra vez.",
    "Keep studying to find your next challenge.": "Sigue estudiando para encontrar tu próximo reto.",
    "📖 Study More Cards": "📖 Estudiar más tarjetas",
    "left": "restantes",
    "0 cleared": "0 completadas",
    "Retry this card": "Reintentar esta tarjeta",
    "Keep in queue": "Mantener en la cola",
    "Remove it!": "¡Quitarla!",
    "Deck Complete!": "¡Mazo completado!",
    "Here's how you did this round": "Así te fue en esta ronda",
    "🎯 Focus on Hard Cards": "🎯 Enfocarse en tarjetas difíciles",
    "Focus on Hard Cards": "Enfocarse en tarjetas difíciles",
    "Add, edit, or remove words. Changes are shared with EHSAN_WordDuel.": "Añade, edita o elimina palabras. Los cambios se comparten con EHSAN_WordDuel.",
    "Leave Definition blank and it will show \"—\" on the card back.": "Deja la definición en blanco y se mostrará \"—\" en el reverso de la tarjeta.",
    "Upload rejected. Fix the listed line(s) and try again.": "Carga rechazada. Corrige las líneas indicadas e inténtalo de nuevo."
  },
  "ru": {
    "Language": "Язык",
    "🔒 Teacher Access": "🔒 Доступ для учителя",
    "Teacher Access": "Доступ для учителя",
    "Enter the teacher password to edit the word list": "Введите пароль учителя, чтобы редактировать список слов",
    "Enter the password to continue": "Введите пароль, чтобы продолжить",
    "Incorrect password. Try again.": "Неверный пароль. Попробуйте еще раз.",
    "Password": "Пароль",
    "Cancel": "Отмена",
    "Enter": "Войти",
    "🔑 Change Password": "🔑 Изменить пароль",
    "Change Password": "Изменить пароль",
    "Enter a new teacher password": "Введите новый пароль учителя",
    "Current password": "Текущий пароль",
    "New password": "Новый пароль",
    "Confirm new password": "Подтвердите новый пароль",
    "Save": "Сохранить",
    "Current password is incorrect.": "Текущий пароль неверный.",
    "New password must be at least 4 characters.": "Новый пароль должен содержать не менее 4 символов.",
    "New passwords do not match.": "Новые пароли не совпадают.",
    "✅ Password changed successfully!": "✅ Пароль успешно изменен!",
    "⚠️": "⚠️",
    "Delete All Words?": "Удалить все слова?",
    "This will permanently remove": "Это безвозвратно удалит",
    "words from the list. This cannot be undone.": "слов из списка. Это действие нельзя отменить.",
    "Delete All": "Удалить все",
    "⬆️ Upload Word List": "⬆️ Загрузить список слов",
    "Upload Word List": "Загрузить список слов",
    "Upload a .txt file to replace the current word list.": "Загрузите файл .txt, чтобы заменить текущий список слов.",
    "Format (one word per line):": "Формат (одно слово на строку):",
    "(fields separated by a TAB, semicolon after each)": "(поля разделены TAB, после каждого стоит точка с запятой)",
    "Choose .txt file…": "Выбрать файл .txt…",
    "Replace List": "Заменить список",
    "Please choose a .txt file.": "Выберите файл .txt.",
    "No valid words found. Check the file format.": "Подходящие слова не найдены. Проверьте формат файла.",
    "Could not read that file. Please try again.": "Не удалось прочитать файл. Попробуйте еще раз.",
    "Background music: Off": "Фоновая музыка: выкл.",
    "Background music: On": "Фоновая музыка: вкл.",
    "Designed and developed for educational purposes by Ehsan A.": "Разработано Эхсаном А. для образовательных целей.",
    "✏️ Edit Word List": "✏️ Редактировать список слов",
    "Edit Word List": "Редактировать список слов",
    "Word": "Слово",
    "Synonym": "Синоним",
    "Antonym": "Антоним",
    "Definition (optional)": "Определение (необязательно)",
    "+ Add Word": "+ Добавить слово",
    "Save Changes": "Сохранить изменения",
    "⬆️ Upload Word List (.txt)": "⬆️ Загрузить список слов (.txt)",
    "🗑️ Delete All Words": "🗑️ Удалить все слова",
    "✅ Word list saved!": "✅ Список слов сохранен!",
    "Optional definition…": "Необязательное определение…",
    "Speak word": "Озвучить слово",
    "Speak answer": "Озвучить ответ",
    "← Back to Home": "← На главную",
    "← Home": "← Главная",
    "Close": "Закрыть",
    "Got it!": "Понял!",
    "Easy": "Легко",
    "Hard": "Сложно",
    "Again": "Еще раз",
    "Mastery": "Освоение",
    "Progress": "Прогресс",
    "Score": "Очки",
    "Correct": "Верно",
    "Incorrect": "Неверно",
    "Accuracy": "Точность",
    "Play Again": "Играть снова",
    "Study Again": "Учиться снова",
    "Welcome!": "Добро пожаловать!",
    "Enter your name to personalise your experience,": "Введите имя, чтобы персонализировать работу,",
    "or continue as a guest.": "или продолжите как гость.",
    "Enter your name…": "Введите имя…",
    "Let's Go →": "Начать →",
    "Continue as Guest": "Продолжить как гость",
    "Welcome back,": "С возвращением,",
    "📖 Choose Session Size": "📖 Выберите размер сессии",
    "Choose Session Size": "Выберите размер сессии",
    "How many cards do you want to study?": "Сколько карточек вы хотите изучать?",
    "⚡ Quick Review": "⚡ Быстрый повтор",
    "Quick Review": "Быстрый повтор",
    "~5 minutes": "~5 минут",
    "10 cards": "10 карточек",
    "📘 Standard Session": "📘 Стандартная сессия",
    "Standard Session": "Стандартная сессия",
    "Standard": "Стандарт",
    "~15 minutes": "~15 минут",
    "25 cards": "25 карточек",
    "🏆 Full Deck": "🏆 Вся колода",
    "Full Deck": "Вся колода",
    "Full prep session": "Полная подготовительная сессия",
    "All cards": "Все карточки",
    "⏱️ Timed Mode": "⏱️ Режим на время",
    "Timed Mode": "Режим на время",
    "(10s per card)": "(10 с на карточку)",
    "❓ How to Play": "❓ Как играть",
    "How to Play": "Как играть",
    "Flip the card": "Переверните карточку",
    "— tap it (or press Space) to reveal the definition, synonym, and antonym on the back.": "— нажмите на нее (или пробел), чтобы увидеть определение, синоним и антоним на обороте.",
    "Judge yourself honestly": "Оценивайте себя честно",
    "— after flipping, pick": "— после переворота выберите",
    ", or": "или",
    "based on how well you recalled the word.": "в зависимости от того, насколько хорошо вы вспомнили слово.",
    "— only shows cards you marked": "— показывает только карточки, отмеченные как",
    "or": "или",
    ". Use it to drill your weak spots.": ". Используйте его, чтобы проработать слабые места.",
    "Mastery bar": "Шкала освоения",
    "— fills up as you mark cards": "— заполняется, когда вы отмечаете карточки как",
    ". Постарайтесь дойти до 100%!": ". Постарайтесь дойти до 100%!",
    "Pronunciation": "Произношение",
    "— tap the 🔊 button on any card to hear the word spoken aloud.": "— нажмите 🔊 на любой карточке, чтобы услышать произношение слова.",
    "Space / Enter": "Пробел / Enter",
    "— flip ·": "— перевернуть ·",
    "← →": "← →",
    "— navigate": "— навигация",
    "Again ·": "Еще раз ·",
    "Hard ·": "Сложно ·",
    "Easy (after flipping)": "Легко (после переворота)",
    "📱 Scan to Open": "📱 Сканировать для открытия",
    "Scan to Open": "Сканировать для открытия",
    "Point your phone's camera at this code to open EHSAN_FlipCards instantly.": "Наведите камеру телефона на этот код, чтобы сразу открыть EHSAN_FlipCards.",
    "📱 Open on Phone (QR)": "📱 Открыть на телефоне (QR)",
    "SAT Vocab · Memory Cards": "Лексика SAT · Карточки памяти",
    "Cards": "Карточки",
    "Mastered": "Освоено",
    "Due": "К повтору",
    "📖 Study Cards": "📖 Изучать карточки",
    "Study Cards": "Изучать карточки",
    "Choose 10, 25, or the full deck": "Выберите 10, 25 или всю колоду",
    "🎯 Focus Mode": "🎯 Режим фокуса",
    "Review only Hard & Again cards": "Повторять только карточки Сложно и Еще раз",
    "🔄 Switch User": "🔄 Сменить пользователя",
    "This will clear your name and progress so another student can use this device. Continue?": "Это удалит ваше имя и прогресс, чтобы устройством мог воспользоваться другой ученик. Продолжить?",
    "Study All": "Изучать все",
    "Timed Mode — flip before time runs out": "Режим на время — переверните до окончания времени",
    "Card": "Карточка",
    "↕ Tap to flip": "↕ Нажмите, чтобы перевернуть",
    "Judgment": "Оценка",
    "↩ Again": "↩ Еще раз",
    "Don't know it": "Не знаю",
    "😓 Hard": "😓 Сложно",
    "Struggled a bit": "Было трудно",
    "✓ Easy": "✓ Легко",
    "Nav": "Навигация",
    "⇄ Shuffle": "⇄ Перемешать",
    "↺ Reset": "↺ Сбросить",
    "🎯 Nothing to Focus On Yet": "🎯 Пока нечего повторять",
    "Nothing to Focus On Yet": "Пока нечего повторять",
    "Study some cards first and mark any you find": "Сначала изучите карточки и отметьте те, которые кажутся",
    "— they'll queue up here for drilling.": "— они появятся здесь для тренировки.",
    "📖 Start Studying": "📖 Начать изучение",
    "🎉 All Clear!": "🎉 Все чисто!",
    "All Clear!": "Все чисто!",
    "You've cleared every Hard & Again card.": "Вы прошли все карточки Сложно и Еще раз.",
    "Keep studying to find your next challenge.": "Продолжайте учиться, чтобы найти следующий вызов.",
    "📖 Study More Cards": "📖 Изучать еще карточки",
    "left": "осталось",
    "0 cleared": "0 пройдено",
    "Retry this card": "Повторить эту карточку",
    "Keep in queue": "Оставить в очереди",
    "Remove it!": "Убрать!",
    "Deck Complete!": "Колода завершена!",
    "Here's how you did this round": "Вот ваши результаты за раунд",
    "🎯 Focus on Hard Cards": "🎯 Повторить сложные карточки",
    "Focus on Hard Cards": "Повторить сложные карточки",
    "Add, edit, or remove words. Changes are shared with EHSAN_WordDuel.": "Добавляйте, редактируйте или удаляйте слова. Изменения синхронизируются с EHSAN_WordDuel.",
    "Leave Definition blank and it will show \"—\" on the card back.": "Оставьте поле определения пустым, и на обороте карточки будет показано \"—\".",
    "Upload rejected. Fix the listed line(s) and try again.": "Загрузка отклонена. Исправьте указанные строки и попробуйте снова."
  },
  "fa": {
    "Language": "زبان",
    "🔒 Teacher Access": "🔒 دسترسی معلم",
    "Teacher Access": "دسترسی معلم",
    "Enter the teacher password to edit the word list": "برای ویرایش فهرست واژگان، رمز عبور معلم را وارد کنید",
    "Enter the password to continue": "برای ادامه رمز عبور را وارد کنید",
    "Incorrect password. Try again.": "رمز عبور نادرست است. دوباره تلاش کنید.",
    "Password": "رمز عبور",
    "Cancel": "لغو",
    "Enter": "ورود",
    "🔑 Change Password": "🔑 تغییر رمز عبور",
    "Change Password": "تغییر رمز عبور",
    "Enter a new teacher password": "رمز عبور جدید معلم را وارد کنید",
    "Current password": "رمز عبور فعلی",
    "New password": "رمز عبور جدید",
    "Confirm new password": "تأیید رمز عبور جدید",
    "Save": "ذخیره",
    "Current password is incorrect.": "رمز عبور فعلی نادرست است.",
    "New password must be at least 4 characters.": "رمز عبور جدید باید حداقل ۴ نویسه باشد.",
    "New passwords do not match.": "رمزهای عبور جدید یکسان نیستند.",
    "✅ Password changed successfully!": "✅ رمز عبور با موفقیت تغییر کرد!",
    "⚠️": "⚠️",
    "Delete All Words?": "همه واژگان حذف شوند؟",
    "This will permanently remove": "این کار به‌طور دائمی حذف می‌کند:",
    "words from the list. This cannot be undone.": "واژه از فهرست. این کار قابل بازگشت نیست.",
    "Delete All": "حذف همه",
    "⬆️ Upload Word List": "⬆️ بارگذاری فهرست واژگان",
    "Upload Word List": "بارگذاری فهرست واژگان",
    "Upload a .txt file to replace the current word list.": "برای جایگزینی فهرست فعلی واژگان، یک فایل .txt بارگذاری کنید.",
    "Format (one word per line):": "قالب (هر واژه در یک خط):",
    "(fields separated by a TAB, semicolon after each)": "(فیلدها با TAB جدا شوند و پس از هرکدام نقطه‌ویرگول بیاید)",
    "Choose .txt file…": "انتخاب فایل .txt…",
    "Replace List": "جایگزینی فهرست",
    "Please choose a .txt file.": "لطفاً یک فایل .txt انتخاب کنید.",
    "No valid words found. Check the file format.": "واژه معتبری پیدا نشد. قالب فایل را بررسی کنید.",
    "Could not read that file. Please try again.": "خواندن فایل ممکن نبود. دوباره تلاش کنید.",
    "Background music: Off": "موسیقی پس‌زمینه: خاموش",
    "Background music: On": "موسیقی پس‌زمینه: روشن",
    "Designed and developed for educational purposes by Ehsan A.": "طراحی و توسعه برای اهداف آموزشی توسط احسان A.",
    "✏️ Edit Word List": "✏️ ویرایش فهرست واژگان",
    "Edit Word List": "ویرایش فهرست واژگان",
    "Word": "واژه",
    "Synonym": "مترادف",
    "Antonym": "متضاد",
    "Definition (optional)": "تعریف (اختیاری)",
    "+ Add Word": "+ افزودن واژه",
    "Save Changes": "ذخیره تغییرات",
    "⬆️ Upload Word List (.txt)": "⬆️ بارگذاری فهرست واژگان (.txt)",
    "🗑️ Delete All Words": "🗑️ حذف همه واژگان",
    "✅ Word list saved!": "✅ فهرست واژگان ذخیره شد!",
    "Optional definition…": "تعریف اختیاری…",
    "Speak word": "پخش تلفظ واژه",
    "Speak answer": "پخش تلفظ پاسخ",
    "← Back to Home": "→ بازگشت به خانه",
    "← Home": "→ خانه",
    "←": "→",
    "Close": "بستن",
    "Got it!": "بلد بودم!",
    "Easy": "آسان",
    "Hard": "سخت",
    "Again": "دوباره",
    "Mastery": "تسلط",
    "Progress": "پیشرفت",
    "Score": "امتیاز",
    "Correct": "درست",
    "Incorrect": "نادرست",
    "Accuracy": "دقت",
    "Play Again": "بازی دوباره",
    "Study Again": "مطالعه دوباره",
    "Welcome!": "خوش آمدید!",
    "Enter your name to personalise your experience,": "برای شخصی‌سازی تجربه، نام خود را وارد کنید،",
    "or continue as a guest.": "یا به‌عنوان مهمان ادامه دهید.",
    "Enter your name…": "نام خود را وارد کنید…",
    "Let's Go →": "شروع کنیم ←",
    "Continue as Guest": "ادامه به‌عنوان مهمان",
    "Welcome back,": "خوش برگشتید،",
    "📖 Choose Session Size": "📖 انتخاب اندازه جلسه",
    "Choose Session Size": "انتخاب اندازه جلسه",
    "How many cards do you want to study?": "چند کارت می‌خواهید مطالعه کنید؟",
    "⚡ Quick Review": "⚡ مرور سریع",
    "Quick Review": "مرور سریع",
    "~5 minutes": "حدود ۵ دقیقه",
    "10 cards": "۱۰ کارت",
    "📘 Standard Session": "📘 جلسه استاندارد",
    "Standard Session": "جلسه استاندارد",
    "Standard": "استاندارد",
    "~15 minutes": "حدود ۱۵ دقیقه",
    "25 cards": "۲۵ کارت",
    "🏆 Full Deck": "🏆 کل دسته کارت",
    "Full Deck": "کل دسته کارت",
    "Full prep session": "جلسه کامل آمادگی",
    "All cards": "همه کارت‌ها",
    "⏱️ Timed Mode": "⏱️ حالت زمان‌دار",
    "Timed Mode": "حالت زمان‌دار",
    "(10s per card)": "(۱۰ ثانیه برای هر کارت)",
    "❓ How to Play": "❓ روش بازی",
    "How to Play": "روش بازی",
    "Flip the card": "کارت را برگردانید",
    "— tap it (or press Space) to reveal the definition, synonym, and antonym on the back.": "— روی آن بزنید (یا Space را فشار دهید) تا تعریف، مترادف و متضاد پشت کارت نمایش داده شود.",
    "Judge yourself honestly": "صادقانه خودتان را ارزیابی کنید",
    "— after flipping, pick": "— پس از برگرداندن، انتخاب کنید:",
    ", or": "یا",
    "based on how well you recalled the word.": "بر اساس اینکه واژه را چقدر خوب به یاد آوردید.",
    "— only shows cards you marked": "— فقط کارت‌هایی را نشان می‌دهد که علامت زده‌اید:",
    "or": "یا",
    ". Use it to drill your weak spots.": ". از آن برای تمرین نقاط ضعف خود استفاده کنید.",
    "Mastery bar": "نوار تسلط",
    "— fills up as you mark cards": "— با علامت‌زدن کارت‌ها به‌عنوان",
    ". Try to get it to 100%!": "پر می‌شود. تلاش کنید به ۱۰۰٪ برسید!",
    "Pronunciation": "تلفظ",
    "— tap the 🔊 button on any card to hear the word spoken aloud.": "— روی دکمه 🔊 هر کارت بزنید تا تلفظ واژه را بشنوید.",
    "Space / Enter": "Space / Enter",
    "— flip ·": "— برگرداندن ·",
    "← →": "→ ←",
    "— navigate": "— جابه‌جایی",
    "Again ·": "دوباره ·",
    "Hard ·": "سخت ·",
    "Easy (after flipping)": "آسان (پس از برگرداندن)",
    "📱 Scan to Open": "📱 اسکن برای باز کردن",
    "Scan to Open": "اسکن برای باز کردن",
    "Point your phone's camera at this code to open EHSAN_FlipCards instantly.": "دوربین گوشی را روی این کد بگیرید تا EHSAN_FlipCards فوراً باز شود.",
    "📱 Open on Phone (QR)": "📱 باز کردن روی گوشی (QR)",
    "SAT Vocab · Memory Cards": "واژگان SAT · کارت‌های حافظه",
    "Cards": "کارت‌ها",
    "Mastered": "مسلط‌شده",
    "Due": "نیازمند مرور",
    "📖 Study Cards": "📖 مطالعه کارت‌ها",
    "Study Cards": "مطالعه کارت‌ها",
    "Choose 10, 25, or the full deck": "۱۰، ۲۵ یا کل دسته را انتخاب کنید",
    "🎯 Focus Mode": "🎯 حالت تمرکز",
    "Review only Hard & Again cards": "فقط کارت‌های سخت و دوباره را مرور کنید",
    "🔄 Switch User": "🔄 تغییر کاربر",
    "This will clear your name and progress so another student can use this device. Continue?": "این کار نام و پیشرفت شما را پاک می‌کند تا دانش‌آموز دیگری از این دستگاه استفاده کند. ادامه می‌دهید؟",
    "Study All": "مطالعه همه",
    "Timed Mode — flip before time runs out": "حالت زمان‌دار — پیش از پایان زمان کارت را برگردانید",
    "Card": "کارت",
    "↕ Tap to flip": "↕ برای برگرداندن بزنید",
    "Judgment": "ارزیابی",
    "↩ Again": "↩ دوباره",
    "Don't know it": "نمی‌دانم",
    "😓 Hard": "😓 سخت",
    "Struggled a bit": "کمی سخت بود",
    "✓ Easy": "✓ آسان",
    "Nav": "جابه‌جایی",
    "⇄ Shuffle": "⇄ درهم‌سازی",
    "↺ Reset": "↺ بازنشانی",
    "🎯 Nothing to Focus On Yet": "🎯 هنوز موردی برای تمرکز نیست",
    "Nothing to Focus On Yet": "هنوز موردی برای تمرکز نیست",
    "Study some cards first and mark any you find": "ابتدا چند کارت مطالعه کنید و مواردی را که",
    "— they'll queue up here for drilling.": "علامت می‌زنید، برای تمرین اینجا قرار می‌گیرند.",
    "📖 Start Studying": "📖 شروع مطالعه",
    "🎉 All Clear!": "🎉 همه پاک شد!",
    "All Clear!": "همه پاک شد!",
    "You've cleared every Hard & Again card.": "همه کارت‌های سخت و دوباره را پاک کرده‌اید.",
    "Keep studying to find your next challenge.": "به مطالعه ادامه دهید تا چالش بعدی را پیدا کنید.",
    "📖 Study More Cards": "📖 مطالعه کارت‌های بیشتر",
    "left": "باقی‌مانده",
    "0 cleared": "۰ پاک‌شده",
    "Retry this card": "تلاش دوباره برای این کارت",
    "Keep in queue": "نگه‌داشتن در صف",
    "Remove it!": "حذف شود!",
    "Deck Complete!": "دسته کارت کامل شد!",
    "Here's how you did this round": "نتیجه شما در این دور",
    "🎯 Focus on Hard Cards": "🎯 تمرکز روی کارت‌های سخت",
    "Focus on Hard Cards": "تمرکز روی کارت‌های سخت",
    "Add, edit, or remove words. Changes are shared with EHSAN_WordDuel.": "واژگان را اضافه، ویرایش یا حذف کنید. تغییرات با EHSAN_WordDuel مشترک است.",
    "Leave Definition blank and it will show \"—\" on the card back.": "اگر تعریف را خالی بگذارید، پشت کارت \"—\" نمایش داده می‌شود.",
    "Upload rejected. Fix the listed line(s) and try again.": "بارگذاری رد شد. خط‌های فهرست‌شده را اصلاح کنید و دوباره تلاش کنید."
  },
  "tr": {
    "Language": "Dil",
    "🔒 Teacher Access": "🔒 Öğretmen Erişimi",
    "Teacher Access": "Öğretmen Erişimi",
    "Enter the teacher password to edit the word list": "Kelime listesini düzenlemek için öğretmen şifresini giriniz",
    "Enter the password to continue": "Devam etmek için şifreyi giriniz",
    "Incorrect password. Try again.": "Şifre yanlış. Lütfen tekrar deneyiniz.",
    "Password": "Şifre",
    "Cancel": "İptal",
    "Enter": "Giriş",
    "🔑 Change Password": "🔑 Şifreyi Değiştir",
    "Change Password": "Şifreyi Değiştir",
    "Enter a new teacher password": "Yeni öğretmen şifresini giriniz",
    "Current password": "Mevcut şifre",
    "New password": "Yeni şifre",
    "Confirm new password": "Yeni şifreyi onaylayınız",
    "Save": "Kaydet",
    "Current password is incorrect.": "Mevcut şifre yanlış.",
    "New password must be at least 4 characters.": "Yeni şifre en az 4 karakter olmalıdır.",
    "New passwords do not match.": "Yeni şifreler eşleşmiyor.",
    "✅ Password changed successfully!": "✅ Şifre başarıyla değiştirildi!",
    "⚠️": "⚠️",
    "Delete All Words?": "Tüm Kelimeler Silinsin mi?",
    "This will permanently remove": "Bu işlem listedeki",
    "words from the list. This cannot be undone.": "kelimeyi kalıcı olarak silecektir. Bu işlem geri alınamaz.",
    "Delete All": "Tümünü Sil",
    "⬆️ Upload Word List": "⬆️ Kelime Listesi Yükle",
    "Upload Word List": "Kelime Listesi Yükle",
    "Upload a .txt file to replace the current word list.": "Mevcut kelime listesini değiştirmek için bir .txt dosyası yükleyiniz.",
    "Format (one word per line):": "Biçim (her satırda bir kelime):",
    "(fields separated by a TAB, semicolon after each)": "(alanlar TAB ile ayrılmalı, her alan noktalı virgül ile bitmelidir)",
    "Choose .txt file…": ".txt dosyası seçiniz…",
    "Replace List": "Listeyi Değiştir",
    "Please choose a .txt file.": "Lütfen bir .txt dosyası seçiniz.",
    "No valid words found. Check the file format.": "Geçerli kelime bulunamadı. Lütfen dosya biçimini kontrol ediniz.",
    "Could not read that file. Please try again.": "Dosya okunamadı. Lütfen tekrar deneyiniz.",
    "Background music: Off": "Arka plan müziği: Kapalı",
    "Background music: On": "Arka plan müziği: Açık",
    "Designed and developed for educational purposes by Ehsan A.": "Eğitim amaçlı olarak Ehsan A. tarafından tasarlanıp geliştirilmiştir.",
    "✏️ Edit Word List": "✏️ Kelime Listesini Düzenle",
    "Edit Word List": "Kelime Listesini Düzenle",
    "Word": "Kelime",
    "Synonym": "Eş Anlamlı",
    "Antonym": "Zıt Anlamlı",
    "Definition (optional)": "Tanım (isteğe bağlı)",
    "+ Add Word": "+ Kelime Ekle",
    "Save Changes": "Değişiklikleri Kaydet",
    "⬆️ Upload Word List (.txt)": "⬆️ Kelime Listesi Yükle (.txt)",
    "🗑️ Delete All Words": "🗑️ Tüm Kelimeleri Sil",
    "✅ Word list saved!": "✅ Kelime listesi kaydedildi!",
    "Optional definition…": "İsteğe bağlı tanım…",
    "Speak word": "Kelimeyi seslendir",
    "Speak answer": "Cevabı seslendir",
    "← Back to Home": "← Ana Sayfaya Dön",
    "← Home": "← Ana Sayfa",
    "Close": "Kapat",
    "Got it!": "Anladım!",
    "Easy": "Kolay",
    "Hard": "Zor",
    "Again": "Tekrar",
    "Mastery": "Hakimiyet",
    "Progress": "İlerleme",
    "Score": "Puan",
    "Correct": "Doğru",
    "Incorrect": "Yanlış",
    "Accuracy": "Doğruluk",
    "Play Again": "Tekrar Oyna",
    "Study Again": "Tekrar Çalış",
    "Welcome!": "Hoş Geldiniz!",
    "Enter your name to personalise your experience,": "Deneyiminizi kişiselleştirmek için adınızı giriniz,",
    "or continue as a guest.": "veya misafir olarak devam ediniz.",
    "Enter your name…": "Adınızı giriniz…",
    "Let's Go →": "Başla →",
    "Continue as Guest": "Misafir Olarak Devam Et",
    "Welcome back,": "Tekrar hoş geldiniz,",
    "📖 Choose Session Size": "📖 Oturum Boyutunu Seçiniz",
    "Choose Session Size": "Oturum Boyutunu Seçiniz",
    "How many cards do you want to study?": "Kaç kart çalışmak istiyorsunuz?",
    "⚡ Quick Review": "⚡ Hızlı Tekrar",
    "Quick Review": "Hızlı Tekrar",
    "~5 minutes": "~5 dakika",
    "10 cards": "10 kart",
    "📘 Standard Session": "📘 Standart Oturum",
    "Standard Session": "Standart Oturum",
    "Standard": "Standart",
    "~15 minutes": "~15 dakika",
    "25 cards": "25 kart",
    "🏆 Full Deck": "🏆 Tüm Deste",
    "Full Deck": "Tüm Deste",
    "Full prep session": "Tam hazırlık oturumu",
    "All cards": "Tüm kartlar",
    "⏱️ Timed Mode": "⏱️ Süreli Mod",
    "Timed Mode": "Süreli Mod",
    "(10s per card)": "(kart başına 10 sn)",
    "❓ How to Play": "❓ Nasıl Oynanır",
    "How to Play": "Nasıl Oynanır",
    "Flip the card": "Kartı çeviriniz",
    "— tap it (or press Space) to reveal the definition, synonym, and antonym on the back.": "— tanımı, eş anlamlıyı ve zıt anlamlıyı görmek için karta dokununuz (veya Space tuşuna basınız).",
    "Judge yourself honestly": "Kendinizi dürüstçe değerlendiriniz",
    "— after flipping, pick": "— kartı çevirdikten sonra",
    ", or": "veya",
    "based on how well you recalled the word.": "seçeneklerinden uygun olanı seçiniz.",
    "— only shows cards you marked": "— yalnızca işaretlediğiniz kartları gösterir:",
    "or": "veya",
    ". Use it to drill your weak spots.": ". Zayıf noktalarınızı çalışmak için kullanınız.",
    "Mastery bar": "Hakimiyet çubuğu",
    "— fills up as you mark cards": "— kartları işaretledikçe dolar:",
    ". Try to get it to 100%!": ". %100'e ulaşmaya çalışınız!",
    "Pronunciation": "Telaffuz",
    "— tap the 🔊 button on any card to hear the word spoken aloud.": "— kelimeyi sesli dinlemek için herhangi bir karttaki 🔊 düğmesine dokununuz.",
    "Space / Enter": "Space / Enter",
    "— flip ·": "— çevir ·",
    "← →": "← →",
    "— navigate": "— gezin",
    "Again ·": "Tekrar ·",
    "Hard ·": "Zor ·",
    "Easy (after flipping)": "Kolay (çevirdikten sonra)",
    "📱 Scan to Open": "📱 Açmak İçin Tarayınız",
    "Scan to Open": "Açmak İçin Tarayınız",
    "Point your phone's camera at this code to open EHSAN_FlipCards instantly.": "EHSAN_FlipCards'ı hemen açmak için telefonunuzun kamerasını bu koda tutunuz.",
    "📱 Open on Phone (QR)": "📱 Telefonda Aç (QR)",
    "SAT Vocab · Memory Cards": "SAT Kelime · Hafıza Kartları",
    "Cards": "Kartlar",
    "Mastered": "Hakim Olunan",
    "Due": "Tekrar Edilecek",
    "📖 Study Cards": "📖 Kart Çalış",
    "Study Cards": "Kart Çalış",
    "Choose 10, 25, or the full deck": "10, 25 veya tüm desteyi seçiniz",
    "🎯 Focus Mode": "🎯 Odak Modu",
    "Review only Hard & Again cards": "Yalnızca Zor ve Tekrar kartlarını çalışınız",
    "🔄 Switch User": "🔄 Kullanıcı Değiştir",
    "This will clear your name and progress so another student can use this device. Continue?": "Bu işlem adınızı ve ilerlemenizi temizler; böylece başka bir öğrenci bu cihazı kullanabilir. Devam edilsin mi?",
    "Study All": "Tümünü Çalış",
    "Timed Mode — flip before time runs out": "Süreli Mod — süre dolmadan kartı çeviriniz",
    "Card": "Kart",
    "↕ Tap to flip": "↕ Çevirmek için dokununuz",
    "Judgment": "Değerlendirme",
    "↩ Again": "↩ Tekrar",
    "Don't know it": "Bilmiyorum",
    "😓 Hard": "😓 Zor",
    "Struggled a bit": "Biraz zorlandım",
    "✓ Easy": "✓ Kolay",
    "Nav": "Gezinme",
    "⇄ Shuffle": "⇄ Karıştır",
    "↺ Reset": "↺ Sıfırla",
    "🎯 Nothing to Focus On Yet": "🎯 Henüz Odaklanılacak Kart Yok",
    "Nothing to Focus On Yet": "Henüz Odaklanılacak Kart Yok",
    "Study some cards first and mark any you find": "Önce birkaç kart çalışınız ve zor bulduklarınızı işaretleyiniz",
    "— they'll queue up here for drilling.": "— tekrar çalışmak için burada sıraya alınırlar.",
    "📖 Start Studying": "📖 Çalışmaya Başla",
    "🎉 All Clear!": "🎉 Hepsi Tamamlandı!",
    "All Clear!": "Hepsi Tamamlandı!",
    "You've cleared every Hard & Again card.": "Tüm Zor ve Tekrar kartlarını tamamladınız.",
    "Keep studying to find your next challenge.": "Sonraki hedefinizi bulmak için çalışmaya devam ediniz.",
    "📖 Study More Cards": "📖 Daha Fazla Kart Çalış",
    "left": "kaldı",
    "0 cleared": "0 tamamlandı",
    "Retry this card": "Bu kartı yeniden dene",
    "Keep in queue": "Sırada tut",
    "Remove it!": "Kaldır!",
    "Deck Complete!": "Deste Tamamlandı!",
    "Here's how you did this round": "Bu turdaki sonucunuz",
    "🎯 Focus on Hard Cards": "🎯 Zor Kartlara Odaklan",
    "Focus on Hard Cards": "Zor Kartlara Odaklan",
    "Add, edit, or remove words. Changes are shared with EHSAN_WordDuel.": "Kelimeleri ekleyin, düzenleyin veya silin. Değişiklikler EHSAN_WordDuel ile paylaşılır.",
    "Leave Definition blank and it will show \"—\" on the card back.": "Tanım alanını boş bırakırsanız kartın arkasında \"—\" gösterilir.",
    "Upload rejected. Fix the listed line(s) and try again.": "Yükleme reddedildi. Listelenen satırları düzeltip tekrar deneyiniz.",
    "←": "←"
  }
};
const UI_SKIP_SELECTOR = '.lang-selector,.no-i18n,.q-word,.opt-word,.m-card,.card-word,.back-word,.back-def,.chip,.qr-url,.logo-title';
let currentUiLang = localStorage.getItem(UI_LANG_KEY) || 'en';
let i18nApplying = false;
let i18nDebounce = null;

function normalizeUiText(str){ return String(str).replace(/\s+/g,' ').trim(); }

function t(text, lang=currentUiLang){
  if(text === null || text === undefined) return text;
  const raw = String(text);
  const leading = (raw.match(/^\s*/) || [''])[0];
  const trailing = (raw.match(/\s*$/) || [''])[0];
  const core = normalizeUiText(raw);
  if(!core || lang === 'en') return raw;
  const direct = UI_TEXT[lang] && UI_TEXT[lang][core];
  if(direct) return leading + direct + trailing;
  const patterned = translatePattern(core, lang);
  return patterned ? leading + patterned + trailing : raw;
}

function translatePattern(core, lang){
  const packs = {
    es:[
      [/^All (\d+) cards$/,(_,n)=>`Las ${n} tarjetas`],
      [/^Quick Review · (\d+)( ⏱️)?$/,(_,n,t='')=>`Repaso rápido · ${n}${t}`],
      [/^Standard · (\d+)( ⏱️)?$/,(_,n,t='')=>`Estándar · ${n}${t}`],
      [/^Full Deck · (\d+)( ⏱️)?$/,(_,n,t='')=>`Mazo completo · ${n}${t}`],
      [/^(\d+) mastered$/,(_,n)=>`${n} dominadas`],
      [/^(\d+) cleared$/,(_,n)=>`${n} completadas`]
    ],
    ru:[
      [/^All (\d+) cards$/,(_,n)=>`Все ${n} карточек`],
      [/^Quick Review · (\d+)( ⏱️)?$/,(_,n,t='')=>`Быстрый повтор · ${n}${t}`],
      [/^Standard · (\d+)( ⏱️)?$/,(_,n,t='')=>`Стандарт · ${n}${t}`],
      [/^Full Deck · (\d+)( ⏱️)?$/,(_,n,t='')=>`Вся колода · ${n}${t}`],
      [/^(\d+) mastered$/,(_,n)=>`${n} освоено`],
      [/^(\d+) cleared$/,(_,n)=>`${n} пройдено`]
    ],
    fa:[
      [/^All (\d+) cards$/,(_,n)=>`همه ${n} کارت`],
      [/^Quick Review · (\d+)( ⏱️)?$/,(_,n,t='')=>`مرور سریع · ${n}${t}`],
      [/^Standard · (\d+)( ⏱️)?$/,(_,n,t='')=>`استاندارد · ${n}${t}`],
      [/^Full Deck · (\d+)( ⏱️)?$/,(_,n,t='')=>`کل دسته · ${n}${t}`],
      [/^(\d+) mastered$/,(_,n)=>`${n} مسلط‌شده`],
      [/^(\d+) cleared$/,(_,n)=>`${n} پاک‌شده`]
    ],
    tr:[
      [/^All (\d+) cards$/,(_,n)=>`Tüm ${n} kart`],
      [/^Quick Review · (\d+)( ⏱️)?$/,(_,n,t='')=>`Hızlı Tekrar · ${n}${t}`],
      [/^Standard · (\d+)( ⏱️)?$/,(_,n,t='')=>`Standart · ${n}${t}`],
      [/^Full Deck · (\d+)( ⏱️)?$/,(_,n,t='')=>`Tüm Deste · ${n}${t}`],
      [/^(\d+) mastered$/,(_,n)=>`${n} hakim olundu`],
      [/^(\d+) cleared$/,(_,n)=>`${n} tamamlandı`]
    ]
  };
  for(const [rx, fn] of (packs[lang] || [])){
    const m = core.match(rx);
    if(m) return fn(...m);
  }
  return null;
}

function shouldSkipI18nNode(node){
  const el = node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement;
  return !el || !!el.closest(UI_SKIP_SELECTOR);
}

function translateTextNode(node){
  if(node.nodeType !== Node.TEXT_NODE || shouldSkipI18nNode(node)) return;
  if(!normalizeUiText(node.nodeValue)) return;
  if(node.__i18nOriginal === undefined || (node.__i18nTranslated !== undefined && node.nodeValue !== node.__i18nTranslated && node.nodeValue !== node.__i18nOriginal)){
    node.__i18nOriginal = node.nodeValue;
  }
  const translated = t(node.__i18nOriginal);
  node.__i18nTranslated = translated;
  if(node.nodeValue !== translated) node.nodeValue = translated;
}

function translateElementAttrs(el){
  if(!el || el.nodeType !== Node.ELEMENT_NODE || el.closest('.lang-selector,.no-i18n')) return;
  ['placeholder','title','aria-label'].forEach(attr=>{
    if(!el.hasAttribute(attr)) return;
    el.__i18nAttrOriginal = el.__i18nAttrOriginal || {};
    el.__i18nAttrTranslated = el.__i18nAttrTranslated || {};
    const cur = el.getAttribute(attr);
    if(el.__i18nAttrOriginal[attr] === undefined || (el.__i18nAttrTranslated[attr] !== undefined && cur !== el.__i18nAttrTranslated[attr] && cur !== el.__i18nAttrOriginal[attr])){
      el.__i18nAttrOriginal[attr] = cur;
    }
    const translated = t(el.__i18nAttrOriginal[attr]);
    el.__i18nAttrTranslated[attr] = translated;
    if(cur !== translated) el.setAttribute(attr, translated);
  });
}

function applyI18n(root=document.body){
  if(!root || i18nApplying) return;
  i18nApplying = true;
  try{
    const textRoot = root.nodeType === Node.TEXT_NODE ? root.parentElement : root;
    if(root.nodeType === Node.TEXT_NODE){
      translateTextNode(root);
    } else if(textRoot){
      const walker = document.createTreeWalker(textRoot, NodeFilter.SHOW_TEXT);
      let node;
      while((node = walker.nextNode())) translateTextNode(node);
    }
    const elRoot = root.nodeType === Node.ELEMENT_NODE ? root : document.body;
    if(elRoot){
      translateElementAttrs(elRoot);
      elRoot.querySelectorAll && elRoot.querySelectorAll('[placeholder],[title],[aria-label]').forEach(translateElementAttrs);
    }
    document.querySelectorAll('.lang-btn').forEach(btn=>btn.classList.toggle('active', btn.dataset.lang === currentUiLang));
  } finally {
    i18nApplying = false;
  }
}

function scheduleI18n(){
  if(i18nApplying) return;
  clearTimeout(i18nDebounce);
  i18nDebounce = setTimeout(()=>applyI18n(document.body), 0);
}

function setLang(lang){
  if(!UI_LANG_META[lang]) lang = 'en';
  currentUiLang = lang;
  localStorage.setItem(UI_LANG_KEY, lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = UI_LANG_META[lang].dir;
  document.body && document.body.classList.toggle('rtl-ui', UI_LANG_META[lang].dir === 'rtl');
  applyI18n(document.body);
}

(function initMultilingualUI(){
  const nativeAlert = window.alert.bind(window);
  const nativeConfirm = window.confirm.bind(window);
  window.alert = (msg)=>nativeAlert(t(msg));
  window.confirm = (msg)=>nativeConfirm(t(msg));
  function boot(){
    setLang(currentUiLang);
    const observer = new MutationObserver(scheduleI18n);
    observer.observe(document.body, {childList:true, subtree:true, characterData:true, attributes:true, attributeFilter:['placeholder','title','aria-label']});
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();

/* ══════════════════════════════════════════════
   DEFAULT WORDS 
══════════════════════════════════════════════ */
const DEFAULT_WORDS = [
  {word:"Abundant",    syn:"Plentiful",     ant:"Scarce",       def:"Present in large quantities; more than enough."},
  {word:"Acrimony",    syn:"Bitterness",    ant:"Goodwill",     def:"Bitterness or ill feeling, especially in speech or manner."},
  {word:"Adept",       syn:"Proficient",    ant:"Inept",        def:"Very skilled or proficient at something."},
  {word:"Alleviate",   syn:"Mitigate",      ant:"Aggravate",    def:"To make suffering, deficiency, or a problem less severe."},
  {word:"Ambiguous",   syn:"Vague",         ant:"Clear",        def:"Open to more than one interpretation; not having one obvious meaning."},
  {word:"Amiable",     syn:"Affable",       ant:"Hostile",      def:"Having or displaying a friendly and pleasant manner."},
  {word:"Apathy",      syn:"Indifference",  ant:"Passion",      def:"Lack of interest, enthusiasm, or concern."},
  {word:"Arduous",     syn:"Strenuous",     ant:"Effortless",   def:"Involving or requiring strenuous effort; difficult and tiring."},
  {word:"Astute",      syn:"Shrewd",        ant:"Naive",        def:"Having an ability to accurately assess situations or people; clever."},
  {word:"Audacious",   syn:"Daring",        ant:"Timid",        def:"Showing a willingness to take bold risks; daring."},
  {word:"Benevolent",  syn:"Charitable",    ant:"Malevolent",   def:"Well-meaning and kindly; generous in spirit."},
  {word:"Brevity",     syn:"Conciseness",   ant:"Verbosity",    def:"Concise and exact use of words in writing or speech."},
  {word:"Candid",      syn:"Frank",         ant:"Evasive",      def:"Truthful and straightforward; frank."},
  {word:"Capricious",  syn:"Fickle",        ant:"Steadfast",    def:"Given to sudden, unpredictable changes in mood or behavior."},
  {word:"Cogent",      syn:"Compelling",    ant:"Weak",         def:"Clear, logical, and convincing; compelling."},
  {word:"Complacent",  syn:"Smug",          ant:"Discontented", def:"Showing uncritical satisfaction with oneself; smug and unaware of danger."},
  {word:"Conciliate",  syn:"Placate",       ant:"Antagonize",   def:"To stop someone from being angry; to make peace with."},
  {word:"Convoluted",  syn:"Intricate",     ant:"Simple",       def:"Extremely complex and difficult to follow."},
  {word:"Cynical",     syn:"Skeptical",     ant:"Idealistic",   def:"Believing that people are motivated purely by self-interest; distrustful."},
  {word:"Dauntless",   syn:"Fearless",      ant:"Cowardly",     def:"Showing fearlessness and determination."},
  {word:"Debilitate",  syn:"Weaken",        ant:"Strengthen",   def:"To make someone or something weak."},
  {word:"Deference",   syn:"Respect",       ant:"Contempt",     def:"Humble submission and respect shown to another."},
  {word:"Diffident",   syn:"Timid",         ant:"Assertive",    def:"Modest or shy because of a lack of self-confidence."},
  {word:"Diligent",    syn:"Industrious",   ant:"Lazy",         def:"Having or showing care and conscientiousness in one's work."},
  {word:"Disparate",   syn:"Distinct",      ant:"Similar",      def:"Essentially different in kind; not allowing comparison."},
  {word:"Ebullient",   syn:"Exuberant",     ant:"Gloomy",       def:"Cheerful and full of energy."},
  {word:"Egregious",   syn:"Flagrant",      ant:"Minor",        def:"Outstandingly bad; shocking."},
  {word:"Elusive",     syn:"Evasive",       ant:"Accessible",   def:"Difficult to find, catch, or achieve."},
  {word:"Eminent",     syn:"Prominent",     ant:"Obscure",      def:"Famous and respected within a particular sphere."},
  {word:"Enervate",    syn:"Exhaust",       ant:"Invigorate",   def:"To make someone feel drained of energy or vitality."},
  {word:"Ephemeral",   syn:"Fleeting",      ant:"Permanent",    def:"Lasting for a very short time."},
  {word:"Equivocal",   syn:"Ambiguous",     ant:"Definite",     def:"Open to more than one interpretation; uncertain."},
  {word:"Esoteric",    syn:"Obscure",       ant:"Common",       def:"Intended for or understood by only a small group with specialized knowledge."},
  {word:"Exacerbate",  syn:"Worsen",        ant:"Improve",      def:"To make a problem, bad situation, or negative feeling worse."},
  {word:"Fastidious",  syn:"Meticulous",    ant:"Sloppy",       def:"Very attentive to accuracy and detail; difficult to please."},
  {word:"Fervent",     syn:"Passionate",    ant:"Indifferent",  def:"Having or displaying a passionate intensity."},
  {word:"Fortuitous",  syn:"Fortunate",     ant:"Disastrous",   def:"Happening by chance, especially a lucky one."},
  {word:"Frugal",      syn:"Thrifty",       ant:"Extravagant",  def:"Sparing or economical with regard to money or food."},
  {word:"Garrulous",   syn:"Talkative",     ant:"Taciturn",     def:"Excessively talkative, especially on trivial matters."},
  {word:"Gregarious",  syn:"Sociable",      ant:"Reclusive",    def:"Fond of company; sociable."},
  {word:"Hackneyed",   syn:"Clichéd",       ant:"Original",     def:"Lacking significance through having been overused; unoriginal."},
  {word:"Haughty",     syn:"Arrogant",      ant:"Humble",       def:"Arrogantly superior and disdainful."},
  {word:"Impetuous",   syn:"Rash",          ant:"Cautious",     def:"Acting or done quickly and without thought; impulsive."},
  {word:"Incisive",    syn:"Sharp",         ant:"Dull",         def:"Intelligently analytical and clear-thinking."},
  {word:"Indolent",    syn:"Lazy",          ant:"Diligent",     def:"Wanting to avoid activity or exertion; lazy."},
  {word:"Ingenuous",   syn:"Naïve",         ant:"Cunning",      def:"Innocent and unsuspecting; naively simple."},
  {word:"Insolent",    syn:"Impudent",      ant:"Respectful",   def:"Showing a rude and arrogant lack of respect."},
  {word:"Intrepid",    syn:"Courageous",    ant:"Fearful",      def:"Fearless; adventurous."},
  {word:"Laconic",     syn:"Terse",         ant:"Verbose",      def:"Using very few words; brief to the point of seeming rude."},
  {word:"Loquacious",  syn:"Verbose",       ant:"Laconic",      def:"Tending to talk a great deal; talkative."},
  {word:"Magnanimous", syn:"Generous",      ant:"Petty",        def:"Very generous or forgiving, especially toward a rival."},
  {word:"Malleable",   syn:"Flexible",      ant:"Rigid",        def:"Easily influenced; pliable."},
  {word:"Meticulous",  syn:"Precise",       ant:"Careless",     def:"Showing great attention to detail; very careful and precise."},
  {word:"Mundane",     syn:"Ordinary",      ant:"Extraordinary",def:"Lacking interest or excitement; dull."},
  {word:"Nefarious",   syn:"Wicked",        ant:"Virtuous",     def:"Wicked or criminal."},
  {word:"Obdurate",    syn:"Stubborn",      ant:"Compliant",    def:"Stubbornly refusing to change one's opinion or course of action."},
  {word:"Obsequious",  syn:"Servile",       ant:"Assertive",    def:"Obedient or attentive to an excessive or servile degree."},
  {word:"Obstinate",   syn:"Headstrong",    ant:"Flexible",     def:"Stubbornly refusing to change one's opinion or action."},
  {word:"Opulent",     syn:"Lavish",        ant:"Austere",      def:"Ostentatiously rich and luxurious."},
  {word:"Ostentatious",syn:"Showy",         ant:"Modest",       def:"Characterized by vulgar or pretentious display; showy."},
  {word:"Parsimonious",syn:"Stingy",        ant:"Generous",     def:"Very unwilling to spend money; extremely frugal."},
  {word:"Pedantic",    syn:"Dogmatic",      ant:"Broad-minded", def:"Excessively concerned with minor details or rules."},
  {word:"Pensive",     syn:"Contemplative", ant:"Carefree",     def:"Engaged in, involving, or reflecting deep or serious thought."},
  {word:"Perfidious",  syn:"Treacherous",   ant:"Loyal",        def:"Deceitful and untrustworthy."},
  {word:"Phlegmatic",  syn:"Stoic",         ant:"Excitable",    def:"Having an unemotional and stolidly calm disposition."},
  {word:"Placid",      syn:"Serene",        ant:"Agitated",     def:"Not easily upset or excited; calm and peaceful."},
  {word:"Pragmatic",   syn:"Practical",     ant:"Idealistic",   def:"Dealing with things sensibly and realistically."},
  {word:"Prodigal",    syn:"Wasteful",      ant:"Frugal",       def:"Spending money or resources freely and recklessly."},
  {word:"Prolific",    syn:"Productive",    ant:"Barren",       def:"Producing much fruit, foliage, or many offspring; highly productive."},
  {word:"Prudent",     syn:"Judicious",     ant:"Reckless",     def:"Acting with or showing care and thought for the future."},
  {word:"Querulous",   syn:"Complaining",   ant:"Content",      def:"Complaining in a petulant or whining manner."},
  {word:"Recalcitrant",syn:"Unruly",        ant:"Compliant",    def:"Having an obstinately uncooperative attitude."},
  {word:"Reclusive",   syn:"Solitary",      ant:"Sociable",     def:"Avoiding the company of other people; solitary."},
  {word:"Reticent",    syn:"Reserved",      ant:"Forthcoming",  def:"Not revealing one's thoughts or feelings readily."},
  {word:"Sagacious",   syn:"Wise",          ant:"Foolish",      def:"Having or showing keen mental discernment and good judgment."},
  {word:"Sanguine",    syn:"Optimistic",    ant:"Pessimistic",  def:"Optimistic, especially in a difficult situation."},
  {word:"Sardonic",    syn:"Mocking",       ant:"Sincere",      def:"Grimly mocking or cynical."},
  {word:"Sedulous",    syn:"Diligent",      ant:"Negligent",    def:"Showing dedication and diligence."},
  {word:"Soporific",   syn:"Drowsy",        ant:"Invigorating", def:"Tending to induce drowsiness or sleep."},
  {word:"Spurious",    syn:"Fake",          ant:"Authentic",    def:"Not being what it purports to be; false or fake."},
  {word:"Stolid",      syn:"Impassive",     ant:"Emotional",    def:"Calm, dependable, and showing little emotion."},
  {word:"Stringent",   syn:"Strict",        ant:"Lenient",      def:"Strict, precise, and exacting."},
  {word:"Succinct",    syn:"Concise",       ant:"Lengthy",      def:"Briefly and clearly expressed."},
  {word:"Superficial", syn:"Shallow",       ant:"Profound",     def:"Existing or occurring at or on the surface; not thorough."},
  {word:"Superfluous", syn:"Excessive",     ant:"Essential",    def:"Unnecessary, especially through being more than enough."},
  {word:"Taciturn",    syn:"Silent",        ant:"Talkative",    def:"Reserved or uncommunicative in speech; saying little."},
  {word:"Tenacious",   syn:"Persistent",    ant:"Yielding",     def:"Tending to keep a firm hold of something; not relinquishing."},
  {word:"Transient",   syn:"Temporary",     ant:"Permanent",    def:"Lasting only for a short time; impermanent."},
  {word:"Trepidation", syn:"Dread",         ant:"Confidence",   def:"A feeling of fear or agitation about something that may happen."},
  {word:"Truculent",   syn:"Aggressive",    ant:"Peaceful",     def:"Eager or quick to argue or fight; aggressively defiant."},
  {word:"Turbulent",   syn:"Chaotic",       ant:"Calm",         def:"Characterized by conflict, disorder, or confusion; not stable."},
  {word:"Ubiquitous",  syn:"Pervasive",     ant:"Rare",         def:"Present, appearing, or found everywhere."},
  {word:"Vacillate",   syn:"Waver",         ant:"Decide",       def:"To waver between different opinions or actions; be indecisive."},
  {word:"Venerate",    syn:"Revere",        ant:"Despise",      def:"To regard with great respect; revere."},
  {word:"Verbose",     syn:"Wordy",         ant:"Concise",      def:"Using or expressed in more words than are needed."},
  {word:"Vociferous",  syn:"Clamorous",     ant:"Quiet",        def:"Expressing opinions or feelings loudly and forcefully."},
  {word:"Volatile",    syn:"Unstable",      ant:"Stable",       def:"Liable to change rapidly and unpredictably; unstable."},
  {word:"Wary",        syn:"Cautious",      ant:"Reckless",     def:"Feeling or showing caution about possible dangers or problems."},
  {word:"Zealous",     syn:"Fervent",       ant:"Apathetic",    def:"Having or showing zeal; fervently devoted to a cause."},
];

/* ══════════════════════════════════════════════
   STORAGE
══════════════════════════════════════════════ */
function loadWords(){
  try{
    const s = localStorage.getItem('wordlist');
    if(s){
      const parsed = JSON.parse(s);
      return parsed.map(w=>({def:'', ...w}));
    }
  }catch(e){}
  return DEFAULT_WORDS.map(w=>({...w}));
}
function saveWords(list){ localStorage.setItem('wordlist', JSON.stringify(list)); }

/* ══════════════════════════════════════════════
   PROGRESS
══════════════════════════════════════════════ */
let progress = {};
function loadProgress(){
  try{ return JSON.parse(sessionStorage.getItem('flipProgress')||'{}'); }catch(e){ return {}; }
}
function saveProgress(){ sessionStorage.setItem('flipProgress', JSON.stringify(progress)); }
function resetProgress(){
  progress = {};
  saveProgress();
  deck = [...words];
  cur = 0;
  isFlipped = false;
  renderCard();
  updateMastery();
  updateHomeStats();
}

/* ══════════════════════════════════════════════
   STATE
══════════════════════════════════════════════ */
let words = loadWords();
let deck  = [];
let cur   = 0;
let isFlipped = false;
let mode = 'study';

let focusDeck  = [];
let focusCur   = 0;
let focusFlipped = false;
let focusStartCount = 0;
let focusCleared = 0;

/* Timed mode */
const TIMED_SECONDS = 10;
let timedModeOn = false;
let timerInterval = null;
let timerRemaining = TIMED_SECONDS;
const TIMER_CIRC = 2 * Math.PI * 19;

/* ══════════════════════════════════════════════
   NAME / WELCOME MODAL
══════════════════════════════════════════════ */
function loadName(){ return sessionStorage.getItem('studentName')||''; }
function saveName(n){ sessionStorage.setItem('studentName', n); }

function checkWelcome(){
  const name = loadName();
  if(!name){
    document.getElementById('welcome-modal').className = 'modal-overlay show';
    setTimeout(()=>document.getElementById('welcome-input').focus(), 120);
  } else {
    applyGreeting(name);
  }
}
function submitName(){
  const val = document.getElementById('welcome-input').value.trim();
  if(!val){ document.getElementById('welcome-input').style.borderColor='var(--red)'; return; }
  saveName(val);
  document.getElementById('welcome-modal').className = 'modal-overlay';
  applyGreeting(val);
  playSfx('correct');
}
function continueAsGuest(){
  saveName('__guest__');
  document.getElementById('welcome-modal').className = 'modal-overlay';
  document.getElementById('home-greeting').style.display = 'none';
  document.getElementById('switch-user-btn').style.display = 'block';
}
function applyGreeting(name){
  if(name === '__guest__'){
    document.getElementById('home-greeting').style.display = 'none';
    document.getElementById('switch-user-btn').style.display = 'block';
    return;
  }
  const el = document.getElementById('home-greeting');
  document.getElementById('greeting-name').textContent = name;
  el.style.display = 'block';
  document.getElementById('switch-user-btn').style.display = 'block';
}
function switchUser(){
  if(!confirm('This will clear your name and progress so another student can use this device. Continue?')) return;
  sessionStorage.removeItem('studentName');
  sessionStorage.removeItem('flipProgress');
  progress = {};
  document.getElementById('home-greeting').style.display = 'none';
  document.getElementById('switch-user-btn').style.display = 'none';
  document.getElementById('welcome-input').value = '';
  document.getElementById('welcome-input').style.borderColor = '';
  updateHomeStats();
  document.getElementById('welcome-modal').className = 'modal-overlay show';
  setTimeout(()=>document.getElementById('welcome-input').focus(), 120);
}
document.getElementById('welcome-input').addEventListener('keydown', e=>{ if(e.key==='Enter') submitName(); });

/* ══════════════════════════════════════════════
   DECK PICKER MODAL
══════════════════════════════════════════════ */
function openDeckModal(){
  words = loadWords();
  document.getElementById('deck-all-label').textContent = `All ${words.length} cards`;
  timedModeOn = false;
  document.getElementById('timed-toggle').classList.remove('on');
  document.getElementById('deck-modal').className = 'modal-overlay show';
}
function closeDeckModal(){
  document.getElementById('deck-modal').className = 'modal-overlay';
}
function toggleTimedMode(){
  timedModeOn = !timedModeOn;
  document.getElementById('timed-toggle').classList.toggle('on', timedModeOn);
}
function launchStudy(count){
  closeDeckModal();
  words    = loadWords();
  progress = loadProgress();
  let pool = [...words];
  for(let i=pool.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]]; }
  deck = count > 0 ? pool.slice(0, Math.min(count, pool.length)) : pool;
  cur = 0;
  isFlipped = false;
  mode = 'study';
  const label = count === 10 ? 'Quick Review · 10' : count === 25 ? 'Standard · 25' : `Full Deck · ${deck.length}`;
  document.getElementById('study-title').textContent = label + (timedModeOn ? ' ⏱️' : '');
  document.getElementById('timer-wrap').classList.toggle('show', timedModeOn);
  showScreen('study');
  renderCard();
  updateMastery();
}
function exitStudy(){
  stopCardTimer();
  goHome();
}

/* ── CARD TIMER ── */
function startCardTimer(){
  stopCardTimer();
  if(!timedModeOn) return;
  timerRemaining = TIMED_SECONDS;
  updateTimerVisual();
  timerInterval = setInterval(()=>{
    timerRemaining -= 0.1;
    if(timerRemaining <= 0){
      timerRemaining = 0;
      updateTimerVisual();
      stopCardTimer();
      onTimerExpired();
      return;
    }
    updateTimerVisual();
  }, 100);
}
function stopCardTimer(){
  if(timerInterval){ clearInterval(timerInterval); timerInterval = null; }
}
function updateTimerVisual(){
  const ring = document.getElementById('timer-ring-fg');
  const num  = document.getElementById('timer-num');
  const pct  = timerRemaining / TIMED_SECONDS;
  ring.style.strokeDashoffset = TIMER_CIRC * (1 - pct);
  num.textContent = Math.ceil(timerRemaining);
  ring.classList.remove('warn','danger');
  if(timerRemaining <= 3) ring.classList.add('danger');
  else if(timerRemaining <= 6) ring.classList.add('warn');
}
function onTimerExpired(){
  if(isFlipped) return;
  const w = deck[cur];
  progress[w.word] = 'again';
  saveProgress();
  playSfx('wrong');
  if(cur < deck.length - 1){
    cur++;
    renderCard(1);
  } else {
    showComplete();
  }
}

/* ══════════════════════════════════════════════
   HOW TO PLAY MODAL
══════════════════════════════════════════════ */
function openHelpModal(){ document.getElementById('help-modal').className = 'modal-overlay show'; }
function closeHelpModal(){ document.getElementById('help-modal').className = 'modal-overlay'; }

/* ══════════════════════════════════════════════
   QR CODE
══════════════════════════════════════════════ */
const APP_URL = 'https://ehsan-flipcards.learninglabs.workers.dev/';
(function(){
  function tryQR(){
    const box = document.getElementById('qr-canvas');
    if(!box || typeof QRCode === 'undefined'){ setTimeout(tryQR, 100); return; }
    new QRCode(box, {
      text: APP_URL,
      width: 128, height: 128,
      colorDark:'#1a1a2e', colorLight:'#ffffff',
      correctLevel: QRCode.CorrectLevel.M
    });
  }
  tryQR();
})();

/* ══════════════════════════════════════════════
   SCREEN MANAGEMENT
══════════════════════════════════════════════ */
function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
function goHome(){
  window.speechSynthesis && window.speechSynthesis.cancel();
  stopCardTimer();
  updateHomeStats();
  showScreen('home');
}

/* ══════════════════════════════════════════════
   HOME STATS
══════════════════════════════════════════════ */
function updateHomeStats(){
  words = loadWords();
  progress = loadProgress();
  const mastered = Object.values(progress).filter(v=>v==='easy').length;
  const due = Object.values(progress).filter(v=>v==='again'||v==='hard').length;
  document.getElementById('hs-total').textContent = words.length;
  document.getElementById('hs-easy').textContent  = mastered;
  document.getElementById('hs-due').textContent   = due;
}

/* ══════════════════════════════════════════════
   STUDY MODE
══════════════════════════════════════════════ */
function startStudy(){ openDeckModal(); }

function shuffleDeck(){
  for(let i=deck.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [deck[i],deck[j]]=[deck[j],deck[i]];
  }
  cur=0; isFlipped=false;
  renderCard(); updateMastery();
  playSfx('click');
}

function renderCard(dir){
  if(!deck.length) return;
  const w = deck[cur];
  const fc = document.getElementById('flip-card');

  fc.style.transition = 'none';
  fc.classList.remove('is-flipped');
  void fc.offsetWidth;
  fc.style.transition = '';
  isFlipped = false;
  document.getElementById('judge-row').classList.remove('visible');

  const scene = document.getElementById('scene');
  scene.classList.remove('anim-in','anim-back');
  void scene.offsetWidth;
  if(dir === 1)  scene.classList.add('anim-in');
  if(dir === -1) scene.classList.add('anim-back');

  const dot = document.getElementById('status-dot');
  const st  = progress[w.word];
  dot.className = 'card-status-dot' + (st ? ' '+st : '');

  document.getElementById('card-num').textContent  = `${cur+1} / ${deck.length}`;
  document.getElementById('card-word').textContent  = w.word;

  document.getElementById('back-word').textContent = w.word;
  document.getElementById('back-def').textContent  = w.def || '—';
  const chips = document.getElementById('back-chips');
  chips.innerHTML = '';
  if(w.syn){ const c=document.createElement('span'); c.className='chip chip-syn'; c.textContent='≈ '+w.syn; chips.appendChild(c); }
  if(w.ant){ const c=document.createElement('span'); c.className='chip chip-ant'; c.textContent='↔ '+w.ant; chips.appendChild(c); }

  document.getElementById('nav-idx').textContent   = `${cur+1} / ${deck.length}`;
  document.getElementById('prev-btn').disabled      = cur === 0;
  document.getElementById('next-btn').disabled      = cur === deck.length-1;

  updateMastery();
  startCardTimer();
}

function flipCard(){
  const fc = document.getElementById('flip-card');
  isFlipped = !isFlipped;
  fc.classList.toggle('is-flipped', isFlipped);
  if(isFlipped){
    stopCardTimer();
    setTimeout(()=>document.getElementById('judge-row').classList.add('visible'), 300);
  } else {
    document.getElementById('judge-row').classList.remove('visible');
  }
}

function navigate(d){
  const next = cur + d;
  if(next < 0 || next >= deck.length) return;
  cur = next;
  renderCard(d);
  playSfx('click');
}

function judge(rating){
  stopCardTimer();
  const w = deck[cur];
  progress[w.word] = rating;
  saveProgress();

  if(rating==='easy')  playSfx('correct');
  else if(rating==='again') playSfx('wrong');
  else playSfx('click');

  if(cur < deck.length - 1){
    cur++;
    renderCard(1);
  } else {
    showComplete();
  }
}

function updateMastery(){
  const total   = deck.length || 1;
  const mastered = deck.filter(w=>progress[w.word]==='easy').length;
  const pct = (mastered/total)*100;
  document.getElementById('mastery-fill').style.width  = pct+'%';
  document.getElementById('mastery-count').textContent = `${mastered} mastered`;
}

/* ══════════════════════════════════════════════
   COMPLETE SCREEN
══════════════════════════════════════════════ */
function showComplete(){
  stopCardTimer();
  playSfx('complete');
  const easy  = Object.values(progress).filter(v=>v==='easy').length;
  const hard  = Object.values(progress).filter(v=>v==='hard').length;
  const again = Object.values(progress).filter(v=>v==='again').length;
  const total = words.length;
  const pct   = total ? Math.round((easy/total)*100) : 0;

  document.getElementById('res-easy').textContent  = easy;
  document.getElementById('res-hard').textContent  = hard;
  document.getElementById('res-again').textContent = again;
  document.getElementById('res-pct').textContent   = pct+'%';
  showScreen('complete');
}

/* ══════════════════════════════════════════════
   FOCUS MODE
══════════════════════════════════════════════ */
function startFocus(){
  words    = loadWords();
  progress = loadProgress();
  focusDeck = words.filter(w => progress[w.word] === 'again' || progress[w.word] === 'hard');

  showScreen('focus');
  focusCur = 0;
  focusFlipped = false;
  focusStartCount = focusDeck.length;
  focusCleared = 0;

  renderFocusState();
}

function renderFocusState(){
  const empty = focusDeck.length === 0;
  const notReady  = empty && focusStartCount === 0;
  const allCleared = empty && focusStartCount > 0;

  document.getElementById('focus-empty-notready').style.display  = notReady   ? 'block' : 'none';
  document.getElementById('focus-empty-cleared').style.display   = allCleared ? 'block' : 'none';
  document.getElementById('focus-scene').style.display           = empty      ? 'none'  : 'block';
  document.getElementById('focus-judge').classList.toggle('visible', false);

  if(empty) return;

  const w = focusDeck[focusCur];
  const fc = document.getElementById('focus-card');

  fc.style.transition = 'none';
  fc.classList.remove('is-flipped');
  void fc.offsetWidth;
  fc.style.transition = '';
  focusFlipped = false;

  const dot = document.getElementById('focus-dot');
  const st  = progress[w.word];
  dot.className = 'card-status-dot' + (st ? ' '+st : '');

  document.getElementById('focus-num').textContent       = `${focusCur+1} / ${focusDeck.length}`;
  document.getElementById('focus-word').textContent      = w.word;
  document.getElementById('focus-back-word').textContent = w.word;
  document.getElementById('focus-back-def').textContent  = w.def || '—';

  const chips = document.getElementById('focus-back-chips');
  chips.innerHTML = '';
  if(w.syn){ const c=document.createElement('span'); c.className='chip chip-syn'; c.textContent='≈ '+w.syn; chips.appendChild(c); }
  if(w.ant){ const c=document.createElement('span'); c.className='chip chip-ant'; c.textContent='↔ '+w.ant; chips.appendChild(c); }

  const cleared = focusStartCount - focusDeck.length;
  const pct = focusStartCount ? (cleared/focusStartCount)*100 : 0;
  document.getElementById('focus-fill').style.width  = pct+'%';
  document.getElementById('focus-count').textContent = `${cleared} cleared`;
  document.getElementById('focus-remaining').textContent = focusDeck.length;
}

function focusFlip(){
  if(focusDeck.length === 0) return;
  const fc = document.getElementById('focus-card');
  focusFlipped = !focusFlipped;
  fc.classList.toggle('is-flipped', focusFlipped);
  if(focusFlipped){
    setTimeout(()=>document.getElementById('focus-judge').classList.add('visible'), 300);
  } else {
    document.getElementById('focus-judge').classList.remove('visible');
  }
}

function focusJudge(rating){
  if(!focusDeck.length) return;
  const w = focusDeck[focusCur];
  progress[w.word] = rating;
  saveProgress();

  if(rating === 'easy'){
    playSfx('correct');
    focusDeck.splice(focusCur, 1);
    if(focusCur >= focusDeck.length) focusCur = Math.max(0, focusDeck.length-1);
  } else {
    playSfx(rating === 'again' ? 'wrong' : 'click');
    const card = focusDeck.splice(focusCur, 1)[0];
    focusDeck.push(card);
    if(focusCur >= focusDeck.length) focusCur = 0;
  }

  renderFocusState();
  updateHomeStats();
}

/* ══════════════════════════════════════════════
   EDITOR
══════════════════════════════════════════════ */
function escHtml(s){ return (s||'').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;'); }

function renderEditor(){
  const list = loadWords();
  document.getElementById('editor-body').innerHTML = list.map((w,i)=>`
    <tr data-idx="${i}">
      <td><input value="${escHtml(w.word)}" onchange="editorChange(${i},'word',this.value)"/></td>
      <td><input value="${escHtml(w.syn)}"  onchange="editorChange(${i},'syn', this.value)"/></td>
      <td><input value="${escHtml(w.ant)}"  onchange="editorChange(${i},'ant', this.value)"/></td>
      <td class="def-cell"><input value="${escHtml(w.def||'')}" placeholder="Optional definition…" onchange="editorChange(${i},'def',this.value)"/></td>
      <td><button class="del-row-btn" onclick="editorDel(${i})">🗑</button></td>
    </tr>`).join('');
  document.getElementById('editor-toast').className = 'save-toast';
}

function editorChange(i, field, val){
  const d = loadWords(); d[i][field] = val; saveWords(d);
}
function editorDel(i){
  const d = loadWords(); d.splice(i,1); saveWords(d); renderEditor();
}
function editorAddRow(){
  const d = loadWords();
  d.push({word:'',syn:'',ant:'',def:''});
  saveWords(d); renderEditor();
  setTimeout(()=>{
    const rows = document.querySelectorAll('#editor-body tr');
    const last = rows[rows.length-1];
    if(last) last.querySelector('input').focus();
  }, 50);
}
function editorSave(){
  const rows = document.querySelectorAll('#editor-body tr');
  const d = [];
  rows.forEach(row=>{
    const ins  = row.querySelectorAll('input');
    const word = ins[0].value.trim();
    const syn  = ins[1].value.trim();
    const ant  = ins[2].value.trim();
    const def  = ins[3].value.trim();
    if(word) d.push({word, syn, ant, def});
  });
  saveWords(d);
  words = d;
  document.getElementById('editor-toast').className = 'save-toast show';
  setTimeout(()=>document.getElementById('editor-toast').className='save-toast', 2200);
  playSfx('correct');
  updateHomeStats();
}

/* ── DELETE ALL WORDS ── */
function openDeleteAllModal(){
  const list = loadWords();
  document.getElementById('delete-count-label').textContent = list.length;
  document.getElementById('confirm-delete-modal').className = 'modal-overlay show';
}
function closeDeleteAllModal(){ document.getElementById('confirm-delete-modal').className = 'modal-overlay'; }
function confirmDeleteAll(){
  saveWords([]);
  words = [];
  closeDeleteAllModal();
  renderEditor();
  updateHomeStats();
  playSfx('wrong');
}

/* ── UPLOAD WORD LIST (.txt) ── */
let pendingUploadWords = null;

function openUploadModal(){
  document.getElementById('upload-file-name').textContent = 'Choose .txt file…';
  document.getElementById('upload-preview').style.display = 'none';
  document.getElementById('upload-err').className = 'modal-err';
  document.getElementById('upload-confirm-btn').style.opacity = '.4';
  document.getElementById('upload-confirm-btn').style.pointerEvents = 'none';
  document.getElementById('upload-file-input').value = '';
  pendingUploadWords = null;
  document.getElementById('confirm-upload-modal').className = 'modal-overlay show';
}
function closeUploadModal(){ document.getElementById('confirm-upload-modal').className = 'modal-overlay'; }

function parseWordTxt(text, expectFields){
  const normalized = String(text || '').replace(/^\uFEFF/, '').replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  const rawLines = normalized.split('\n');
  if(rawLines.length && rawLines[rawLines.length - 1].trim() === '') rawLines.pop();
  const results = [];
  const errors = [];
  rawLines.forEach((rawLine, idx)=>{
    const lineNo = idx + 1;
    const line = rawLine.trim();
    if(!line){ errors.push(`Line ${lineNo}: blank lines are not allowed`); return; }
    const parts = line.split('\t');
    if(parts.length !== expectFields){ errors.push(`Line ${lineNo}: expected exactly ${expectFields} TAB-separated fields`); return; }
    const values = [];
    for(let i = 0; i < parts.length; i++){
      const field = parts[i].trim();
      if(!field.endsWith(';')){ errors.push(`Line ${lineNo}: field ${i+1} must end with a semicolon`); return; }
      const value = field.slice(0, -1).trim();
      if(value.includes(';')){ errors.push(`Line ${lineNo}: field ${i+1} contains an extra semicolon`); return; }
      if(i < 3 && !value){ errors.push(`Line ${lineNo}: word, synonym, and antonym are required`); return; }
      values.push(value);
    }
    const entry = { word: values[0], syn: values[1], ant: values[2] };
    if(expectFields === 4) entry.def = values[3] || '';
    results.push(entry);
  });
  return { results: errors.length ? [] : results, errors, totalLines: rawLines.length };
}

function handleUploadFile(input){
  const file = input.files && input.files[0];
  const errEl = document.getElementById('upload-err');
  errEl.className = 'modal-err';
  if(!file) return;
  if(!file.name.toLowerCase().endsWith('.txt')){
    errEl.textContent = 'Please choose a .txt file.';
    errEl.className = 'modal-err show';
    return;
  }
  document.getElementById('upload-file-name').textContent = file.name;
  const reader = new FileReader();
  reader.onload = (e)=>{
    const { results, errors, totalLines } = parseWordTxt(e.target.result, 4);
    const preview = document.getElementById('upload-preview');
    const btn = document.getElementById('upload-confirm-btn');
    preview.style.display = 'none';
    btn.style.opacity = '.4'; btn.style.pointerEvents = 'none';
    pendingUploadWords = null;
    if(errors.length){
      errEl.textContent = 'Upload rejected. Fix the listed line(s) and try again.';
      errEl.className = 'modal-err show';
      preview.innerHTML = errors.slice(0,8).map(escHtml).join('<br>') + (errors.length > 8 ? '<br>…and ' + (errors.length-8) + ' more' : '');
      preview.style.display = 'block';
      return;
    }
    if(!results.length){
      errEl.textContent = 'No valid words found. Check the file format.';
      errEl.className = 'modal-err show';
      return;
    }
    errEl.className = 'modal-err';
    pendingUploadWords = results;
    let html = `<strong>${results.length} word${results.length===1?'':'s'} found</strong> (of ${totalLines} lines)<br><br>`;
    html += results.slice(0,5).map(w=>`${escHtml(w.word)} — ${escHtml(w.syn)} / ${escHtml(w.ant)}${w.def?' — '+escHtml(w.def):''}`).join('<br>');
    if(results.length > 5) html += `<br>…and ${results.length-5} more`;
    preview.innerHTML = html;
    preview.style.display = 'block';
    btn.style.opacity = '1'; btn.style.pointerEvents = 'auto';
  };
  reader.onerror = ()=>{
    errEl.textContent = 'Could not read that file. Please try again.';
    errEl.className = 'modal-err show';
  };
  reader.readAsText(file);
}

function confirmUpload(){
  if(!pendingUploadWords || !pendingUploadWords.length) return;
  saveWords(pendingUploadWords);
  words = pendingUploadWords;
  pendingUploadWords = null;
  closeUploadModal();
  renderEditor();
  updateHomeStats();
  playSfx('correct');
}

function exportWordList(){
  const clean = value => String(value || '')
    .replace(/[\t\r\n]+/g, ' ')
    .replace(/;/g, ',')
    .trim();
  const lines = loadWords().map(item =>
    `${clean(item.word)};\t${clean(item.syn)};\t${clean(item.ant)};\t${clean(item.def)};`
  );
  const blob = new Blob(['\uFEFF' + lines.join('\r\n')], { type:'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'EHSAN_FlipCards_WordList.txt';
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  playSfx('correct');
}

/* ══════════════════════════════════════════════
   AUDIO ENGINE
══════════════════════════════════════════════ */
let audioCtx = null;
let bgNodes  = [];
let bgMaster = null;
let soundOn  = false;
let arpTimerId = null;
let arpRunId   = 0;

function ensureCtx(){
  if(!audioCtx) audioCtx = new(window.AudioContext||window.webkitAudioContext)();
  if(audioCtx.state === 'suspended') audioCtx.resume();
}

function startBgMusic(){
  ensureCtx(); stopBgMusic();
  arpRunId++;
  const myRunId = arpRunId;
  const now = audioCtx.currentTime;

  bgMaster = audioCtx.createGain();
  bgMaster.gain.setValueAtTime(0, now);
  bgMaster.gain.linearRampToValueAtTime(0.72, now + 5);
  bgMaster.connect(audioCtx.destination);
  bgNodes.push(bgMaster);

  const lpf = audioCtx.createBiquadFilter();
  lpf.type = 'lowpass'; lpf.frequency.value = 2800; lpf.Q.value = 0.6;
  lpf.connect(bgMaster); bgNodes.push(lpf);

  const crackleGain = audioCtx.createGain();
  crackleGain.gain.value = 0.018;
  crackleGain.connect(lpf); bgNodes.push(crackleGain);

  function spawnCrackle(){
    if(!soundOn || myRunId !== arpRunId) return;
    const bufLen = audioCtx.sampleRate * 0.04;
    const buf = audioCtx.createBuffer(1, bufLen, audioCtx.sampleRate);
    const data = buf.getChannelData(0);
    for(let i=0;i<bufLen;i++) data[i] = Math.random()<0.03?(Math.random()*2-1)*0.9:0;
    const src = audioCtx.createBufferSource();
    src.buffer = buf; src.connect(crackleGain); src.start();
    bgNodes.push(src);
    arpTimerId = setTimeout(spawnCrackle, 200 + Math.random()*700);
  }

  const CHORDS = [
    [130.81,164.81,196.00,246.94],
    [110.00,130.81,164.81,196.00],
    [174.61,220.00,261.63,329.63],
    [98.00, 123.47,146.83,174.61],
  ];
  const CHORD_DUR = 4.0;
  let chordStep = 0;

  const playChord = ()=>{
    if(!soundOn || myRunId !== arpRunId) return;
    const t = audioCtx.currentTime;
    const freqs = CHORDS[chordStep % CHORDS.length]; chordStep++;
    freqs.forEach((freq,i)=>{
      const osc = audioCtx.createOscillator(); osc.type='triangle';
      osc.frequency.value = freq*(1+(i%2===0?0.0008:-0.0008));
      const vib=audioCtx.createOscillator(); vib.type='sine'; vib.frequency.value=4.5+i*0.3;
      const vibAmt=audioCtx.createGain(); vibAmt.gain.value=freq*0.002;
      vib.connect(vibAmt); vibAmt.connect(osc.frequency);
      const g=audioCtx.createGain();
      g.gain.setValueAtTime(0,t);
      g.gain.linearRampToValueAtTime(0.13-i*0.018,t+0.55);
      g.gain.linearRampToValueAtTime(0.10-i*0.014,t+CHORD_DUR-0.6);
      g.gain.linearRampToValueAtTime(0,t+CHORD_DUR+0.1);
      osc.connect(g); vib.start(t); g.connect(lpf); osc.start(t);
      osc.stop(t+CHORD_DUR+0.2); vib.stop(t+CHORD_DUR+0.2);
      bgNodes.push(osc,vib,vibAmt,g);
    });
    arpTimerId = setTimeout(playChord, CHORD_DUR*1000);
  };

  const playBass=()=>{
    if(!soundOn || myRunId!==arpRunId) return;
    const t=audioCtx.currentTime;
    const rootFreq=CHORDS[(chordStep-1)%CHORDS.length][0];
    const bassFreq=rootFreq*0.5;
    const osc=audioCtx.createOscillator(); osc.type='sine'; osc.frequency.value=bassFreq;
    const g=audioCtx.createGain();
    g.gain.setValueAtTime(0,t); g.gain.linearRampToValueAtTime(0.22,t+0.08);
    g.gain.linearRampToValueAtTime(0.10,t+1.2); g.gain.linearRampToValueAtTime(0,t+CHORD_DUR-0.3);
    osc.connect(g); g.connect(lpf); osc.start(t); osc.stop(t+CHORD_DUR);
    bgNodes.push(osc,g);
    setTimeout(playBass, CHORD_DUR*1000);
  };

  const MELODY=[523.25,587.33,659.25,783.99,880.00,783.99,659.25];
  let melStep=0, melChordCount=0;
  const scheduleMelody=()=>{
    if(!soundOn||myRunId!==arpRunId) return;
    melChordCount++;
    if(melChordCount%2===0){
      const t=audioCtx.currentTime+0.6;
      const freq=MELODY[melStep%MELODY.length]; melStep++;
      const o=audioCtx.createOscillator(); o.type='sine'; o.frequency.value=freq;
      const g=audioCtx.createGain();
      g.gain.setValueAtTime(0,t); g.gain.linearRampToValueAtTime(0.028,t+0.12);
      g.gain.linearRampToValueAtTime(0.018,t+1.2); g.gain.linearRampToValueAtTime(0,t+2.8);
      o.connect(g); g.connect(lpf); o.start(t); o.stop(t+3.0);
      bgNodes.push(o,g);
    }
    setTimeout(scheduleMelody, CHORD_DUR*1000);
  };

  setTimeout(()=>{ playChord(); playBass(); scheduleMelody(); }, 1000);
  setTimeout(spawnCrackle, 300);
}

function stopBgMusic(){
  arpRunId++;
  if(arpTimerId){ clearTimeout(arpTimerId); arpTimerId=null; }
  const now = audioCtx ? audioCtx.currentTime : 0;
  if(bgMaster){
    try{ bgMaster.gain.cancelScheduledValues(now); bgMaster.gain.setValueAtTime(bgMaster.gain.value,now); bgMaster.gain.linearRampToValueAtTime(0,now+0.25); }catch(e){}
  }
  const nodesToKill=bgNodes; bgNodes=[]; bgMaster=null;
  setTimeout(()=>{ nodesToKill.forEach(n=>{ try{if(n.stop)n.stop();}catch(e){} try{n.disconnect();}catch(e){} }); }, 300);
}

function toggleSound(){
  ensureCtx(); soundOn=!soundOn;
  const tog=document.getElementById('sound-toggle');
  const lbl=document.getElementById('sound-label');
  if(soundOn){ tog.classList.add('on'); lbl.textContent='Background music: On'; startBgMusic(); }
  else { tog.classList.remove('on'); lbl.textContent='Background music: Off'; stopBgMusic(); }
}

function playSfx(type){
  ensureCtx();
  const t = audioCtx.currentTime;
  if(type==='correct'){
    [[523.25,0],[659.25,0.1],[783.99,0.2]].forEach(([f,d])=>{
      const o=audioCtx.createOscillator(),g=audioCtx.createGain();
      o.type='sine';o.frequency.value=f;
      g.gain.setValueAtTime(0,t+d);g.gain.linearRampToValueAtTime(0.18,t+d+0.03);g.gain.exponentialRampToValueAtTime(0.001,t+d+0.35);
      o.connect(g);g.connect(audioCtx.destination);o.start(t+d);o.stop(t+d+0.4);
    });
  } else if(type==='wrong'){
    [[180,0],[160,0.1]].forEach(([f,d])=>{
      const o=audioCtx.createOscillator(),g=audioCtx.createGain();
      o.type='sawtooth';o.frequency.value=f;
      g.gain.setValueAtTime(0,t+d);g.gain.linearRampToValueAtTime(0.12,t+d+0.02);g.gain.exponentialRampToValueAtTime(0.001,t+d+0.25);
      o.connect(g);g.connect(audioCtx.destination);o.start(t+d);o.stop(t+d+0.3);
    });
  } else if(type==='click'){
    const o=audioCtx.createOscillator(),g=audioCtx.createGain();
    o.type='sine';o.frequency.value=880;
    g.gain.setValueAtTime(0.07,t);g.gain.exponentialRampToValueAtTime(0.001,t+0.08);
    o.connect(g);g.connect(audioCtx.destination);o.start(t);o.stop(t+0.1);
  } else if(type==='complete'){
    [523,659,784,659,1047].forEach((f,i)=>{
      const o=audioCtx.createOscillator(),g=audioCtx.createGain();
      o.type='sine';o.frequency.value=f;
      const d=i*0.12;
      g.gain.setValueAtTime(0,t+d);g.gain.linearRampToValueAtTime(0.2,t+d+0.04);g.gain.exponentialRampToValueAtTime(0.001,t+d+0.4);
      o.connect(g);g.connect(audioCtx.destination);o.start(t+d);o.stop(t+d+0.45);
    });
  }
}

/* ══════════════════════════════════════════════
   TTS
══════════════════════════════════════════════ */
function ttsSpeak(text, btnEl){
  if(!text||!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  document.querySelectorAll('.card-tts.speaking').forEach(b=>b.classList.remove('speaking'));
  const utt = new SpeechSynthesisUtterance(text.trim());
  utt.lang='en-US'; utt.rate=0.85; utt.pitch=1.0;
  if(btnEl){ btnEl.classList.add('speaking'); utt.onend=()=>btnEl.classList.remove('speaking'); utt.onerror=()=>btnEl.classList.remove('speaking'); }
  window.speechSynthesis.speak(utt);
}

/* ══════════════════════════════════════════════
   KEYBOARD SHORTCUTS
══════════════════════════════════════════════ */
document.addEventListener('keydown', e=>{
  const active = document.querySelector('.screen.active');
  if(!active) return;
  const id = active.id;

  if(id === 'study'){
    if(e.key === ' ' || e.key === 'Enter'){ e.preventDefault(); flipCard(); }
    if(e.key === 'ArrowRight') navigate(1);
    if(e.key === 'ArrowLeft')  navigate(-1);
    if(isFlipped){
      if(e.key === '1') judge('again');
      if(e.key === '2') judge('hard');
      if(e.key === '3') judge('easy');
    }
  }
  if(id === 'focus'){
    if(e.key === ' ' || e.key === 'Enter'){ e.preventDefault(); focusFlip(); }
    if(focusFlipped){
      if(e.key === '1') focusJudge('again');
      if(e.key === '2') focusJudge('hard');
      if(e.key === '3') focusJudge('easy');
    }
  }
});

/* ══════════════════════════════════════════════
   INIT
══════════════════════════════════════════════ */
progress = loadProgress();
updateHomeStats();
checkWelcome();
