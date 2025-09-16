// The variable 'numbers' holds an array of numbers from 1 to 5
let numbers = [1, 2, 3, 4, 5];

// The variable 'listHTML' holds an empty string
let listHTML = "";

// A for loop starts with i = 0, and increases i by 1 until it reaches numbers.length
for (let i = 0; i < numbers.length; i++) {
    // On each loop, add a new <li> string that shows the index and the number at that index
    listHTML += "<li>Number at index " + i + " is " + numbers[i] + "</li>";
}

// Finally, we set the HTML element with id="numberList" 
// to display the string built in 'listHTML'
document.getElementById("numberList").innerHTML = listHTML;