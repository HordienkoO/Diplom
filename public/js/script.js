
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
// skricon
let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.querySelector('.menu__btn').classList.remove('hidden');
  } else {
    document.querySelector('.menu__btn').classList.add('hidden');
  }
  prevScrollPos = currentScrollPos;
}

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu__toggle");
    const menuBox = document.querySelector(".menu__box");
    const menuBtn = document.querySelector(".menu__btn");

    document.addEventListener("click", function(event) {
        if (!menuBox.contains(event.target) && event.target !== menuToggle && menuToggle.checked) {
            menuToggle.checked = false;
        }
    });

    menuBtn.addEventListener("click", function(event) {
        event.stopPropagation();
    });
});

// на плеєр
document.addEventListener('DOMContentLoaded', () => {
    const sliderItems = document.querySelectorAll('.slider .slide');

    sliderItems.forEach(item => {
        item.addEventListener('click', function() {
            const animeTitle = this.dataset.title;
            const episodes = parseInt(this.dataset.episodes);
            const description = getAnimeDescription(animeTitle);
            const categories = this.dataset.categories;
            window.location.href = `player.html?title=${animeTitle}&episodes=${episodes}&description=${description}&categories=${categories}`;
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const title = urlParams.get('title');
    const episodes = parseInt(urlParams.get('episodes'));

});

function getAnimeDescription(title) {
    switch (title) {
        case "ТораДора":
            return "Зовнішність буває оманлива, про це не з чуток знає Рюдзі - старшокласник, якого через його грізний вигляд інші учні обходять стороною. Він швидко стає шкільною знаменитістю, життя начебто налагоджується, проте його мрію про романтичну юність руйнує бунтарка Тайга - інша шкільна знаменитість і єдина людина, здатна зухвали Рюдзі. Їм доведеться через багато пройти, щоб розібратися у своїх почуттях один до одного.";
        case "Вбивця Акаме!":
            return "Нічний Рейд - група відступників, які виконують диверсії проти могутньої Імперії, чиї землі простягаються цілий континент. Мало хто знає, що холоднокровні вбивці, за чиї голови оголошена нагорода, насправді нехай і не зовсім шляхетні, але все ж хоробрі визволителі і борці з прогнилою системою, створеною корумпованим урядом, якому цілком начхати на бідне населення Імперії, государю. Простий хлопчина Тацумі, виходець зі скромного села, опиняється в епіцентрі державного перевороту, стаючи товаришем кожному в Нічному Рейді.";
        case "FATE":
            return "Опис аніме 'FATE'.";
        case "Магічна битва":
            return "Опис аніме 'Магічна битва'.";
        case "Інша":
            return "Опис аніме 'Інша'.";
        case "Хелсінг":
            return "Опис аніме 'Хелсінг'.";
        default:
            return "Опис аніме...";
    }
}
