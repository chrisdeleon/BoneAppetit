
/* This code causes the navbar to disappear as the user scrolls down
 and reappear as the user scrolls up. */
var initialPagePosition = window.pageYOffset; // Starting point of page offset in the y-axis. By default it is 0.
var currentPagePosition = window.pageYOffset; 
var navUnorderedList = document.getElementById('navbarUl');
window.onscroll = function () { // Event listener added to the entire window that runs a function when activated.
    currentPagePosition = window.pageYOffset; // Updates the variable to reflect the current position
    if (initialPagePosition > currentPagePosition){
        navUnorderedList.style.top = "0"; // resets the top style so that the navbar appears
    } else {
        navUnorderedList.style.top = "-12vh"; // "moves" the navbar 12vh up so that it appears off screen, giving the disappearing effect
    }
    // This allows for the function to run properly based off currently location, not just initial position
    initialPagePosition = currentPagePosition; 
}

/* END NAVBAR APPEAR AND DISAPPEAR ON SCROLL */

/* This code toggles the responsive CSS class that makes the items in the navbar appear 
after the user clicks on the hamburger menu. */


var navContainer = document.getElementById('navbarContainer');
navContainer.addEventListener("click", navbarToggle);

function navbarToggle(){
    if (navContainer.className == "navbarItem") {
        navContainer.className += " responsive";
    } else {
        navContainer.className = "navbarItem";
    }
}