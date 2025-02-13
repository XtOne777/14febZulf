let leftPos = 0
let bottomPos = 0
document.getElementById('yes').addEventListener('click', () => {
    const confirmElement = document.getElementById('confirm');
    confirmElement.classList.add('showen');
});

document.getElementById('no').addEventListener('mouseover', () => {
    leftPos = Math.floor(Math.random() * (100 - (-100) + 1)) + (-50);
    bottomPos = Math.floor(Math.random() * (150 - (-150) + 1)) + (-150);
    document.getElementById('no').style.position = "absolute"
    document.getElementById('no').style.left = leftPos + "%"
    document.getElementById('no').style.bottom = bottomPos + "%"
});

document.getElementById('no').addEventListener('click', () => {
    leftPos = Math.floor(Math.random() * (100 - (-100) + 1)) + (-50);
    bottomPos = Math.floor(Math.random() * (150 - (-150) + 1)) + (-150);
    document.getElementById('no').style.position = "absolute"
    document.getElementById('no').style.left = leftPos + "%"
    document.getElementById('no').style.bottom = bottomPos + "%"
});

document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.querySelector(".start");
    const startImage = startButton.querySelector("img");
    const music = document.getElementById("music");
    const lyrics = document.querySelector(".lyrics");
    const ZulfiaImage1 = document.querySelector(".Zulfia-image");
    const body = document.getElementById("body");
    const growFaster = document.querySelector(".grow-faster");
    const faster = document.querySelector(".faster");
    const OOOH = document.querySelector(".OOOH");
    const loveHeat = document.querySelector(".love-heat");
    const hotSeat = document.querySelector(".hot-seat");
    const tellMe = document.querySelector(".tell-me");
    const afterAll = document.querySelector(".after-all");
    const romanceText = document.querySelector(".romance-text");
    const romanceWords = document.querySelector(".romance-words");
    const wishText = document.querySelector(".wish-text");
    const endScene = document.querySelector(".endScene");

    let isPlaying = false;

    startButton.addEventListener("click", () => {
        body.style.backgroundColor = "#FFC0CB";
        if (!isPlaying) {
            startImage.src = "./img/pause-circle.svg"; // Меняем на паузу
            startButton.classList.add("hidden"); // Кнопка улетает вверх

            // Включаем музыку
            music.play();

            // Запускаем анимацию текста
            lyrics.style.animation = "lyricsAnimation 5s ease-in-out forwards";
            lyrics.style.opacity = "1";

            // Запускаем анимацию девушки
            ZulfiaImage1.style.animation = "ZulfiaAnimation1 5s ease-in-out forwards";
            ZulfiaImage1.style.opacity = "1";
        }
        isPlaying = !isPlaying;
    });

    music.addEventListener("timeupdate", () => {
        if (music.currentTime >= 4 && music.currentTime < 4.5) {
            growFaster.style.animation = "growFasterAnimation 1s ease-in-out forwards";
        }
        if (music.currentTime >= 4.5 && music.currentTime < 5.5) {
            faster.style.animation = "fasterAnimation 1s ease-in-out forwards";
        }
        if (music.currentTime >= 5.5 && music.currentTime < 6.5) {
            OOOH.style.animation = "OOOH 3s ease-in-out";
        }
        if (music.currentTime >= 7.3 && music.currentTime < 9.2) {
            loveHeat.style.animation = "textRiseAnimation 4s ease";
        }
        if (music.currentTime >= 9.8 && music.currentTime < 10.6) {
            hotSeat.style.animation = "textRiseAnimation 5s ease";
            tellMe.style.animation = "textRiseAnimation2 5s ease";
        }
        if (music.currentTime >= 13.3 && music.currentTime < 14.2) {
            afterAll.style.animation = "textRiseAnimation 4s ease";
        }
        if (music.currentTime >= 16 && music.currentTime < 18.3) {
            romanceText.style.animation = "textRiseAnimation3 6s ease";
        }
        if (music.currentTime >= 18.5) {
            romanceWords.style.top = "70%";
            document.querySelector(".word-to").style.animation = "fadeIn 1.5s ease";
        }
        if (music.currentTime >= 18.8) {
            document.querySelector(".word-go").style.animation = "fadeIn 1.5s ease";
        }
        if (music.currentTime >= 19) {
            document.querySelector(".word-romancing").style.animation = "fadeIn 1.5s ease";
        }
        if (music.currentTime >= 19.6) {
            romanceText.style.animation = "textRiseAnimation5 3s ease";
            wishText.style.animation = "fadeIn 1s ease-in forwards";
        }
        if (music.currentTime >= 20) {
            wishText.style.animation = "textRiseAnimation 7s ease";
            romanceWords.style.top = "100%";
        }
        if (music.currentTime >= 24) {
            endScene.style.opacity = "1";
            endScene.style.top = "0%";
        }
    });
});