document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector('.anime-list').classList.add('loaded');
    }, 500);
    setTimeout(function() {
        document.querySelector('.all-anime-container1').classList.add('loaded');
    }, 1000);
});

document.addEventListener("DOMContentLoaded", function() {
    var categoryMenuContainer = document.querySelector(".category-menu-container");
    var categoryMenuToggle = document.querySelector(".category-menu-toggle");
    var categoryMenu = document.querySelector(".category-menu");

    categoryMenuToggle.addEventListener("click", function() {
        if (categoryMenu.style.display === "block") {
            categoryMenu.style.display = "none";
        } else {
            categoryMenu.style.display = "block";
        }
    });
    document.addEventListener("click", function(event) {
        if (!categoryMenuContainer.contains(event.target) && event.target !== categoryMenuToggle) {
            categoryMenu.style.display = "none";
        }
    });
});

// для плеєра
document.addEventListener('DOMContentLoaded', () => {
    const animeItems = document.querySelectorAll('.anime-item');

    animeItems.forEach(item => {
        item.addEventListener('click', function() {
            const animeTitle = this.dataset.title;
            const episodes = parseInt(this.dataset.episodes);
            const description = getAnimeDescription(animeTitle);
            const categories = this.dataset.categories.split(',').map(cat => cat.trim());
            const filteredCategories = categories.filter(cat => cat !== 'Усі');
            window.location.href = `player.html?title=${animeTitle}&episodes=${episodes}&description=${description}&categories=${filteredCategories.join(',')}`;
        });
    });
});

function getAnimeDescription(title) {
    switch (title) {
        case "ТораДора":
            return "Зовнішність буває оманлива, про це не з чуток знає Рюдзі - старшокласник, якого через його грізний вигляд інші учні обходять стороною. Він швидко стає шкільною знаменитістю, життя начебто налагоджується, проте його мрію про романтичну юність руйнує бунтарка Тайга - інша шкільна знаменитість і єдина людина, здатна зухвали Рюдзі. Їм доведеться через багато пройти, щоб розібратися у своїх почуттях один до одного.";
        case "Вбивця Акаме!":
            return "Нічний Рейд - група відступників, які виконують диверсії проти могутньої Імперії, чиї землі простягаються цілий континент. Мало хто знає, що холоднокровні вбивці, за чиї голови оголошена нагорода, насправді нехай і не зовсім шляхетні, але все ж хоробрі визволителі і борці з прогнилою системою, створеною корумпованим урядом, якому цілком начхати на бідне населення Імперії, государю. Простий хлопчина Тацумі, виходець зі скромного села, опиняється в епіцентрі державного перевороту, стаючи товаришем кожному в Нічному Рейді.";
        case "Синтетичні спогади":
            return "Вісімнадцятирічний Цукаса нещодавно закінчив навчання, а тому він розпочав пошуки роботи. Випадково хлопцеві потрапила на очі посада у термінальному відділі, про який хлопець нічого не знав. Незабаром у Цукаса з'явилася напарниця на ім'я Айла, яка є гіфтією. На першому ж завданні наївний юнак пізнав усю складність роботи. Підлітку довелося забирати у старої жінки компаньйона, якому необхідно видалити синтетичну душу та відправити на переробку.";
        case "Шарлотта":
            return "Ю Отосака не завжди був егоїстом та ошуканцем. Зміни в характері почалися в той момент, коли він несподівано відкрив у собі паранормальну здатність, що надає можливість рівно на п'ять секунд вселятися в чуже тіло. Обзавівшись такою корисною силою, юнак дивуватися не став, а трохи розкинувши мізками, зрештою знайшов їй потрібне застосування. Що б ви думали? У навчанні. Примудряючись непомітно «викрадати» тіла старанних п'ятірників, Ю раз у раз списував на іспитах. У результаті на відмінно закінчив середню школу і вступив до престижної старшої.";
        case "Сатана на підробітку!":
            return "Вигаданий світ. Там уже тисячі років ведуть війну сили Добра і Зла. Головним героєм аніме є сам Сатана, який бореться проти героя і отримує серйозні поранення. Розуміючи, що може загинути від останнього удару лицаря, Диявол використовує всю свою магію, що залишилася, і відкриває портал у світ людей. Він стрибає в нього і опиняється в сучасній Японії, де згодом намагається знову потрапити у свій світ, але нічого не виходить. Магії більше немає, а єдиний слуга, каже, що потрібно шукати будинок для проживання і поступово відновлювати Сатані свої здібності.";
        case "Хелсінг":
            return "Опис аніме 'Хелсінг'.";
        default:
            return "Опис аніме...";
    }
}

//категорії
document.addEventListener("DOMContentLoaded", function() {
const categoryLinks = document.querySelectorAll('.category-link');
const animeItems = document.querySelectorAll('.anime-item');

categoryLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const category = this.textContent.trim();

        animeItems.forEach(item => {
            const categories = item.dataset.categories.split(',').map(cat => cat.trim());
            const filteredCategories = categories.filter(cat => cat !== 'Усі');
            if (categories.includes(category) && filteredCategories.length > 0) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
});

//пошук
document.addEventListener('DOMContentLoaded', function() {
const form = document.querySelector('form');
form.addEventListener('submitt', function(event) {
    event.preventDefault();
    const searchTerm = document.querySelector('input[name="s"]').value.trim();
    searchByTitle(searchTerm);
});
});

function searchByTitle(title) {
const animeItems = document.querySelectorAll('.anime-item');

animeItems.forEach(item => {
    const animeTitle = item.dataset.title;
    if (animeTitle === title) {
        const episodes = parseInt(item.dataset.episodes);
        const description = getAnimeDescription(animeTitle);
        const categories = item.dataset.categories;
        window.location.href = `player.html?title=${animeTitle}&episodes=${episodes}&description=${description}&categories=${categories}`;
    }
});
}