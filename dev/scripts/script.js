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
    var circles = document.querySelectorAll('.circle');
  
    function changeBackgroundImage() {
      headerElement.style.backgroundImage = 'url(' + images[currentImageIndex] + ')';

    // Remove the 'active' class from all circles
    circles.forEach(function(circle) {
        circle.classList.remove('active');
    });

    
      // Add the 'active' class to the current circle
      circles[currentImageIndex].classList.add('active');

      currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    changeBackgroundImage();
  
    setInterval(changeBackgroundImage, 3000); 
  });
  