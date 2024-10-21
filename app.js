// Get necessary elements
const goalInput = document.getElementById('goal');
const submitButton = document.getElementById('submit');
const goalList = document.querySelector('ul');

// Function to add a new goal
function addGoal() {
  const goalText = goalInput.value.trim();
  if (goalText !== '') {
    const newGoalItem = document.createElement('li');

    // Set the text for the new goal
    newGoalItem.textContent = goalText;

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';

    // Add event listener for the delete button
    deleteButton.onclick = function() {
      newGoalItem.classList.toggle('completed'); // Toggle the 'completed' class
    };

    // Append delete button to the goal item
    newGoalItem.appendChild(deleteButton);

    // Append the new goal item to the goal list
    goalList.appendChild(newGoalItem);
    goalInput.value = ''; // Clear the input field
  }
}

// Add event listener to the button
submitButton.addEventListener('click', addGoal);

// Add event listener for the Enter key in the input field
goalInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addGoal();
  }
});
