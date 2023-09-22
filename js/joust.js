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

if (hit >= 4) {
  if (lanceBreak >= 4) {
    if (wound >= 4) {
      if (fall >= 4) {
        //end round
      } else {
        return;
      }
    } else {
      return;
    }
  } else {
    return;
  }
} else {
  return;
}