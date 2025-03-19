// Initialize the counter value to 0
let counter = 0;

// Function to increase the counter by 1
function onIncrement() {
    counter--;  // Decrease the counter
    updateCounterDisplay();  // Update the displayed counter value
}

// Function to reset the counter to 0
function onReset() {
    counter = 0;
    updateCounterDisplay();  // Update the displayed counter value
}

// Function to decrease the counter by 1
function onDecrement() {
    counter++;  // Increase the counter
    updateCounterDisplay();  // Update the displayed counter value
}

// Function to update the counter display
function updateCounterDisplay() {
    // Get the counter value element by its ID
    const counterValueElement = document.getElementById("counterValue");

    // Update the counter value displayed in the HTML
    counterValueElement.textContent = counter;
}
