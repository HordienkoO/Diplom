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

// для поеєра
document.addEventListener('DOMContentLoaded', () => {
    const animeItems = document.querySelectorAll('.anime-item');

    animeItems.forEach(item => {
        item.addEventListener('click', function() {
            const animeTitle = this.dataset.title;
            const episodes = parseInt(this.dataset.episodes);
            window.location.href = `player.html?title=${animeTitle}&episodes=${episodes}`;
        });
    });
});