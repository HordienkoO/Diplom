window.onload = function() {
    document.body.classList.add('loaded');
}

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const title = urlParams.get('title');
    const episodes = parseInt(urlParams.get('episodes'));
    const description = urlParams.get('description');
    const categories = urlParams.get('categories');

    document.getElementById('description').innerHTML = `<p>${description}</p>`;
    document.getElementById('categories').innerHTML = `<p>Категорії: ${categories}</p>`;

    const dropdownContent = document.getElementById('dropdownContent');

    for (let i = 1; i <= episodes; i++) {
        const button = document.createElement('button');
        button.textContent = `Серія ${i}`;
        button.setAttribute('data-episode', i);
        button.onclick = () => changeEpisode(title, i, button.textContent);
        dropdownContent.appendChild(button);
    }
 
    const firstEpisode = dropdownContent.querySelector('[data-episode="1"]');
    if (firstEpisode) {
        firstEpisode.click();
    }
});

function toggleDropdown() {
    const dropdownContent = document.getElementById('dropdownContent');
    dropdownContent.style.display === 'none' ? dropdownContent.style.display = 'block' : dropdownContent.style.display = 'none';
}

function changeEpisode(title, episodeNumber, buttonText) {
    const videoPlayer = document.getElementById('videoPlayer');
    const selectedEpisodeBtn = document.getElementById('selectedEpisodeBtn');

    selectedEpisodeBtn.textContent = buttonText;

    if (title === 'ТораДора' && episodeNumber >= 1 && episodeNumber <= 25) {
        switch (episodeNumber) {
            case 1:
                videoPlayer.src = "https://drive.google.com/file/d/1SY8swO_oA_OtcnSPhiHjNP96brAGuqs4/preview";
                break;
            case 2:
                videoPlayer.src = "https://drive.google.com/file/d/1f9tNdppkhNGrH3D90ZjXJWV1idZG5qYT/preview";
                break;
            case 3:
                videoPlayer.src = "https://drive.google.com/file/d/1Vd_ZdLh6TZ5dIr4KGSUn3o_f4fL281ne/preview";
                break;
            case 4:
                videoPlayer.src = "https://drive.google.com/file/d/1hZUnPuz8Z-tK65BSChy1136XW37I6_JQ/preview";
                break;
            case 5:
                videoPlayer.src = "https://drive.google.com/file/d/1NGoOG7QrdLyrHkhf4Sv57ZjbjLxLG7mT/preview";
                break;
            case 6:
                videoPlayer.src = "https://drive.google.com/file/d/1fd_lQqWWQmwN-tK-CjqpKqZDStrUD-gE/preview";
                break;
            case 7:
                videoPlayer.src = "https://drive.google.com/file/d/1CnFFkC2r4z62v1dVgIHa_gR5JjvmxehJ/preview";
                break;
            case 8:
                videoPlayer.src = "https://drive.google.com/file/d/19vkXQBBhSH5aVDYp4ZynSr7ImLl2WQPH/preview";
                break;
            case 9:
                videoPlayer.src = "https://drive.google.com/file/d/1V3b7eo9jO_JBE5wNdrdu9cwcPdsbMQ35/preview";
                break;
            case 10:
                videoPlayer.src = "https://drive.google.com/file/d/1LEHyqDuY6aLkUumH1p_qERiuyMwU1TrS/preview";
                break;
            case 11:
                videoPlayer.src = "https://drive.google.com/file/d/1mGbFJ2SeHV3ZtbvdILN1jonTECemO-5G/preview";
                break;
            case 12:
                videoPlayer.src = "https://drive.google.com/file/d/1Evq9eLA2Lv6ppxpHnoNjXOzYP4QdNHSy/preview";
                break;
            case 13:
                videoPlayer.src = "https://drive.google.com/file/d/1MHTqNIDuqHoauw3-ZXwqwuG5C7GSkrQt/preview";
                break;
            case 14:
                videoPlayer.src = "https://drive.google.com/file/d/1ruxWzksPykwKI01zwvmEks4-Wq1ogNXQ/preview";
                break;
            case 15:
                videoPlayer.src = "https://drive.google.com/file/d/1GwqoBDhB-wk7L6HKAWQHf6H9D4tJd5ak/preview";
                break;
            case 16:
                videoPlayer.src = "https://drive.google.com/file/d/1qJnBGrVfhEM5jR0bVqkBG1f6Be9PD4bY/preview";
                break;
            case 17:
                videoPlayer.src = "https://drive.google.com/file/d/1miVbD834w697qMC83Ke5UsXPmKRmVZCH/preview";
                break;
            case 18:
                videoPlayer.src = "https://drive.google.com/file/d/1hvZUsvoQNB2P4ejsK1f20XSDEeQvWjNg/preview";
                break;
            case 19:
                videoPlayer.src = "https://drive.google.com/file/d/1QtsF_S1BkO63LR7G5IC11ztqDCyatPiC/preview";
                break;
            case 20:
                videoPlayer.src = "https://drive.google.com/file/d/19bYT0ygAMumbVSiLUnGHOWahsheAW2Xd/preview";
                break;
            case 21:
                videoPlayer.src = "https://drive.google.com/file/d/10ZUsvXdkmfIXQH9a4FDAI7QokBZ9JKGc/preview";
                break;
            case 22:
                videoPlayer.src = "https://drive.google.com/file/d/1PzBppcGTlxpZfbC0iqh5-PcAku5auQCn/preview";
                break;
            case 23:
                videoPlayer.src = "https://drive.google.com/file/d/1hY7XM8O1BC_UW_PyYG3KkNtnvb05GLKo/preview";
                break;
            case 24:
                videoPlayer.src = "https://drive.google.com/file/d/1G6MPghmjpR7s2N5NvLRwoxSvpRLGaqS9/preview";
                break;
            case 25:
                videoPlayer.src = "https://drive.google.com/file/d/1gBwNCFe1VJpmIurQF03qVvvQxnrIiaMJ/preview";
                break;
            default:
                videoPlayer.src = "";
        }
    } else if(title === 'Вбивця Акаме!' && episodeNumber >= 1 && episodeNumber <= 24){
        switch (episodeNumber) {
            case 1:
                videoPlayer.src = "https://drive.google.com/file/d/17xTPFVRAwUi9-O38NCZqfICEi07GUh-B/preview";
                break;
            case 2:
                videoPlayer.src = "https://drive.google.com/file/d/1QQSNCTXjvHRCx9yvgaQQFcuzMzd840sL/preview";
                break;
            case 3:
                videoPlayer.src = "https://drive.google.com/file/d/1wc9kixDzKpEk3VOJAgr_v2wQOk5g6YGs/preview";
                break;
            case 4:
                videoPlayer.src = "https://drive.google.com/file/d/1U8c_qcGmSzUhed3Q8hveIpWmefRlDfIT/preview";
                break;
            case 5:
                videoPlayer.src = "https://drive.google.com/file/d/1g2pTCMS5rC49d9SQ5tpAkMcsUZ0Tb5SU/preview";
                break;
            case 6:
                videoPlayer.src = "https://drive.google.com/file/d/1Zh3R_NQ5PHKMKNyR1wNIc8wBkonlAqq3/preview";
                break;
            case 7:
                videoPlayer.src = "https://drive.google.com/file/d/104fRQxygsqxnApiHJaFH-ELTkY8kK798/preview";
                break;
            case 8:
                videoPlayer.src = "https://drive.google.com/file/d/189QIhAV6ZUAXOkcnkMQQ7BpOrNA8Gn_E/preview";
                break;
            case 9:
                videoPlayer.src = "https://drive.google.com/file/d/1Xc0b5L1aC0cj_CBuauKKzkF6BMhP1QmZ/preview";
                break;
            case 10:
                videoPlayer.src = "https://drive.google.com/file/d/1FQGeYSK3nTzH2kSA9mOuHdg8hVZ_R9rw/preview";
                break;
            case 11:
                videoPlayer.src = "https://drive.google.com/file/d/1q_6aT666m0OGvQZ0XKHlWv2TDAgpq60g/preview";
                break;
            case 12:
                videoPlayer.src = "https://drive.google.com/file/d/1z-F-xVxNeGIgGMjW2hpgVFSc3iFu5f9J/preview";
                break;
            case 13:
                videoPlayer.src = "https://drive.google.com/file/d/1TQLHqjXR0qWcjQ-7gCGf7oibqc5NLEKl/preview";
                break;
            case 14:
                videoPlayer.src = "https://drive.google.com/file/d/1AXwBZussLmrk8LRTEFaQ3ZE4KAIFxF5o/preview";
                break;
            case 15:
                videoPlayer.src = "https://drive.google.com/file/d/1k6LSjhpPGjL7DrLrzz2FWstxvBDzWsQ4/preview";
                break;
            case 16:
                videoPlayer.src = "https://drive.google.com/file/d/1_FNtM7OQ2xVeEwiPdvpsw1Wb3tLsxn4d/preview";
                break;
            case 17:
                videoPlayer.src = "https://drive.google.com/file/d/1pVEVWdIQ5SCpFBMzwefk1RWfMPuNl8Ct/preview";
                break;
            case 18:
                videoPlayer.src = "https://drive.google.com/file/d/1vPF4qGSjO6fJiKG7FzLXtUJH2TDeYh6o/preview";
                break;
            case 19:
                videoPlayer.src = "https://drive.google.com/file/d/1kWJI8xYdFj1Nr-8rSJ-MnRWPiiQI-MQU/preview";
                break;
            case 20:
                videoPlayer.src = "https://drive.google.com/file/d/1uU4iFpoiyCflJ_7QUWNCkY7_h5JIUYyp/preview";
                break;
            case 21:
                videoPlayer.src = "https://drive.google.com/file/d/1eGfXgz7zzIEU08pM64bVolfpsxVSKN2-/preview";
                break;
            case 22:
                videoPlayer.src = "https://drive.google.com/file/d/1PzBppcGTlxpZfbC0iqh5-PcAku5auQCn/preview";
                break;
            case 23:
                videoPlayer.src = "https://drive.google.com/file/d/1wSmDyksc6inOUvwvp91HvViX5DCtrsKe/preview";
                break;
            case 24:
                videoPlayer.src = "https://drive.google.com/file/d/1dE82T6gg_O7pY6zU4NCrq_GVrtEj_3to/preview";
                break;
            default:
                videoPlayer.src = "";
        }
    } else if(title === 'Синтетичні спогади' && episodeNumber >= 1 && episodeNumber <= 13){
        switch (episodeNumber) {
            case 1:
                videoPlayer.src = "https://drive.google.com/file/d/19UpydNuQX8YoE_KhUEuO3cEUKnZ_3zum/preview";
                break;
            case 2:
                videoPlayer.src = "https://drive.google.com/file/d/1XBmoVQOkkPm4a77H_24ixTyxej-dum2G/preview";
                break;
            case 3:
                videoPlayer.src = "https://drive.google.com/file/d/1RYKjZSxE4dwp45BRED8RxiQuSwt4eupX/preview";
                break;
            case 4:
                videoPlayer.src = "https://drive.google.com/file/d/1A6Y9Dz93YOGBMJylTYuZSLxRXGd19ELM/preview";
                break;
            case 5:
                videoPlayer.src = "https://drive.google.com/file/d/1V9zAti2yQqnXEDbxcYqKdyehJnZXIiF1/preview";
                break;
            case 6:
                videoPlayer.src = "https://drive.google.com/file/d/1HgrTjLK6wjZxHQaA-jpK9slrP36A8TUS/preview";
                break;
            case 7:
                videoPlayer.src = "https://drive.google.com/file/d/1QgUBOguCkwO9zHJ6yPYHwdABIOCsXP0B/preview";
                break;
            case 8:
                videoPlayer.src = "https://drive.google.com/file/d/1M-ADiY_lM0SXaHs5x4xhpzZUwKHtnvi1/preview";
                break;
            case 9:
                videoPlayer.src = "https://drive.google.com/file/d/1dv2V2vKHDcnBCgA8C32AsNaI4Givl2t9/preview";
                break;
            case 10:
                videoPlayer.src = "https://drive.google.com/file/d/11eSFIH0nJsS05HRLpr4lo9Wuu3ALq2_o/preview";
                break;
            case 11:
                videoPlayer.src = "https://drive.google.com/file/d/1cC6Ox6I3xwMEqhOsiTByXJd2fsDFJN-V/preview";
                break;
            case 12:
                videoPlayer.src = "https://drive.google.com/file/d/10cQvPo_Xboyfq6NPHCueVLSL0saS7I8O/preview";
                break;
            case 13:
                videoPlayer.src = "https://drive.google.com/file/d/1ApiyREpCEYrC89ZFA77rxdYd_L0oB0NT/preview";
                break;
            default:
                videoPlayer.src = "";
        }
    } else if(title === 'Шарлотта' && episodeNumber >= 1 && episodeNumber <= 13){
        switch (episodeNumber) {
            case 1:
                videoPlayer.src = "https://drive.google.com/file/d/1HGJQXH2eS-ccc2vxV1e7jYYgkz1cYe1V/preview";
                break;
            case 2:
                videoPlayer.src = "https://drive.google.com/file/d/1xpACJMtCFcG1n-_JlG95acd1FwFGzz1H/preview";
                break;
            case 3:
                videoPlayer.src = "https://drive.google.com/file/d/1abIyjzphuWP6_ZHjk4u50dHmYLecuv4I/preview";
                break;
            case 4:
                videoPlayer.src = "https://drive.google.com/file/d/1LLD1BCFK0YtW8nU7R-wK6b_WNxFLdke6/preview";
                break;
            case 5:
                videoPlayer.src = "https://drive.google.com/file/d/1wKoasWa-cpxLhT1mf102Sy_PXDB8TX0x/preview";
                break;
            case 6:
                videoPlayer.src = "https://drive.google.com/file/d/1zsvjPtEF_oJyZV2f3TKtWFdTT4_qhUYQ/preview";
                break;
            case 7:
                videoPlayer.src = "https://drive.google.com/file/d/1SXROt4EUq5_22hoT7--JMH8NGgoGv1Iz/preview";
                break;
            case 8:
                videoPlayer.src = "https://drive.google.com/file/d/1otvI7T763nUMQUcoU7FBWJ-Y-36tKSxw/preview";
                break;
            case 9:
                videoPlayer.src = "https://drive.google.com/file/d/1JynQ8zRTQP0dclybOO6WLX9OvYh58L8d/preview";
                break;
            case 10:
                videoPlayer.src = "https://drive.google.com/file/d/1qRYmDJ9992NwiqBblCnk160To8sHHjNd/preview";
                break;
            case 11:
                videoPlayer.src = "https://drive.google.com/file/d/1J5vMJFIJXdskQlE6HYNUCt23351VWXuF/preview";
                break;
            case 12:
                videoPlayer.src = "https://drive.google.com/file/d/1ruJtaJTFLsgL9M18Jo0XLwhuYDoh9vPy/preview";
                break;
            case 13:
                videoPlayer.src = "https://drive.google.com/file/d/1eaqwV5I57-osJYKAYbudYvvW7SDvIyvU/preview";
                break;
            default:
                videoPlayer.src = "";
        }
    } else if(title === 'Сатана на підробітку!' && episodeNumber >= 1 && episodeNumber <= 13){
        switch (episodeNumber) {
            case 1:
                videoPlayer.src = "https://drive.google.com/file/d/1IdtgTTWSixZislrznhcDizquM4LNVAKs/preview";
                break;
            case 2:
                videoPlayer.src = "https://drive.google.com/file/d/154EZTJAc_arfYAf9S-kAG-mfiW5QkVsj/preview";
                break;
            case 3:
                videoPlayer.src = "https://drive.google.com/file/d/1aNBS5foyCbQPI4kfAWpgMx_YOTD-phsd/preview";
                break;
            case 4:
                videoPlayer.src = "https://drive.google.com/file/d/1j9oQaVUdGBLcweGLSuNzwLUrA-yA20ja/preview";
                break;
            case 5:
                videoPlayer.src = "https://drive.google.com/file/d/1ANVxBhHsBX0MS30D9HLNnxNgPsUKVxZ3/preview";
                break;
            case 6:
                videoPlayer.src = "https://drive.google.com/file/d/1WdzSjN-nhStj5zfI43PRN8WGHOmZ1Bdz/preview";
                break;
            case 7:
                videoPlayer.src = "https://drive.google.com/file/d/1vopkNXBlI2gPic1n5-D25rA8tDHv_XVq/preview";
                break;
            case 8:
                videoPlayer.src = "https://drive.google.com/file/d/1c4_iJQcuu_HZ0cjg8sbhSSRthGCUtaMh/preview";
                break;
            case 9:
                videoPlayer.src = "https://drive.google.com/file/d/1nbLHfWk9DBjh6grRKQqBBmpKqlMpvVvn/preview";
                break;
            case 10:
                videoPlayer.src = "https://drive.google.com/file/d/1wRigqdLx5Wsz2jffcvsqJuoY2nbxRcmX/preview";
                break;
            case 11:
                videoPlayer.src = "https://drive.google.com/file/d/1EisJyOKsJx3bK_zvjkBoa6rpe_49WVkx/preview";
                break;
            case 12:
                videoPlayer.src = "https://drive.google.com/file/d/1rVG0wqPSFVk9b9T9zwjr9phtBYLZkw2p/preview";
                break;
            case 13:
                videoPlayer.src = "https://drive.google.com/file/d/18otecob-Oyr99T_8He5U6I5hYs60MDt-/preview";
                break;
            default:
                videoPlayer.src = "";
        }
    }
    else {
        videoPlayer.src = "";
    }
    toggleDropdown();
}

// для другого слайдера на головній отримання данних№"№
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const title = urlParams.get('title');
    const episodes = urlParams.get('episodes');
    const description = urlParams.get('description');
    const categories = urlParams.get('categories');

    document.getElementById('anime-title').textContent = title;
    document.getElementById('anime-description').textContent = description;
    document.getElementById('anime-categories').textContent = `Категорії: ${categories}`;
    document.getElementById('anime-episodes').textContent = `Кількість епізодів: ${episodes}`;
});