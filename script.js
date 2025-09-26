/* Task 1 - Complete the function according to the TODO */
function addComment(username, comment, addToStart) {
  const combinedComment = `${username}: ${comment}`;

  if (addToStart) {
    comments.unshift(combinedComment);
  } else {
    comments.push(combinedComment);
  }
}

/* Task 2 - Create your showWinnerMessage below according to the TODO */
function showWinnerMessage(message) {
  const winnerDisplay = document.getElementById("winner-display");
  winnerDisplay.innerHTML = message;
}

/* Task 3 - Create your pickWinner below according to the TODO */
function pickWinner() {
  const randomIndex = Math.floor(Math.random() * comments.length);
  const winningEntry = comments[randomIndex];
  showRandomEmoji();
  const winnerMessage = `Winner: <strong class="text-success">${winningEntry}</strong>`;
  showWinnerMessage(winnerMessage);
}

/* Task 4 - Complete the function according to the TODO */
function showRandomEmoji() {
  const emojiDisplay = document.getElementById("winner-emoji");
  const randomIndex = Math.floor(Math.random() * emojis.length);
  const randomEmoji = emojis[randomIndex];
  emojiDisplay.innerHTML = randomEmoji;
}

/* Task 5 - Complete the function according to the TODO */
function reverseOrder() {
  comments.reverse();
}

/* Task 6 - Complete the function according to the TODO */
function removeComment(index) {
  if (index >= 0 && index < comments.length) {
    comments.splice(index, 1);
  }
}

/* Task 7 - Complete the function according to the TODO */
function filterEmojiComments() {
  
}

/* Level Ups */

/* Level Up - Task 8 - Complete the filterList function according to the TODO */
function filterList(searchTerm, searchUsers) {}

/* Level Up - Task 9 - Compelte the task according to the TODO */

/* Level Up - Task 10 - Add to the `addComment` function so that the an `@` sign is added to the username if there is not already one before it gets pushed into the array.  */
