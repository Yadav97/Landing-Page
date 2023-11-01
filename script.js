// sticky navabr code


    // singup js code
// const openPopupButton = document.getElementById("openPopup");
// const closePopupButton = document.getElementById("closePopup");
// const popup = document.getElementById("signupPopup");

// openPopupButton.addEventListener("click", () => {
//     popup.style.display = "block";
// });

// closePopupButton.addEventListener("click", () => {
//     popup.style.display = "none";
// });

// window.addEventListener("click", (event) => {
//     if (event.target == popup) {
//         popup.style.display = "none";
//     }
// });




// Get the button:
let mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {

  document.documentElement.scrollTop = 0; 
} 

// ScrollReveal().reveal('.reveal-nav');
ScrollReveal().reveal('.reveal-random', { delay: 1000 });
ScrollReveal().reveal('.reveal-quote', { delay: 1000 });
ScrollReveal().reveal('.reveal-signup', { delay: 800 });
ScrollReveal().reveal('.reveal-footer');


