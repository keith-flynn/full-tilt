"use-strict";

// Roll
function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

// How I'm appending former console.log() to the DOM:
function displayMessage(message) {
  const para = document.createElement("p");
  para.innerText = message;
  document.getElementById("main").appendChild(para);
}

// Our knights: 
const guyDeLafayette = {
  name: "Guy de Lafayette",
  score: 0,
  wounds: 2,
  ahorse: true,
  isVictorious: false
}
const blackKnight = {
  name: "The Black Knight",
  score: 0,
  wounds: 2,
  ahorse: true,
  isVictorious: false
}

function singleCombat(knight1, knight2) {
  let hit = rollDie();
  let lanceBreak = rollDie();
  let wound = rollDie();
  let fall = rollDie();

  if (hit >= 4) {
    displayMessage(`Hit! (${hit})`);
    if (lanceBreak >= 4) {
      knight1.score++;
      displayMessage(`Broken lance! (${lanceBreak})`);
      if (wound >= 4) {
        knight2.wounds--;
        displayMessage(`${knight2.name} receives a wound! (${wound})`);
        if (fall >= 4) {
          knight2.ahorse = false;
          displayMessage(`${knight2.name} is unhorsed! (${fall})`);
        } else {
          displayMessage(`${knight2.name} fights to remain in their saddle. (${fall})`);
        }
      } else {
        displayMessage(`${knight2.name}'s armor saves them from injury. (${wound})`);
      }
    } else {
      displayMessage(`Glancing blow. (${lanceBreak})`);
    }
  } else {
    displayMessage(`Miss! (${hit})`);
  }
}

function onePass(knight1, knight2) {
  displayMessage(`The herald cries, Round ${roundNumber}!`)

  displayMessage(`${knight1.name}'s turn:`);
  singleCombat(knight1, knight2);

  if (knight2.ahorse === false) {
    displayMessage(`${knight1.name} wins!`);
    knight1.isVictorious = true;
  } else if (knight2.wounds === 0) {
    displayMessage(`${knight2.name} is hurt and cannot continue. ${knight1.name} wins!`);
    knight1.isVictorious = true;
  } else {
    displayMessage(`${knight2.name}'s turn:`);
    singleCombat(knight2, knight1);
  }

  if (knight2.ahorse === false || knight2.wounds === 0) {
    return;
  } else if (knight1.ahorse === false) {
    displayMessage(`${knight2.name} wins!`);
    knight2.isVictorious = true;
  } else if (knight1.wounds === 0) {
    displayMessage(`${knight1.name} is hurt and cannot continue. ${knight2.name} wins!`);
    knight2.isVictorious = true;
  } else {
    roundNumber++;
  }


  displayMessage(`${guyDeLafayette.name}, Score: ${guyDeLafayette.score}, Hits Remaining: ${guyDeLafayette.wounds}`);
  displayMessage(`${blackKnight.name}, Score: ${blackKnight.score}, Hits Remaining: ${blackKnight.wounds}`);
}

function singleJoust(knight1, knight2) {
  while (roundNumber <= 3) {
    if (!knight1.isVictorious && !knight2.isVictorious) {
      onePass(knight1, knight2);
    } else {
      return;
    }
  }


  while (!knight1.isVictorious && !knight2.isVictorious) {

    if (knight1.score > knight2.score) {
      const lancePlural = knight1.score === 1 ? "lance" : "lances";
      displayMessage(`${knight1.name} wins the tilt with ${knight1.score} broken ${lancePlural}!`);
      knight1.isVictorious = true;
    } else if (knight2.score > knight1.score) {
      const lancePlural = knight2.score === 1 ? "lance" : "lances";
      displayMessage(`${knight2.name} wins the tilt with ${knight2.score} broken ${lancePlural}!`);
      knight2.isVictorious = true;
    } else onePass(knight1, knight2);
  }
}

let roundNumber = 1;

let one = singleJoust(guyDeLafayette, blackKnight);
