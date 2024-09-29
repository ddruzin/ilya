// Получаем кнопку и тело документа
const themeToggleButton = document.querySelector('.theme-toggle');
const body = document.body;

// Проверяем сохраненную тему в локальном хранилище и устанавливаем соответствующий класс
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme'); // Устанавливаем тёмную тему
    themeToggleButton.textContent = 'Светлая тема'; // Меняем текст кнопки
} else {
    body.classList.add('light-theme'); // Устанавливаем светлую тему по умолчанию
}

// Функция для переключения тем
themeToggleButton.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme'); // Убираем тёмную тему
        body.classList.add('light-theme'); // Добавляем светлую тему
        themeToggleButton.textContent = 'Тёмная тема'; // Меняем текст кнопки
        localStorage.setItem('theme', 'light'); // Сохраняем выбранную тему
    } else {
        body.classList.remove('light-theme'); // Убираем светлую тему
        body.classList.add('dark-theme'); // Добавляем тёмную тему
        themeToggleButton.textContent = 'Светлая тема'; // Меняем текст кнопки
        localStorage.setItem('theme', 'dark'); // Сохраняем выбранную тему
    }
});
