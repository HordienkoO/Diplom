document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById("loginButton");
    const logoutButton = document.getElementById("logoutButton");

    // Проверяем, залогинен ли пользователь. Если да, отображаем его имя и кнопку выхода
    if (/* Логика для проверки залогиненности пользователя */) {
        const username = /* Код для получения имени пользователя */;
        loginButton.innerHTML = username;
        // Создаем кнопку для выхода
        const logoutButton = document.createElement("button");
        logoutButton.textContent = "Выход";
        logoutButton.id = "logoutButton";
        logoutButton.onclick = function() {
            // При клике на кнопку выхода отправляем запрос на выход пользователя
            fetch('/logout', { method: 'GET' })
                .then(response => {
                    if (response.ok) {
                        // Если выход прошел успешно, перезагружаем страницу
                        window.location.reload();
                    } else {
                        console.error('Ошибка при выходе');
                    }
                })
                .catch(error => console.error('Ошибка при выходе:', error));
        };
        loginButton.parentNode.insertBefore(logoutButton, loginButton.nextSibling);
    }
});