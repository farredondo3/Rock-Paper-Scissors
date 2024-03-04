function getComputerChoice()
{
    const choices = ['Rock','Paper','Scissors'];    
    const randomIndex = Math.floor(Math.random() * choices.length)

    return choices[randomIndex];

}
const computerSelection = getComputerChoice();
const playerSelection = "ROck";

function playRound(playerSelection, computerSelection)
{
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection == computerSelection)
    {
        return "A tie";
    }
    else if(playerSelection == "rock" && computerSelection == "paper")
    {
        return "You lose!";
    }
    else if(playerSelection == "paper" && computerSelection == "rock")
    {
        return "You win!";
    }
    else if(playerSelection == "scissor" && computerSelection == "paper")
    {
        return "You win!";
    }
    else if(playerSelection == "paper" && computerSelection == "scissors")
    {
        return "You lose!";
    }
    else if(playerSelection == "rock" && computerSelection == "scissors")
    {
        return "You win!";
    }
    else if(playerSelection == "scissors" && computerSelection == "rock")
    {
        return "You lose!";
    }
    else return " WTF" + playerSelection + " " + computerSelection;



}

function playGame()
{
    let counter = 0;
    let winCounter = 0;
    let loseCounter = 0;
    while(counter < 5)
    {
        const computerSelection = getComputerChoice();
        const gameResult = "";

        //console.log(playRound(playerSelection, computerSelection));
        const roundResult = playRound(playerSelection, computerSelection);
        if(roundResult == "You win!")
        {
            winCounter++;
        }
        else if(roundResult == "You lose!")
        {
            loseCounter++;
        }

        counter++;
    }
    if(winCounter > loseCounter)
    {
        return "You win!" + " Wins: " + winCounter + " Losses: " + loseCounter;
    }
    else if (winCounter < loseCounter)
    {
        return "You lost!" + " Wins: " + winCounter + " Losses: " + loseCounter;
    }
    else return "Tied!" + " Wins: " + winCounter + " Losses: " + loseCounter;

}

//console.log(playRound(playerSelection,computerSelection));

console.log(playGame())