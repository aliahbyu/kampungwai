// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

document.addEventListener('DOMContentLoaded', function() {
  const mainTitle = document.querySelector('.main-title');
  const subTitle = document.querySelector('.sub-title');

  setTimeout(() => {
      mainTitle.style.animation = 'fadeInDown 2s ease';
      subTitle.style.animation = 'fadeInUp 2s ease';
  }, 500); // Delay the start of the animation for better effect
});
