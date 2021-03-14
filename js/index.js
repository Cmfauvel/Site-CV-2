
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

// const leftArrow = document.querySelector('#previous__slide');
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





