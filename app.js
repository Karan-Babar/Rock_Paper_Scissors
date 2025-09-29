let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    
}

const playGame = () => {
     console.log("user choice = ", userchoice);
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    })
})