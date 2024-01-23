// Write your JavaScript here...

// Hamburger menu

function toggleMenu() {
    var navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('show');
}

//Header carousel
document.addEventListener('DOMContentLoaded', function() {
    var headerElement = document.querySelector('.header'); 
    var images = [
      './images/header-slider-img-01.jpg',
      './images/header-slider-img-02.jpg',
      './images/header-slider-img-03.jpg'
    ];
    var currentImageIndex = 0;
  
    function changeBackgroundImage() {
      headerElement.style.backgroundImage = 'url(' + images[currentImageIndex] + ')';
      currentImageIndex = (currentImageIndex + 1) % images.length;
    }
  
    setInterval(changeBackgroundImage, 3000); 
  });
  