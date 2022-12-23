var options = ["R", "P", "S"]
var wins = 0;
var ties = 0;
var losses = 0;

function play() {
    var select = prompt("Choose between R (rock), P (paper) or S (scissors)!", "");
    if(select == "R" || select == "P" || select == "S" || select == "r" || select == "p" || select == "s") {
        var userChoise = select.toUpperCase();
        var computersChoice = options[Math.floor(Math.random() * 3)];
        compare(userChoise, computersChoice);
        alert("Your score is:\nWins: " + wins + "\nTies: " + ties + "\nLosses: " + losses)
        if (confirm("Do you want to play again?")){
            play();
        }
        alert("Thanks for playing!")
        return;
    } else {
        alert("Please enter either R, P or S");
        return play();
    }
}

play()

function compare(player1, player2) {
    if((player1 == "R" && player2 == "S") || (player1 == "S" && player2 == "P") || (player1 == "P" && player2 == "R")) {
        alert("Computer chose " + player2 + " You won!");
        wins++;
        return;
    } else if(player1 == player2) {
        alert("Computer also chose " + player2 + " It's a tie!");
        ties++;
        return;
    } else {
        alert("Computer chose " + player2 +  " You lost...");
        losses++;
        return;
    } 
}
