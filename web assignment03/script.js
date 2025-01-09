// Footer Button Interaction
function footerButtonAction(buttonType) {
    if (buttonType === "tell") {
        alert("Tell your friends about this service on Facebook!");
    } else if (buttonType === "tag") {
        alert("Tag your friends on Instagram!");
    } else if (buttonType === "show") {
        alert("Share this service on YouTube!");
    }
}

// Add Event Listeners to Footer Buttons
document.querySelector(".footer-buttons").addEventListener("click", (e) => {
    if (e.target.closest(".footer-btn")) {
        const buttonType = e.target.closest(".footer-btn").dataset.type;
        footerButtonAction(buttonType);
    }
});

// Sign-In Button Functionality
document.getElementById("signInButton").addEventListener("click", () => {
    const userName = prompt("Please enter your name:", "");
    if (userName) {
        alert(`Welcome, ${userName}! You have successfully signed in.`);
    } else {
        alert("Sign-in cancelled.");
    }
});
