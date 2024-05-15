
window.onload = function() {
        document.body.classList.add('loaded');
        const loginButton = document.getElementById('loginButton');
        const loginModal = document.getElementById('loginModal');
        const usernameSpan = document.getElementById('usernameSpan');
        let loggedIn = false;

        loginButton.addEventListener('click', function() {
            loginModal.style.display = 'block';
        });

        fetch('/getUsername')
            .then(response => response.json())
            .then(data => {
                const { username } = data;
                if (username) {
                    usernameSpan.textContent = username;
                    loggedIn = true;
                    loginModal.style.display = 'none';
                }
            });

            // const blocked = document.querySelectorAll('loginButton');
            // blocked.forEach(loginButton => {
            //     loginButton.addEventListener('loginButton', function(event) {
            //         if (loggedIn) {
            //             event.preventDefault();
            //             alert('Ви уже увійшли в систему!')
            //         }
            //     });
            // });


        // Блокуємо вікно після входу
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', function(event) {
                if (loggedIn) {
                    event.preventDefault();
                    alert('Ви вже увійшли в систему!');
                }
            });
        });
    };


    document.addEventListener('DOMContentLoaded', function() {
        const logoutButton = document.getElementById('logoutButton');
        
        const isLoggedIn = true;
    
        if (isLoggedIn) {
            logoutButton.style.display = 'block'; 
        } else {
            logoutButton.style.display = 'none'; 
        }
    });
     



    
// Слайдери
document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.slider, .slider1');
    sliders.forEach(function(slider) {
        setInterval(function() {
            nextSlide(slider);
        }, 5000);

        const leftArrow = slider.querySelector('.left-arrow');
        const rightArrow = slider.querySelector('.right-arrow');
        
        leftArrow.addEventListener('click', function() {
            prevSlide(slider);
        });

        rightArrow.addEventListener('click', function() {
            nextSlide(slider);
        });
    });
});

function nextSlide(slider) {
    const slides = slider.querySelectorAll('.slide');
    const firstSlide = slides[0];

    slider.removeChild(firstSlide);
    slider.appendChild(firstSlide);
}

function prevSlide(slider) {
    const slides = slider.querySelectorAll('.slide');
    const lastSlide = slides[slides.length - 1];

    slider.removeChild(lastSlide);
    slider.insertBefore(lastSlide, slides[0]);
}

// Вподобайки
function toggleHeart() {
    var heartIcon = document.querySelector('.heart-icon');
    heartIcon.classList.toggle('clicked');
    alert('Тут будуть твої вподобайки!');
}

// форми реєєстрації та входу
var loginButton = document.getElementById("loginButton");
var loginModal = document.getElementById("loginModal");
var closeButton = document.getElementsByClassName("close")[0];

loginButton.onclick = function() {
  loginModal.style.display = "block";
}

closeButton.onclick = function() {
  loginModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == loginModal) {
    loginModal.style.display = "none";
  }
}

// меню
// JavaScript код для скрытия иконки меню при прокрутке вниз
let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // Прокрутка вверх
    document.querySelector('.menu__btn').classList.remove('hidden');
  } else {
    // Прокрутка вниз
    document.querySelector('.menu__btn').classList.add('hidden');
  }

  prevScrollPos = currentScrollPos;
}

// 
document.querySelectorAll('.slide').forEach(function (slide) {
    slide.addEventListener('click', function () {
        // Отримуємо дані аніме з елемента слайду
        var title = this.querySelector('h2').innerText;
        var description = this.querySelector('p').innerText;
        var videoLink = this.dataset.video; // Додаємо отримання посилання на відео
        var episodes = this.dataset.episodes; // Додаємо отримання кількості серій

        // Передаємо дані на сторінку example.html
        window.location.href = "example.html?title=" + encodeURIComponent(title) + "&description=" + encodeURIComponent(description) + "&video=" + encodeURIComponent(videoLink) + "&episodes=" + encodeURIComponent(episodes);
    });
});