
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

//     //Caroussel

const leftArrow = document.querySelector('#previous__slide');
const rightArrow = document.querySelector('#next__slide');
// const leftArrow2 = document.querySelector('#previous__work');
// const rightArrow2 = document.querySelector('#next__work');
let slideIndex = 1;
let slides = document.getElementsByClassName('slide');
// let slidesWork = document.getElementsByClassName('slide2');

//déclare un tableau avec toutes mes images
//console.log(images);
showSlides();

function showSlides(number){
  
  for(let i = 0; i < slides.length; i++){
    slides[i].classList.add('hide');
    //slides[i].style.display = 'none'; équivalent
  }
  slides[slideIndex - 1].classList.add('show');
};

rightArrow.addEventListener('click', () => {
   let currentElement = document.querySelector('.show');
      //ceci est mon premier élément
   let nextSibling = currentElement.nextElementSibling;
      //pour cibler l'élément suivant
   if(slideIndex < slides.length){
    currentElement.classList.remove('show');
    nextSibling.classList.add('show');
    slideIndex++;
   } else {
    slideIndex = 1;
    slides[slideIndex - 1].classList.add('show');
    slides[slides.length - 1].classList.remove('show');
   }
   console.log(slideIndex, slides.length);

});

// leftArrow.addEventListener('click', () => {
//   let currentElement = document.querySelector('.show');
//       //ceci est mon premier élément
//    let previousSibling = currentElement.previousElementSibling;
//       //pour cibler l'élément suivant
//    if(){
    
//    } else {
    
//    }
//    console.log(slideIndex, slides.length);
// });

// function nextSlide() {
//     // je cache l'image current
//     images[currentCard].className = 'card__c1';
//     elementParcours[currentText].className = 'text__c1';
//     // je passe à la prochaine image
//     currentCard = (currentCard + 1) % images.length;
//     currentText = (currentText +1) % elementParcours.length;
//     // j'ajoute la classe current à ma nouvelle image pour la rendre visible
//     images[currentCard].className = 'card current';
//     elementParcours[currentText].className = 'text current';
//     console.log(currentCard)
//   }

// function prevSlide() {    
//     images[currentCard].className = 'card'    ;
//     elementParcours[currentText].className = 'text';
//     currentCard = (currentCard - 1) % images.length;
//     currentText = (currentText - 1) % elementParcours.length;
//     if (currentCard == -1 && currentText == -1) {
//       currentCard = images.length - 1;
//       currentText = elementParcours.length - 1;
//     }    
//     images[currentCard].className = 'card current';
//     elementParcours[currentText].className = 'text current';
//     console.log(currentCard)
//   };

  // Ici ajouter une boucle pour que la fonction fasse des boucles sans sortir du tableau mais en reprenant au début ou à la fin selon la flêche sur laquelle on clique
  // for (let i = 0; i < numberOfPassengers; i++) {
  //     console.log("Passager embarqué !");
  // }


// rightArrow2.addEventListener('click', () => {
//   images[currentCard].classList.remove('current');
//    nextSlide()
// });

// leftArrow2.addEventListener('click', () => {
//   images[currentCard].classList.remove('current');
//   prevSlide()
// });

//Carroussel scolaire ==> c1

// const nextArrowFormation = document.querySelector('#next__formation');
// const previousArrowFormation = document.querySelector('#previous__formation');

// let cardTableauFormation = document.getElementsByClassName('card__c1');
// let textTableauFormation = document.getElementsByClassName('text__c1');

// let currentCardFormation = 0;
// let currentTextFormation = 0;

// nextArrowFormation.addEventListener('click', () =>{
//   for(let i = 0; i <= cardTableauFormation.length; i++){
//     currentCardFormation
//   }
// })


