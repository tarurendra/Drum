// Sound maker

function makeSound(key) {

    switch (key) {
        case "t":
            new Audio("sounds/tom-1.mp3").play();
            break;

        case "a":
            new Audio("sounds/tom-2.mp3").play();
            break;

        case "r":
            new Audio("sounds/tom-3.mp3").play();
            break;

        case "u":
            new Audio("sounds/tom-4.mp3").play();
            break;

        case "k":
            new Audio("sounds/crash.mp3").play();
            break;

        case "e":
            new Audio("sounds/kick-bass.mp3").play();
            break;

        case "n":
            new Audio("sounds/snare.mp3").play();
            break;

        default:
            console.log(this.innerHTML);

    }
}

//Animation maker

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed")
    }, 100);
}

// Button click detector

var listOfButtons = document.querySelectorAll("button");

for (i = 0; i < listOfButtons.length; i++) {
    listOfButtons[i].addEventListener("click", function() {
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    })
}

// Keyboard click detector

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})