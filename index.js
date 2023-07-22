const textToType = "My journey as a warrior is one of purpose and honor. I take pride in upholding my principles and embracing my responsibilities with integrity. While the battles I face may be challenging, I am resolute in my pursuit of righteousness and the betterment of the world around me."; // The text you want to auto-type
const typingSpeed = 20; // Adjust this value to control the typing speed (in milliseconds)
const typingTextElement = document.getElementById("typing-text");

let charIndex = 0;



function typeText() {
    if (charIndex < textToType.length) {
        typingTextElement.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    }
}

typeText();

function togglePopUp() {
    const popUpBox = document.getElementById("popUpBox");
    popUpBox.classList.toggle("pop-up-visible");
}
const fun=togglePopUp;

setTimeout(fun,10000);



// Adjust the delay (in milliseconds) to control when the animation starts