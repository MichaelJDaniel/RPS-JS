var result = ["Winner!", "Loser!", "It's a Tie!"];
var choices = ["Rock", "Paper", "Scissors"]

function start(userinput) {
  ibmchoice = choices[Math.floor(Math.random()*choices.length)];
  document.getElementById("playerchoice").innerHTML = "You Select " + userinput;
  document.getElementById("ibmchoice").innerHTML = "IBM Watson Selects " + ibmchoice;
  playerchoice = userinput;
  if (playerchoice == ibmchoice) {
    document.getElementById("result").innerHTML = result[2];
  }
  else if (playerchoice == "Rock" && ibmchoice == "Scissors") { 
    document.getElementById("result").innerHTML = result[0];
  }

  else if (playerchoice == "Scissors" && ibmchoice == "Paper") { 
    document.getElementById("result").innerHTML = result[0];
  }
  else if (playerchoice == "Paper" && ibmchoice == "Rock") { 
    document.getElementById("result").innerHTML = result[0];
  }
  else { 
    document.getElementById("result").innerHTML = result[1];
  }
}

