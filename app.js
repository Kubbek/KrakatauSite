const THUMBNAILS = document.querySelectorAll(".thumbnail img");
const POPUP = document.querySelector(".popup")
const POPUP_CLOSE = document.querySelector(".popup_close")
const POPUP_IMG = document.querySelector(".popup_img")
const ARROW_LEFT = document.querySelector(".arrow_left");
const ARROW_RIGHT = document.querySelector(".arrow_right");
const GALLERY = document.querySelector(".gallery");

let counter = 0

const closePopup = () =>{
    POPUP.classList.add("hidden")
    GALLERY.classList.remove("hidden")
}

const prevImg = () => {
    if (counter==1) {
        counter=56
    } else {
    counter--
    POPUP_IMG.setAttribute('src', 'img/'+counter+'A.jpg')
    }
}
const nextImg = () => {
    if (counter ==56){
        counter =1 
    } else {
        counter++
        POPUP_IMG.setAttribute('src', 'img/'+counter+'A.jpg')      
    }
};

THUMBNAILS.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
        POPUP.classList.remove("hidden");
        GALLERY.classList.add("hidden")
        POPUP_IMG.setAttribute('src',thumbnail.src.slice(0,-4)+"A.jpg")
        counter = (~~thumbnail.src.slice(-5,-4));
 
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
