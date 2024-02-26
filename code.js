function changeText() {
    // Select the doc element by its id
    let doc = document.getElementById("targetParagraph");

    // Change the text content of the doc
    doc.textContent = "Text changed! Button clicked!";
}

// Select the button element by its id
let button = document.getElementById("changeTextButton");

// Add a click event listener to the button, with the changeText function as the callback
button.addEventListener("click", changeText);
