const bodyElement = document.querySelector('.body');
const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav');
const phone = document.querySelector('.phone');

        burger.addEventListener('click', function() {
        bodyElement.classList.toggle('_lock')
        navMenu.classList.toggle('_active');
        phone.classList.toggle('_active');
    });    
        document.querySelector('.burger').addEventListener('click', function() {
        document.querySelector('.burger span').classList.toggle('active');
      });   

    //Burger Menu and nav___________

let offset = 0;
const sliderLine = document.querySelector('.slider__line');

document.querySelector('.arrow__next').addEventListener('click', function(e) {
    offset = offset + 755;
    if(offset > 2400) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.arrow__back').addEventListener('click', function(e) {
    offset = offset - 800;
    if(offset < 0) {
        offset = 2400;
    }
    sliderLine.style.left = -offset + 'px';
});
 
//Slider______________


 
  
  

