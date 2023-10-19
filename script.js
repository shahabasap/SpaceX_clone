const showButton = document.getElementById("showButton");
const hideButton = document.getElementById("hideButton");
const myDiv = document.getElementById("menu-box");

// Set the initial state to "none" to hide the div
myDiv.style.display = "none";

// Function to show the div
function showDiv() {
    myDiv.style.display = "block";
}

// Function to hide the div with animation
function hideDiv() {
    myDiv.style.animation = "fadeOut 0.5s"; // Apply a fade-out animation to myDiv
    myDiv.addEventListener("animationend", () => {
        myDiv.style.display = "none";
        myDiv.style.animation = ""; // Clear the animation property
    }, { once: true });

    // Apply a rotation animation to hideButton
    hideButton.style.animation = "rotateButton 0.5s";
}

// Event listeners for button clicks
showButton.addEventListener("click", showDiv);
hideButton.addEventListener("click", hideDiv);

// Event listener for scrolling to hide the div
window.addEventListener("scroll", function() {
    if (myDiv.style.display === "block") {
        hideDiv();
    }
});
