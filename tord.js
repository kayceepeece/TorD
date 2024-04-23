const playerInput = document.getElementById("playerInput");
const addPlayerBtn = document.getElementById("addPlayerBtn");
const playerList = document.getElementById("playerList");
const truthBtn = document.getElementById("truthBtn");
const dareBtn = document.getElementById("dareBtn");
const message = document.getElementById("message");

let players = [];
let currentPlayerIndex = 0;
let questions = [];

addPlayerBtn.addEventListener("click", addPlayer);
truthBtn.addEventListener("click", showTruth);
dareBtn.addEventListener("click", showDare);

// Fetch questions from the JSON file
fetch('questions.json')
  .then(response => response.json())
  .then(data => {
    questions = data;
  })
  .catch(error => {
    console.error('Error loading questions:', error);
  });

function addPlayer() {
  const playerName = playerInput.value.trim();
  if (playerName !== "" && players.length < 10) {
    players.push(playerName);
    const listItem = document.createElement("li");
    listItem.textContent = playerName;
    playerList.appendChild(listItem);
    playerInput.value = "";
  }
}

function showTruth() {
  if (players.length === 0) {
    message.textContent = "Please add at least one player to start the game.";
  } else {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const currentPlayer = players[currentPlayerIndex];
    const currentQuestion = questions[randomIndex].question;
    message.textContent = `${currentPlayer}, ${currentQuestion}`;
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
  }
}

function showDare() {
  if (players.length === 0) {
    message.textContent = "Please add at least one player to start the game.";
  } else {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const currentPlayer = players[currentPlayerIndex];
    const currentQuestion = questions[randomIndex].question;
    message.textContent = `${currentPlayer}, ${currentQuestion}`;
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
  }
}
