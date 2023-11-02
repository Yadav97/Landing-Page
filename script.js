
// scroll indicator and top button floating ===================================

// get the scrollInicator div element 
let scrollIndicator = document.getElementById("scrollIndicator");

// Get the button:
let mybutton = document.getElementById("topBtn");


// When the user scrolls the page, execute arrow function below
window.onscroll = () => {
    let scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    let scrolledPercentage = (window.scrollY / scrollableHeight) * 100;
    scrollIndicator.style.width = `${scrolledPercentage}%`;

    if (scrolledPercentage > 0) {
        scrollIndicator.style.display = "block";
    } else {
        scrollIndicator.style.display = "none";
    }


// scroll to top floating button ============================================
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  mybutton.style.display = "block";
} else {
  mybutton.style.display = "none";
}


};

// when user click on Floating to "Top" button the page goes upward
function topFunction() {

  document.documentElement.scrollTop = 0; 
} 

//3. when page loads all the elements of Dom loaded slowly-slowly.

ScrollReveal().reveal('.reveal-random', { delay: 1000 });
ScrollReveal().reveal('.reveal-quote', { delay: 1000 });
ScrollReveal().reveal('.reveal-signup', { delay: 800 });
ScrollReveal().reveal('.reveal-footer');




