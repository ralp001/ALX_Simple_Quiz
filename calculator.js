// Function for addition
function add(number1, number2) {
    return number1 + number2;
}

// Function for subtraction
function subtract(number1, number2) {
    return number1 - number2;
}

// Function for multiplication
function multiply(number1, number2) {
    return number1 * number2;
}

// Function for division
function divide(number1, number2) {
    // Handle division by zero
    if (number2 === 0) {
        return 'Cannot divide by zero';
    }
    return number1 / number2;
}

// Get the result display element
const resultElement = document.getElementById('calculation-result');

// Get the input elements
const number1Input = document.getElementById('number1');
const number2Input = document.getElementById('number2');

// Function to get and parse input values
function getNumbers() {
    const number1 = parseFloat(number1Input.value) || 0;
    const number2 = parseFloat(number2Input.value) || 0;
    return { number1, number2 };
}

// Attach event listener for the addition button
document.getElementById('add').addEventListener('click', function() {
    const { number1, number2 } = getNumbers();
    const result = add(number1, number2);
    resultElement.textContent = result;
});

// Attach event listener for the subtraction button
document.getElementById('subtract').addEventListener('click', function() {
    const { number1, number2 } = getNumbers();
    const result = subtract(number1, number2);
    resultElement.textContent = result;
});

// Attach event listener for the multiplication button
document.getElementById('multiply').addEventListener('click', function() {
    const { number1, number2 } = getNumbers();
    const result = multiply(number1, number2);
    resultElement.textContent = result;
});

// Attach event listener for the division button
document.getElementById('divide').addEventListener('click', function() {
    const { number1, number2 } = getNumbers();
    const result = divide(number1, number2);
    resultElement.textContent = result;
});