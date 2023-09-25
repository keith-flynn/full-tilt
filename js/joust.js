"use-strict";

// Roll
function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

// Our knights: 
const guyDeLaFayette = {
  name: "Guy de LaFayette",
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
    console.log("Hit!");
    if (lanceBreak >= 4) {
      knight1.score++;
      console.log("Broken lance!");
      if (wound >= 4) {
        knight2.wounds--;
        console.log(`${knight2.name} receives a wound!`);
        if (fall >= 4) {
          knight2.ahorse = false;
          console.log(`${knight2.name} is unhorsed!`);
        } else {
          console.log(`${knight2.name} fights to remain in their saddle.`);
        }
      } else {
        console.log(`${knight2.name}'s armor saves them from injury.`);
      }
    } else {
      console.log("Glancing blow.");
    }
  } else {
    console.log("Miss!");
  }
}

function onePass(knight1, knight2) {
  console.log(`The herald cries, Round ${roundNumber}!`)

  console.log(`${knight1.name}'s turn:`);
  singleCombat(knight1, knight2);

  if (knight2.ahorse === false) {
    console.log(`${knight1.name} wins!`);
    knight1.isVictorious = true;
  } else if (knight2.wounds === 0) {
    console.log(`${knight2.name} is hurt and cannot continue. ${knight1.name} wins!`);
    knight1.isVictorious = true;
  } else {
    console.log(`${knight2.name}'s turn:`);
    singleCombat(knight2, knight1);
  }

  if (knight2.ahorse === false || knight2.wounds === 0) {
    return;
  } else if (knight1.ahorse === false) {
    console.log(`${knight2.name} wins!`);
    knight2.isVictorious = true;
  } else if (knight1.wounds === 0) {
    console.log(`${knight1.name} is hurt and cannot continue. ${knight2.name} wins!`);
    knight2.isVictorious = true;
  } else {
    roundNumber++;
  }

  console.log(guyDeLaFayette);
  console.log(blackKnight);
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

    if (!knight1.isVictorious && !knight2.isVictorious && knight1.score > knight2.score) {
      console.log(`${knight1.name} wins the tilt with ${knight1.score} broken lance(s)!`);
      knight1.isVictorious = true;
    } else if (!knight1.isVictorious && !knight2.isVictorious && knight2.score > knight1.score) {
      console.log(`${knight2.name} wins the tilt with ${knight2.score} broken lance(s)!`);
      knight2.isVictorious = true;
    } else onePass(knight1, knight2);
  }
}

let roundNumber = 1;

let one = singleJoust(guyDeLaFayette, blackKnight);
