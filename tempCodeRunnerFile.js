
        return "You lose!" + computerSelection;
    }
    else return " WTF";



}
function play5Rounds()
{
    for(let i = 0; i < 5; i++)
    {
        const winner = playRound(playerSelection.toLowerCase(),computerSelection.toLowerCase());
        console.log(winner);
        console.log(counter);
        i++