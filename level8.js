// The name of the function is 'greet', and it takes a parameter called 'name'
function greet(name) {
    // Inside the function: it finds the HTML element with id="message"
    // and sets its content to "Hello, " followed by the value of 'name'
    document.getElementById("message").innerHTML = "Hello, " + name;
}

// Here the function 'greet' is called with the value "John"
greet("John");