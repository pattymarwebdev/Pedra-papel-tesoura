const choices = ["pedra", "papel", "tesoura"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "Empate!";
  } else if (
    (userChoice === "pedra" && computerChoice === "tesoura") ||
    (userChoice === "papel" && computerChoice === "pedra") ||
    (userChoice === "tesoura" && computerChoice === "papel")
  ) {
    return "Você venceu!";
  } else {
    return "A máquina venceu!";
  }
}

const choiceButtons = document.querySelectorAll(".choice");
const resultDiv = document.getElementById("result");

const scores = {
  pedra: 0,
  papel: 0,
  tesoura: 0
};

choiceButtons.forEach(button => {
  button.addEventListener("click", function () {
    const userChoice = button.id;
    const computerChoice = getComputerChoice();
    const winner = determineWinner(userChoice, computerChoice);

    if (winner === "Você venceu!") {
      scores[userChoice]++;
    } else if (winner === "A máquina venceu!") {
      scores[computerChoice]++;
    }

    updateScores();
    
    resultDiv.textContent = `Você escolheu ${userChoice}. A máquina escolheu ${computerChoice}. ${winner}`;
  });
});

function updateScores() {
  for (const choice in scores) {
    const scoreElement = document.getElementById(`${choice}-score`);
    scoreElement.textContent = scores[choice];
  }
}
