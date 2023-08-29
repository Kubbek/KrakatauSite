


const THUMBNAILS = document.querySelectorAll(".thumbnail img");
const POPUP = document.querySelector(".popup")
const POPUP_CLOSE = document.querySelector(".popup_close")
const POPUP_IMG = document.querySelector(".popup_img")
const ARROW_LEFT = document.querySelector(".arrow_left");
const ARROW_RIGHT = document.querySelector(".arrow_right");
const GALLERY = document.querySelector(".gallery");
const ABOUT_MAIN = document.querySelector(".about_page")
const ABOUT_PRIZES = document.querySelector(".about_prizes")
const ABOUT_REALIZATIONS = document.querySelector(".about_realizations")
const ABOUT_POPUP_AWARDS = document.querySelector(".awards_popup")
const ABOUT_POPUP_REALIZATIONS = document.querySelector(".realizations_popup")
const navToggle = document.querySelector(".mobile-nav-toggle")
const primaryNav = document.querySelector(".primary-navigation")
const popupTitle = document.querySelector('.popup-title');
const popupPlay = document.querySelector('.arrow_play')
const popupIframe = document.querySelector(".popup-iframe");

var LETTERS = document.querySelectorAll('.scaling_text');



//moblie nav

navToggle.addEventListener('click', ()=> {
    primaryNav.toggleAttribute('data-visible')
} )

// Resize function

function resizeText() {
  LETTERS.forEach(function (letter) {
    var height = letter.offsetHeight;
    letter.style.fontSize = height  + 'px';
    letter.style.lineHeight = height + 'px';
  });
}

window.addEventListener('resize', resizeText);
window.addEventListener('DOMContentLoaded', resizeText);

// Popup Gallery

let counter = 0


const closePopup = () =>{
    POPUP.classList.add("hidden")
    GALLERY.classList.remove("hidden")
}

const prevImg = () => {
    if (counter==1) {
        counter=56
    } if(THUMBNAILS[counter-2].getAttribute('data-type')=='gif'){
        var currentLink = THUMBNAILS[counter-2].getAttribute('data-link')
        counter--
        POPUP_IMG.setAttribute('src', 'img/'+counter+'A.gif')
        popupPlay.classList.remove('hidden')
        popupPlay.setAttribute('href', currentLink)
        popupTitle.textContent=THUMBNAILS.getAttribute('data-counter'-1).getAttribute('data-title')   
    } else {
        counter--
        POPUP_IMG.setAttribute('src', 'img/'+counter+'A.jpg')
        popupPlay.classList.add('hidden')
        popupTitle.textContent=THUMBNAILS[counter-1].getAttribute('data-title')
    }

}
const nextImg = () => {
    if (counter ==56){
        counter =1 
    } if(THUMBNAILS[counter].getAttribute('data-type')=="gif"){
        var currentLink2 = THUMBNAILS[counter].getAttribute('data-link')
        counter++
        POPUP_IMG.setAttribute('src', 'img/'+counter+'A.gif')
        popupPlay.classList.remove('hidden')
        popupPlay.setAttribute('href', currentLink2)
        popupTitle.textContent=THUMBNAILS[counter-1].getAttribute('data-title')   
    }  else {
        counter++
        POPUP_IMG.setAttribute('src', 'img/'+counter+'A.jpg')
        popupPlay.classList.add('hidden')
        popupTitle.textContent=THUMBNAILS[counter-1].getAttribute('data-title')      
    } 

};

THUMBNAILS.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
        if (thumbnail.getAttribute('data-type') == 'gif') {
            POPUP.classList.remove("hidden");
            GALLERY.classList.add("hidden");
            POPUP_IMG.setAttribute('src', thumbnail.src.slice(0, -4) + "A.gif");
            counter = thumbnail.getAttribute('data-counter');
            popupPlay.classList.remove('hidden')
            popupPlay.setAttribute('href', thumbnail.getAttribute('data-link')); 
            popupTitle.textContent = THUMBNAILS[counter - 1].getAttribute('data-title');        
        } else {
            POPUP.classList.remove("hidden");
            GALLERY.classList.add("hidden");
            POPUP_IMG.setAttribute('src', thumbnail.src.slice(0, -4) + "A.jpg");
            counter = thumbnail.getAttribute('data-counter');
            popupPlay.setAttribute('href', ''); 
            popupTitle.textContent = THUMBNAILS[counter - 1].getAttribute('data-title');
        }
    });
});


const clickPrizes = () => {
    ABOUT_MAIN.classList.add("hidden")
    ABOUT_POPUP_AWARDS.classList.remove("hidden")
    resizeText();
}


const clickRealizations = () => {
    ABOUT_MAIN.classList.add("hidden")
    ABOUT_POPUP_REALIZATIONS.classList.remove("hidden")
    resizeText();
}

POPUP_CLOSE.addEventListener("click", closePopup);

ARROW_RIGHT.addEventListener("click", nextImg );

ARROW_LEFT.addEventListener("click", prevImg);

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


if (ABOUT_REALIZATIONS) {
    ABOUT_REALIZATIONS.addEventListener("click", clickRealizations)
}
    
if (ABOUT_PRIZES) {
    ABOUT_PRIZES.addEventListener("click", clickPrizes)
}