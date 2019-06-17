// (function () {
// 	'use strict';
// 	const slides = document.querySelectorAll('.on-carousel--slide'),
// 		 arrows = document.querySelectorAll('.on-arrow'),
// 		 carouselCount = 0,

// 	arrows[0].addEventListener('click', function (e) {
// 		e = e || window.event;
// 		e.preventDefault();

//         const sliding = 
//     });
    
// })();

var carouselIndex = 1;
carouselSlide(carouselIndex);

function changeSlides(n) {
  carouselSlide(carouselIndex += n);
}

function currentSlide(n) {
  carouselSlide(carouselIndex = n);
}

// function carouselSlide(n) {
//   var i;
//   var slides = document.querySelectorAll(".on-carousel--slide");
//   var dots = document.querySelector(".on-carousel--dots-dot");
//   if (n > slides.length) {carouselIndex = 1} 
//   if (n < 1) {carouselIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none"; 
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[carouselIndex-1].style.display = "block"; 
//   dots[carouselIndex-1].className += " active";
// }