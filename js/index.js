
//Menu Burger
    window.onload = function() {
        let hiders = document.querySelectorAll('[data-js="hide"]');
      
      Array.prototype.forEach.call(hiders, function (hider) {
          let hiderID = hider.getAttribute('href');
        let hiderTarget = document.querySelector(hiderID);
        
        hider.addEventListener('click', function (event) {
            event.preventDefault();
          
          hiderTarget.classList.toggle('--visible');
        });
      });
    };

    //Caroussel

    const leftArrow = document.querySelector('.previous');
const rightArrow = document.querySelector('.next');

let images = document.getElementsByClassName('card');
//déclare un tableau avec toutes mes images
//console.log(images);
let currentCard = 0;

function nextSlide() {
    // je cache l'image current
    images[currentCard].className = 'card'
    // je passe à la prochaine image
    currentCard = (currentCard + 1) % images.length
    // j'ajoute la classe current à ma nouvelle image pour la rendre visible
    images[currentCard].className = 'card current'
    console.log(currentCard)
  }

function prevSlide() {    
    images[currentCard].className = 'card'    
    currentCard = (currentCard - 1) % images.length
    if (currentCard == -1) {
      currentCard = images.length - 1
    }    
    images[currentCard].className = 'card current'
    console.log(currentCard)
  };

rightArrow.addEventListener('click', () => {
    images[currentCard].classList.remove('current');
     nextSlide()
 });
 
 leftArrow.addEventListener('click', () => {
    images[currentCard].classList.remove('current');
    prevSlide()
});