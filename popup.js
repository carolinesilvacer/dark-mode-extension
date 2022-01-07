if(document.querySelector(".popup")){
const button = document.querySelector(".button")
const circle = document.querySelector(".circle")
let buttonOn = false;

function invert() {
    document.body.style.filter = "invert(1) hue-rotate(180deg)";
    let media = document.querySelectorAll("img, picture, video");
    media.forEach((mediaItem) => {
        mediaItem.style.filter = "invert(1) hue-rotate(180deg)"
    })
}

button.addEventListener("click", () => {
    if(!buttonOn) {
        buttonOn = true;
        circle.style.animation ="moveCircleRight 1s forwards"
        button.style.animation = "backgroundYellow 1s forwards"
        chrome.tabs.executeScript({
            file: "appOn.js"
        })
    } else {
        buttonOn = false;
        circle.style.animation ="moveCircleLeft 1s forwards"
        button.style.animation = "backgroundBlue 1s forwards"
        chrome.tabs.executeScript({
            file: "appOff.js"
        })
    }
})
}