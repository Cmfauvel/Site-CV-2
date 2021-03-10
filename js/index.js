
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

const leftArrow1 = document.querySelector('#previous__formation');
const rightArrow1 = document.querySelector('#next__formation');
const leftArrow2 = document.querySelector('#previous__work');
const rightArrow2 = document.querySelector('#next__work');

let images = document.getElementsByClassName('card');
//déclare un tableau avec toutes mes images
//console.log(images);
let currentCard = 0;

let elementParcours = document.getElementsByClassName('text');
let currentText = 0;

function nextSlide() {
    // je cache l'image current
    images[currentCard].className = 'card';
    elementParcours[currentText].className = 'text';
    // je passe à la prochaine image
    currentCard = (currentCard + 1) % images.length;
    currentText = (currentText +1) % elementParcours.length;
    // j'ajoute la classe current à ma nouvelle image pour la rendre visible
    images[currentCard].className = 'card current';
    elementParcours[currentText].className = 'text current';
    console.log(currentCard)
  }

function prevSlide() {    
    images[currentCard].className = 'card'    ;
    elementParcours[currentText].className = 'text';
    currentCard = (currentCard - 1) % images.length;
    currentText = (currentText - 1) % elementParcours.length;
    if (currentCard == -1 && currentText == -1) {
      currentCard = images.length - 1;
      currentText = elementParcours.length - 1;
    }    
    images[currentCard].className = 'card current';
    elementParcours[currentText].className = 'text current';
    console.log(currentCard)
  };

  // Ici ajouter une boucle pour que la fonction fasse des boucles sans sortir du tableau mais en reprenant au début ou à la fin selon la flêche sur laquelle on clique
  // for (let i = 0; i < numberOfPassengers; i++) {
  //     console.log("Passager embarqué !");
  // }
rightArrow1.addEventListener('click', () => {
    images[currentCard].classList.remove('current');
     nextSlide()
 });
 
 leftArrow1.addEventListener('click', () => {
    images[currentCard].classList.remove('current');
    prevSlide()
});

rightArrow2.addEventListener('click', () => {
  images[currentCard].classList.remove('current');
   nextSlide()
});

leftArrow2.addEventListener('click', () => {
  images[currentCard].classList.remove('current');
  prevSlide()
});