    // window.onscroll = function() {myFunction()}; 
      
    // var navlist = document.getElementById("navbar"); 
    // var sticky = navlist.offsetTop; 
      
    // /* function to stick the nav bar */
    // function myFunction() { 
    //     if (window.pageYOffset >= sticky) { 
    //         navlist.classList.add("sticky") 
    //     }  
    //       else { 
    //           navlist.classList.remove("sticky"); 
    //       } 
    // } 



    // singup js code
const openPopupButton = document.getElementById("openPopup");
const closePopupButton = document.getElementById("closePopup");
const popup = document.getElementById("signupPopup");

openPopupButton.addEventListener("click", () => {
    popup.style.display = "block";
});

closePopupButton.addEventListener("click", () => {
    popup.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target == popup) {
        popup.style.display = "none";
    }
});
