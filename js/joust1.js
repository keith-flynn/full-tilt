"use-strict";

// Roll
function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
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

  const para = document.createElement("p");

  if (hit >= 4) {
    para.innerText = "Hit!";
    document.getElementById("main").appendChild(para);
    if (lanceBreak >= 4) {
      knight1.score++;
      para.innerText = "Broken lance!";
      document.getElementById("main").appendChild(para);
      if (wound >= 4) {
        knight2.wounds--;
        para.innerText = `${knight2.name} receives a wound!`;
        document.getElementById("main").appendChild(para);
        if (fall >= 4) {
          knight2.ahorse = false;
          para.innerText = `${knight2.name} is unhorsed!`;
          document.getElementById("main").appendChild(para);
        } else {
          para.innerText = `${knight2.name} fights to remain in their saddle.`;
          document.getElementById("main").appendChild(para);
        }
      } else {
        para.innerText = `${knight2.name}'s armor saves them from injury.`;
        document.getElementById("main").appendChild(para);
      }
    } else {
      para.innerText = "Glancing blow.";
      document.getElementById("main").appendChild(para);
    }
  } else {
    para.innerText = "Miss!";
    document.getElementById("main").appendChild(para);
  }
}

function onePass(knight1, knight2) {
  const para = document.createElement("p");
  const roundAnnounce = document.createElement("p");
  const turnAnnounce = document.createElement("p");

  roundAnnounce.innerText = `The herald cries, Round ${roundNumber}!`;
  document.getElementById("main").appendChild(roundAnnounce);

  turnAnnounce.innerText = `${knight1.name}'s turn:`;
  document.getElementById("main").appendChild(turnAnnounce);
  singleCombat(knight1, knight2);

  if (knight2.ahorse === false) {
    para.innerText = `${knight1.name} wins!`;
    document.getElementById("main").appendChild(para);
    knight1.isVictorious = true;
  } else if (knight2.wounds === 0) {
    para.innerText = `${knight2.name} is hurt and cannot continue. ${knight1.name} wins!`;
    document.getElementById("main").appendChild(para);
    knight1.isVictorious = true;
  } else {
    para.innerText = `${knight2.name}'s turn:`;
    document.getElementById("main").appendChild(para);
    singleCombat(knight2, knight1);
  }

  if (knight2.ahorse === false || knight2.wounds === 0) {
    return;
  } else if (knight1.ahorse === false) {
    para.innerText = `${knight2.name} wins!`;
    document.getElementById("main").appendChild(para);
    knight2.isVictorious = true;
  } else if (knight1.wounds === 0) {
    para.innerText = `${knight1.name} is hurt and cannot continue. ${knight2.name} wins!`;
    document.getElementById("main").appendChild(para);
    knight2.isVictorious = true;
  } else {
    roundNumber++;
  }

  const knight1Score = document.createElement("p");
  knight1Score.innerText = `${guyDeLafayette.name}, Score: ${guyDeLafayette.score}, Hits Remaining: ${guyDeLafayette.wounds}`;
  document.getElementById("main").appendChild(knight1Score);

  const knight2Score = document.createElement("p");
  knight2Score.innerText = `${blackKnight.name}, Score: ${blackKnight.score}, Hits Remaining: ${blackKnight.wounds}`;
  document.getElementById("main").appendChild(knight2Score);
  
}

function singleJoust(knight1, knight2) {
  const para = document.createElement("p");
  while (roundNumber <= 3) {
    if (!knight1.isVictorious && !knight2.isVictorious) {
      onePass(knight1, knight2);
    } else {
      return;
    }
  }


  while (!knight1.isVictorious && !knight2.isVictorious) {

    if (knight1.score > knight2.score) {
      para.innerText = `${knight1.name} wins the tilt with ${knight1.score} broken lance(s)!`;
      document.getElementById("main").appendChild(para);
      knight1.isVictorious = true;
    } else if (knight2.score > knight1.score) {
      para.innerText = `${knight2.name} wins the tilt with ${knight2.score} broken lance(s)!`;
      document.getElementById("main").appendChild(para);
      knight2.isVictorious = true;
    } else onePass(knight1, knight2);
  }
}

let roundNumber = 1;
let para = document.createElement("p");
let appendDOM = document.getElementById("main").appendChild(para);

let one = singleJoust(guyDeLafayette, blackKnight);

// Append to main in DOM
//const para = document.createElement("p");
//para.innerText = roll;
//document.getElementById("main").appendChild(para);
//let appendDOM = document.getElementById("main").appendChild(para);
