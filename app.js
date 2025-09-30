let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScores = document.querySelector("#user-score");
const compScores = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randomId = Math.floor(Math.random() * 3);
    return options[randomId];
}

const drawGame = () =>{
    console.log("Game was Draw");
     msg.innerText = "Game was Draw. Play Again.";
     msg.style.backgroundColor = "brown"
}

const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userScores.innerText = userScore;
        console.log("You Win!");
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green";
       
    }else{
        compScore++;
        compScores.innerText = compScore;
        console.log("You Lose");
        msg.innerText = "You Lose";
        msg.style.backgroundColor = "red";
       
    }
}

const playGame = (userchoice) => {
     console.log("user choice = ", userchoice);
    //Genarate computer chice
    const CompChoice = genCompChoice();
    console.log("copm choice =",CompChoice);

    if(userchoice === CompChoice){
        //Draw Game
        drawGame();
    }else{
        let userWin = true;
        if(userchoice === "rock"){
            userWin = CompChoice === "paper" ? false : true;
        }else if(userchoice === "paper"){
            userWin = CompChoice === "rock" ? true : false;
        }else if(userchoice === "scissors"){
            userWin = CompChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }

}

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    })
})