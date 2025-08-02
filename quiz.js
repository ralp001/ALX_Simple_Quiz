// Define the function to check the user's answer
function checkAnswer() {
    // Identify the correct answer
    const correctAnswer = "4";

    // Retrieve the user’s answer
    const selectedInput = document.querySelector('input[name="quiz"]:checked');

    // Check if an answer was selected
    if (selectedInput) {
        const userAnswer = selectedInput.value;

        // Get the feedback element
        const feedbackElement = document.getElementById('feedback');

        // Compare the user's answer with the correct answer
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
        }
    } else {
        // Handle case where no answer is selected
        document.getElementById('feedback').textContent = "Please select an answer.";
    }
}

// Add an event listener to the "Submit Answer" button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);