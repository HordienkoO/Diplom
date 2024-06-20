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
        case "Вайолет Евергарден":
            return "Вайолет Евергарден, молода дівчина, чиє життя – не що інше, як війна, слухняно служить під командуванням майора Гілберта Бугенвіллєї з армії Лейденшафтліха. Після серйозних каліцтв, що залишили її без рук і розділили з Гілбертом, вона залишила поле бою і була взята під опіку колишнім командувачем армії Клаудією Ходжинсом, який після закінчення війни заснував поштову службу «C-H» у великому портовому місті Ляйден. Ця компанія здійснює регулярні поштові пересилки та надає послуги «автозапам'ятовуваних ляльок» — талановитих дівчат, до обов'язків яких входить написання листів та коригування тексту для більшості неписьменного населення міста. Зрештою, зворушена роботою ляльок, що запам'ятовують авто, Вайолет вирішує приєднатися до команди, щоб дізнатися про долю майора Гілберта і зміст останніх слів, сказаних ним: «Я люблю тебе».";
        case "Пять сантиметрів за секунду":
            return "Що відбувається, коли дві людини люблять одна одну, проте долею їм не готово бути разом? Такакі Тоно з дитинства був близький з Акарі Сінохарою, але в середній школі через переїзд сім'ї Акарі в інше місто діти змушені припинити спільне проведення часу та звести спілкування до телефонних розмов та листування, давши обіцянку підтримувати зв'язок і в майбутньому. Однак час і життя нарізно проклали між їхніми серцями відстань набагато більша за територіальну...";
        case "Хочу зїсти твою підшлункову":
            return "Одного чудового дня учень старшої школи знаходить чийсь особистий щоденник, підписаний як «Щоденник хвороби». Незабаром з'ясовується, що цей щоденник належить Сакурі Ямауті, однокласниці головного героя. Прочитавши його, Харукі Сіга дізнається, що дівчина страждає на смертельну хворобу — її підшлункова залоза перестала працювати. Щоб підтримати її в цій нелегкій ситуації, юнак вирішує потоваришувати із Сакурою, незважаючи на їх зовсім різні характери.";
        case "Форма голосу":
            return "Подібно до світу дорослих, світ дітей не терпить відмінностей, що виділяють когось на тлі інших, яких прийнято вважати нормальними. Цей світ жорстокий, оскільки його мешканці, на відміну від мешканців світу дорослих, ще не встигли навчитися приховувати мерзенні думки за напускною посмішкою. Багато речей їм незрозумілі, більше того — невідомі. Діти прямолінійні. І тому дуже жорстокі. Однак усі діти колись виростають. І озираючись назад, у часи шкільної рутини, деяким із них стає соромно за свою юність. Складно уявити, скільки років має пройти, поки до приблизного задира і розгильдяя дійде, яким дурнем він був, коли заради веселощів знущався з інваліда. Хтось про це навіть не згадає. А хтось на кшталт Сеї зненавидить себе міцною ненавистю. У молодшій школі він примудрився перетворити життя однокласниці на ім'я Секо на пекло. Тільки тому, що та була глуха, не як усі. І тепер, через кілька років, хоч і запізнилося, але хлопчик зрозумів: щоб сказати щось важливе тому, хто не може тебе почути, зовсім не обовязково використовувати голос.";
        case "Тунель у літо, вихід прощань":
            return "Якось Каору Тоно дізнався міську легенду, згідно з якою, якщо знайти тунель Урасіма і пройти по ньому до кінця, то здійсниться найзаповітніше бажання. Проте плата за це велика. Мрія стане реальністю лише в обмін на кілька років життя. І ось якось уночі Каору виявляє себе перед входом у цей найпідозріліший тунель, про який ходить так багато чуток. Дивлячись на нього, Каору усвідомлює, що захоплений спогадами про свою молодшу сестру Карен, яка п'ять років тому загинула внаслідок нещасного випадку.";
        case "Літня примара":
            return "Ви коли-небудь чули про літню примару? Згідно з міською легендою, привид молодої дівчини з'являється, коли в небо запускають салют. На пошуки цієї примари вирушили троє молодих людей, яких доля звела в інтернеті. Томоя Сугісакі ніяк не зважиться зробити крок назустріч мрії. Аой Харукава не може знайти своє місце в житті, а перед Ре Кобаясі, який стояв на порозі світлого майбутнього, раптово зачинилися двері. Кожен із них прагне побачити літню примару з власних причин. Про що замисляться молоді люди цієї літньої ночі, коли життя і смерть перетнуться, і чи зможе привид позбавити їх від тяжкості, що турбує їхні серця?";
        case "Дитя погоди":
            return "Літо першого року навчання у старшій школі. Ходака Морісіма втікає з рідної оселі на ізольованому острові, щоб далі жити в Токіо. Однак життя у великому місті перетворюється на справжнє виживання: хлопець має труднощі з пошуком роботи та зароблянням грошей. Деякий час Ходака живе сам, доки знаходить роботу репортера в сумнівному журналі по окультизму, а й за вікном, ніби на зло, цілими днями ллють дощі.";    
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

const searchInput = document.getElementById('searchInput');
    const autocompleteList = document.getElementById('autocomplete-list');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        autocompleteList.innerHTML = '';
        
        if (searchTerm.length > 0) {
            const animeItems = document.querySelectorAll('.anime-item');
            animeItems.forEach(item => {
                const animeTitle = item.dataset.title.toLowerCase();
                if (animeTitle.startsWith(searchTerm)) {
                    const listItem = document.createElement('div');
                    listItem.className = 'autocomplete-item';
                    listItem.innerText = item.dataset.title;
                    listItem.addEventListener('click', function() {
                        searchInput.value = item.dataset.title;
                        autocompleteList.innerHTML = '';
                        searchByTitle(item.dataset.title);
                    });
                    autocompleteList.appendChild(listItem);
                }
            });
        }
    });
    
    const searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', function(event) {
        event.preventDefault();
        const searchTerm = searchInput.value.trim();
        searchByTitle(searchTerm);
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