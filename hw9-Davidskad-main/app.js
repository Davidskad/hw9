const MAD_LIB = getLongMadLib(); // You can try using both getShortMadLib() and getLongMadLib()

// Regular expressions for validation
const REGEX = {
    word: /^[a-zA-Z]+$/,
    properNoun: /^[A-Z][a-zA-Z]*$/,
    adjective: /^[a-zA-Z]*[yY]$/,
    quote: /^(['"])(.*?)\1$/
};

// Error messages for validation
const ERROR_MESSAGES = {
    word: "Please type 1 or more letters, without spaces or special characters.",
    properNoun: "Please type 1 or more letters, without special characters, starting with a capital letter.",
    adjective: "Please type 1 or more letters, without special characters, ending with a y.",
    quote: "Please type 1 or more characters between single or double quotes."
};

/**
 * This function is done for you.
 * This function is called when the page is initially loaded.
 * It will generate inputs based on the contents of the MAD_LIB.fillers list.
 * Each input has an associated label and error text that begins as empty.
 */
function setup() {
    let parentNode = document.getElementById("madlib-questions");
    for (let i = 0; i < MAD_LIB.fillers.length; i++) {
        let currLib = MAD_LIB.fillers[i];
        let newDivNode = document.createElement("div");
        newDivNode.className = "mb-2"
        let newInputNode = document.createElement("input");
        newInputNode.id = currLib.id + "-input";
        newInputNode.style.maxWidth = "25em";
        newInputNode.className = "form-control"
        newInputNode.placeholder = currLib.exampleText;

        let newLabelNode = document.createElement("label");
        newLabelNode.for = currLib.id + "-input";
        newLabelNode.innerText = currLib.friendlyText;
        let newErrorTextNode = document.createElement("p");
        newErrorTextNode.id = currLib.id + "-error-text";
        newErrorTextNode.style.color = "red";
        newErrorTextNode.innerText = "";
        newDivNode.appendChild(newLabelNode);
        newDivNode.append(newInputNode);
        newDivNode.append(newErrorTextNode);
        parentNode.appendChild(newDivNode);
    }
}

/**
 * This function is done for you.
 * This function is called anytime the user presses the "Generate!" button.
 * It first checks if the given inputs are valid. If they are valid,
 * the madlib is generated by calling the generateLib function.
 */
function generate() {
    if (validate()) {
        generateLib();
        alert("Success! Please see below for your MadLib :)");
    } else {
        alert("Uh oh, please check your form submission.")
    }
}

/**
 * This function is called by generate any time the user requests
 * generation and validation passes. Generate the `madlib-result` div
 * such that any existing HTML is replaced with the newest madlib contents.
 */
function generateLib() {
    const resultDiv = document.getElementById("madlib-result");
    resultDiv.textContent = "";

    let currentParagraph = document.createElement("p");

    MAD_LIB.text.forEach(segment => {
        switch (segment.segmentType) {
            case "static":
                currentParagraph.textContent += segment.text;
                break;
            case "fillable":
                const input = document.getElementById(segment.id + "-input");
                currentParagraph.textContent += input.value;
                break;
            case "newline":
                resultDiv.appendChild(currentParagraph);
                currentParagraph = document.createElement("p");
                break;
        }
    });

    if (currentParagraph.textContent) {
        resultDiv.appendChild(currentParagraph);
    }
}

/**
 * Validates all inputs in the form according to their type requirements.
 * Sets appropriate error messages and styling for invalid inputs.
 * @returns {boolean} true if form is valid, false otherwise.
 */
function validate() {
    let isValid = true;
    // Iterate through each input field
    MAD_LIB.fillers.forEach(currLib => {
        // Get the input and error elements
        const inputElement = document.getElementById(`${currLib.id}-input`);
        const errorElement = document.getElementById(`${currLib.id}-error-text`);

        if (!inputElement || !errorElement) {
            console.error(`Missing elements for ${currLib.id}`);
            isValid = false;
            return;
        }

        // Get the input value
        const value = inputElement.value.trim();

        // Check if the input matches its type's regex pattern
        const isValidInput = REGEX[currLib.type].test(value);

        if (!isValidInput) {
            // Invalid input - show error
            inputElement.className = "form-control is-invalid";
            errorElement.textContent = ERROR_MESSAGES[currLib.type];
            isValid = false;
        } else {
            // Valid input - clear error
            inputElement.className = "form-control";
            errorElement.textContent = "";
        }
    });

    return isValid;
}

// Don't remove this! It runs the setup function on page load.
window.onload = setup;