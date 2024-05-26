document.addEventListener('DOMContentLoaded', () => {
    
    // Intro Text
    
    // Declare 3 constant variables for name, age and isStudent

    const introduction = (name, age, isStudent) => {
        // Declare variables
        const name = 'Your Name'; // Replace 'Your Name' with your actual name
        const age = 25; // Replace 25 with your actual age
        const isStudent = true; // Set to true or false based on your student status

        // TODO: Check if isStudent is true or false and set text output to a new variable called studentStatus
        // TODO: Using string concatenation, store a message to a new variable called message. The message
        // should should include your name, age, and a statement about whether you are a student or not. 
        // Example message format: "Hello, my name is John. I am 25 years old and I am currently a student."
    
        // The following code selects the messageDisplayArea ID in the HTML file and appends a paragraph 
        // tag with the message variable defined above. Do not edit this remaining code below in the function.
        const messageDisplayArea = document.getElementById('messageDisplayArea');
        const messageElement = document.createElement('p');
        messageElement.textContent = message;
        messageDisplayArea.appendChild(messageElement);
    };
    

    // Selectors
    document.querySelector("#add-classes").addEventListener('click', () => {
        document.querySelector('.selector-examples li:first-child').classList.add('first');
        document.querySelectorAll('.selector-examples li:nth-child(odd)').forEach(el => el.classList.add('odd'));
        // TODO: Add remaining selectors using nth-child, loops and conditional logic where approriate. (https://www.w3schools.com/CSSref/sel_nth-child.php) 
    });

    // Call the introduction function. Do not edit this line.
    introduction(name, age, isStudent);

    // Change Text
    document.querySelector("#change-language").addEventListener('click', () => {
        // TODO: Add code to change the text of the currentLanguage class to the value of the newLanguage ID:
        // - 1: Create a new variable called inputValue and set it to the value of the #newLanguage id
        // - 2: Create a new variable called element and set it to the .currentLanguage class
        // - 3: Using .innerHTML (https://www.w3schools.com/jsref/prop_html_innerhtml.asp), update element with inputValue
    });

    // Toggles Part 1: Modifying CSS attributes
    let boxColor = "rgb(153, 51, 51)";

    document.querySelector("#button_toggle_colors").addEventListener('click', () => {
        document.querySelectorAll(".box").forEach(box => {
            const currentColor = window.getComputedStyle(box).backgroundColor;
            if (currentColor === boxColor) {
                // TODO: element backgroundColor currently has boxColor set, change it to 'white'
            } else {
                // TODO: element backgroundColor currently does not have boxcolor set, set it to boxColor
            }
        });
    });

    // Toggles Part 2: Adding/Removing classes to manipulate shapes
    document.querySelector("#button_toggle_roundedges").addEventListener('click', () => {
        document.querySelectorAll(".box").forEach(box => {
            // TODO: Add a toggle to box.classList and toggle the CSS 'round-edge' class
        });
    });
});
