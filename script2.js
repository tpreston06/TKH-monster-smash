// //global variables, can be accessed by all functions

//   //declare a variable named playerName that stores the value the player enters from a prompt

//   //declare a variable named playerHealth and set it equal to the number value 15
// let playerHealth = 15;
//   //assign a name of a monster (ex 'Werewolf') as a string to a variable named monsterName
// const monsterName = 'Beast Titan'
//   //declare a variable named monsterHealth and set it equal to the number value 15
// let monsterHealth = 15;
// //random integer function 
// //see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

// function playerAttack(){
// //use randomNum to generate attack points value between 1 - 5 and save the value to a variable named playerAttackPoints

// //subtract playerAttackPoints from monsterHealth and update the monsterHealth variable

//   //use an alert with string template literals to tell the player: 
//   // 1. player attacked monster 
//   // 2. how much damage the player did 
//   // 3. how much health the monster has 
//   let playerAttackPoints = randomNum(1, 6);
//   monsterHealth = monsterHealth - playerAttackPoints;
//   alert(`${playerName} attacked ${monsterName}! ${monsterName} receiced ${playerAttackPoints} damage points. ${monsterName} has ${monsterHealth} Health points remaining.`);
// }

// function monsterAttack(){
//   //use randomNum to generate attack points value between 1 - 5 and save the value to a variable named monsterAttackPoints

//   //subtract monsterAttackPoints from playerHealth and update the playerHealth variable 

//   //use an alert with string template literals to tell the player: 
//   // 1. monster attacked player 
//   // 2. how much damage the monster did 
//   // 3. how much health the player has 
//   let monsterAttackPoints = randomNum(1, 5);
//   playerHealth = playerHealth - monsterAttackPoints;
//   alert(`${monsterName} attacked ${playerName}! ${playerName} received ${monsterAttackPoints} damage points. ${playerName} has ${playerHealth} Health points remaining.`);
// }



const playerName = prompt('Enter name: ');
alert("Prepare for Battle " + playerName)

class Fighter{
    constructor(name, healthPoints){
        this.name = name;
        this.healthPoints = healthPoints;
    }
    attack(Fighter){
        let attackPoints = randomNum(1, 6)
        Fighter.healthPoints = Fighter.healthPoints - attackPoints;
        alert(`${this.name} attacked ${Fighter.name} with ${Fighter.attackStyle}! ${Fighter.name} receiced ${attackPoints} damage points from ${Fighter.attackStyle}. ${Fighter.name} has ${Fighter.healthPoints} Health points remaining.`);
    }
}

class Hero extends Fighter{
    constructor(name, healthPoints, attackStyle){
        super(name, healthPoints);
        this.attackStyle = attackStyle;
    }
}
theHero = new Hero(playerName, 15, "Rock Throw");

class Monster extends Fighter{
    constructor(name, healthPoints, attackStyle){
        super(name, healthPoints);
        this.attackStyle = attackStyle;
    }
}
theMonster = new Monster("Beast Titan", 15, "Slash Neck");

function randomNum(min, max) {
    //return a random integer between min - max
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
  }
  
function playRound() {
  //use randomNum to return either 0 or 1
  randomNum(0, 2)
  //0 = player goes first, 1 = monster goes first
  if(randomNum == 0){
    theHero.attack(theMonster);
    if(theMonster.healthPoints > 0){
      theMonster.attack(theHero);
    }
  }
  else{
    theMonster.attack(theHero);
    if(theHero.healthPoints > 0){
      theHero.attack(theMonster);
    }
  }
//   //use if/else to determine who goes first
  
//   //if player goes first, run playerAttack, then if monsterHealth > 0, run monsterAttack

//   //if monster goes first, run monsterAttack, then if playerHealth > 0, run playerAttack 
}

function playGame() {
  //beginning game message
  alert(`Hello, ${theHero.name}! You are fighting ${theMonster.name}! \n Your health is at ${theHero.healthPoints}, ${theMonster.name}'s health is at ${theMonster.healthPoints}`);

 let roundNumber = 0

  //while loop that runs until player or monster's health is <= 0 
  //add the condition in the while loop parentheses 
  while(theHero.healthPoints >= 0 && theMonster.healthPoints >= 0){
    roundNumber++
   //write an alert statement that tells the player what round number it is, and the player's and monster's current health points
    alert(`Current Round #${roundNumber}. \n ${theHero.name} remaining Health ${theHero.healthPoints} points. \n ${theMonster.name} remaining Health ${theMonster.healthPoints} points.`)
   //call playRound inside the while loop
    playRound()
  }
  //outside of while loop, declare a winner and use alert to show a win or lose message 
  if(theHero.healthPoints > theMonster.healthPoints){
    alert(`${theHero.name} you have won this battle!`);
  }
  else {
    alert(`${theMonster.name} has defeated ${theHero.name}`);
  }
}

//call playGame to start game
playGame();