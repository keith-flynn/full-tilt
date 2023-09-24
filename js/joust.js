"use-strict";

const knight1 = {
  m: 4,
  ws: 5,
  bs: 5,
  s: 4,
  t: 4,
  w: 2,
  i: 5,
  a: 3,
  ld: 8,
  save: "4+",
};

const knight2 = {
  movement: 4,
  weaponSkill: 5,
  ballisticSkill: 5,
  strength: 4,
  toughness: 4,
  wounds: 2,
  initiative: 5,
  attacks: 3,
  leadership: 8,
  armorSave: "4+",
};

// Roll
function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

let round = 1;

// Our knights: 
const guyDeLaFayette = {
  name: "Guy de LaFayette",
  score: 0,
  wounds: 2,
  ahorse: true
}
const blackKnight = {
  name: "The Black Knight",
  score: 0,
  wounds: 2,
  ahorse: true
}

function singleJoust(knight1, knight2) {
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
          console.log(`${knight2.name} unhorsed!`);
        } else {
          console.log(`${knight2.name} fights to remain in his saddle.`);
        }
      } else {
        console.log(`${knight2.name}'s armor saves him from injury.`);
      }
    } else {
      console.log("Glancing blow.");
    }
  } else {
    console.log("Miss!");
  }
}

function oneRound(knight1, knight2) {
  console.log(`${knight1.name}'s turn:`);
  singleJoust(knight1, knight2);
  console.log(`${knight2.name}'s turn:`);
  singleJoust(knight2, knight1);
  console.log(guyDeLaFayette);
  console.log(blackKnight);
  round++;
}

let one = oneRound(guyDeLaFayette, blackKnight);
console.log(one);
