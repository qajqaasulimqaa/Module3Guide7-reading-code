// Here we have a function called 'add'. It takes two parameters: a and b
function add(a, b) {
    // This returns the sum of a and b
    return a + b;
}

// Here we create a variable called 'result' that stores the value returned by the function
let result = add(5, 10);

// Here we display "The result is: 15" by combining the string with the result variable
document.getElementById("result").innerHTML = "The result is: " + result;