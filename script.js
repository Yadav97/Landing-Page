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



// float to top button js code
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

//3. when page loads all the elements of Dom loaded slowly-slowly

ScrollReveal().reveal('.reveal-random', { delay: 1000 });
ScrollReveal().reveal('.reveal-quote', { delay: 1000 });
ScrollReveal().reveal('.reveal-signup', { delay: 800 });
ScrollReveal().reveal('.reveal-footer');


// scroll indicator
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}