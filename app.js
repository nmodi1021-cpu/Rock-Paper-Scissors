let userScore = 0;
let comptScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const comptScorePara = document.querySelector("#compt-score");

const genComptChoice = () => {
    let options = ["Rock", "Paper", "Scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, comptChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${comptChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        comptScore++;
        comptScorePara.innerText = comptScore;
        msg.innerText = `You lose. ${comptChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    //generate computer choice
    const comptChoice = genComptChoice();

    if(userChoice == comptChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
           userWin = comptChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            userWin = comptChoice === "scissors" ? false : true;
        } else {
            comptChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, comptChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});