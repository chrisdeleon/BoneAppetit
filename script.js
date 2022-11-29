var initialPagePosition = window.pageYOffset; // Starting point of page offset in the y-axis. By default it is 0.
var currentPagePosition = window.pageYOffset; 
var navbar = document.getElementById('navbar');
window.onscroll = function () { // Event listener added to the entire window that runs a function when activated.
    currentPagePosition = window.pageYOffset; // Updates the variable to reflect the current position
    if (initialPagePosition > currentPagePosition){
        navbar.style.top = "0"; // resets the top style so that the navbar appears
    } else {
        navbar.style.top = "-12vh"; // "moves" the navbar 12vh up so that it appears off screen, giving the disappearing effect
    }
    // This allows for the function to run properly based off currently location, not just initial position
    initialPagePosition = currentPagePosition; 
}