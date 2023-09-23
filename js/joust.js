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

`
1 hit/miss
2 break lance/not
3 wound/not
4 fall/not
`;

let hit = rollDie();
let lanceBreak = rollDie();
let wound = rollDie();
let fall = rollDie();
let round;

let knight1Score = 0;
let knight1Wounds = 2;
let knight2Score = 0;
let knight2Wounds = 2;

const guyDeLaFayette = {
  score: 0,
  wounds: 2,
  ahorse: true
}
const blackKnight = {
  score: 0,
  wounds: 2,
  ahorse: true
}

function singleJoust(knight1, knight2) {

  if (hit >= 4) {
    console.log("Hit!");
    if (lanceBreak >= 4) {
      knight1.score++;
      console.log("Broken lance!");
      if (wound >= 4) {
        knight2.wounds--;
        console.log("Knight 2 receives a wound!");
        if (fall >= 4) {
          knight2.ahorse = false;
          console.log("knight 2 unhorsed!");
        } else {
          console.log("Knight 2 fights to remain in his saddle.");
        }
      } else {
        console.log("Knight 2's armor saves him from injury.");
      }
    } else {
      console.log("Glancing blow.");
    }
  } else {
    console.log("Miss!");
  }
}

singleJoust(guyDeLaFayette, blackKnight);
console.log(guyDeLaFayette);
console.log(blackKnight);