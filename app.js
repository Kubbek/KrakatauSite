const THUMBNAILS = document.querySelectorAll(".thumbnail img");
const POPUP = document.querySelector(".popup")
const POPUP_CLOSE = document.querySelector(".popup_close")
const POPUP_IMG = document.querySelector(".popup_img")
const ARROW_LEFT = document.querySelector(".popup_arrow--left");
const ARROW_RIGHT = document.querySelector(".popup_arrow--right");

let imageIndex;

const nextImg = () => {
    if (imageIndex === 0){
        imageIndex = THUMBNAILS.length -1
    } else {
        imageIndex--;
    }
    imageIndex = imageIndex + 1
    POPUP_IMG.src= THUMBNAILS[imageIndex].src
}

const prevImg = () => {
    if (imageIndex === 0){
        imageIndex = THUMBNAILS.length - 1 ;
    } else {
        imageIndex++
    }
    imageIndex = imageIndex - 1
    POPUP_IMG.src= THUMBNAILS[imageIndex].src
}

const closePopup = () =>{
    POPUP.classList.add("hidden")
}
THUMBNAILS.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", (e) => {
        POPUP.classList.remove("hidden");
        POPUP_IMG.scr = e.target.src;
        imageIndex = index;
    });
})

POPUP_CLOSE.addEventListener("click", closePopup)

ARROW_RIGHT.addEventListener("click", nextImg )

ARROW_LEFT.addEventListener("click", prevImg)

document.addEventListener('keydown', (e) => {
    if ( !POPUP.classList.contains("hidden"))

    if (e.code === "ArrowRight" || e.keyCode === 39) {
        nextImg()
    } 

    if (e.code === "ArrowLeft" || e.keyCode === 37) {
        prevImg()
    } 

    if (e.code === "Escape" || e.keyCode === 27) {
        closePopup()
    }
})

