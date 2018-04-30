const readlineSync = require('readline-sync'); // meghívtuk a modult

var player1 = 'Szabina';
let inventory = {stone: 0, gold: 0, silver: 0, iron: 0, weapon: '', armor: ''};

const entry = (player) => {
  console.log('You are on the road for quite some time.\nYou are starting to feel the effects of loneliness on your mind, but you have to keep going.\nYou are at a crossroad.');
  var ways = ['right', 'left'];
  var way = readlineSync.keyInSelect(ways, 'What do you choose: right or left path? ');
  console.log('You are following the ' + ways[way] + ' path.');
  if (way === 0) {
    right(player);
  } else if (way === 1) {
    left(player);
  } else {
    end(player);
  }
};

// entry point of the game
entry(player1);

function right (player) {
  var minerals = ['stone', 'gold', 'silver', 'iron', 'return'];
  var mineral = readlineSync.keyInSelect(minerals, 'You are in a one-way cave. When you are done, you should return to the crossroads.\nWhat would you like to mine?');

  switch (mineral) {
    case 0:
      console.log('Congratulations! You mined 8 pieces of stone!');
      inventory.stone += 8;
      if (readlineSync.keyInYN('Would you like to mine more?')) {
        right(player);
      } else {
        entry(player);
      }
      break;
    case 1:
      console.log('Congratulations! You mined 1 pieces of gold!');
      inventory.gold += 1;
      if (readlineSync.keyInYN('Would you like to mine more?')) {
        right(player);
      } else {
        entry(player);
      }
      break;
    case 2:
      console.log('Congratulations! You mined 3 pieces of silver!');
      inventory.silver += 3;
      if (readlineSync.keyInYN('Would you like to mine more?')) {
        right(player);
      } else {
        entry(player);
      }
      break;
    case 3:
      console.log('Congratulations! You mined 6 pieces of iron!');
      inventory.iron += 6;
      if (readlineSync.keyInYN('Would you like to mine more?')) {
        right(player);
      } else {
        entry(player);
      }
      break;
    case 4:
      console.log('You will be returned to the crossroads');
      entry(player);
      break;
  }
}

function left (player) {
  console.log('You arrive at an inn.');
  var answers = ['Go in.', 'Continue your journey.'];
  var answer = readlineSync.keyInSelect(answers, 'What would you like to do?');
  if (answer === 0) {
    inn(player);
  } else if (answer === 1) {
    console.log('You continoue your journey to the unknown.');
    stageTwo(player);
  } else {
    forceSelect();
  }
}

function inn (player) {
  console.log('You step in a smoky, dirty inn. The ogre bartender spits on the pitcher and scrubs it "clean".');
  var drinks = ['goblin spirit', 'troll piss', 'cheap n nasty', 'honey beer', 'nothing'];
  var drink = readlineSync.keyInSelect(drinks, '- What da ye want? - he asks');
  switch (drink) {
    case 0:
      console.log('- Aaah, goblin spirit. For pussies.\nWhat does a folk like ya do deep down here behind Chaos ass?');
      break;
    case 1:
      console.log('Troooooolllpiiissss. You have a taste, buddy.\nWhat does a folk like ya do deep down here behind Chaos ass?');
      break;
    case 2:
      console.log('- Ya like it nasty, eh?\nWhat does a folk like ya do deep down here behind Chaos ass?');
      break;
    case 3:
      console.log('- What da ya think o me? I dont keep that fancy shit at me place!\nWhat does a folk like ya do deep down here behind Chaos ass?');
      break;
    case 4:
      console.log('- If ya dont have nothin, get the fck out o here!');
      left(player);
  }
}

function end() {
  console.log('You fell into the abyss and died. End of game.');
}

function forceSelect () {
  console.log('You have to choose something.');
  left();
}

function stageTwo () {
  console.log('You arrived at a crowwroads again.\nThe forward path goes into a forest, the other one runs parallel to the forest.');
  var forestPaths = ['Go into the forest.', 'Follow the path running by the forest'];
  var forestPath = readlineSync.keyInSelect(forestPaths, 'Which path do you choose?');
  switch (forestPath) {
    case 0:
      console.log('You slowly dive into the dark forest.');
      break;
    case 1:
      console.log('Yo decide you are not that brave. You stay on the verge of the forest.');
      break;
  }
}
