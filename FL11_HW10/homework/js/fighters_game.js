function Fighter(props) {
  const health = props.hp;
  let hp = health;
  let winCounter = 0;
  let lossCounter = 0;

  this.getName = function() {
    return props.name;
  }

  this.getDamage = function() {
    return props.damage;
  }

  this.getAgility = function() {
    return props.agility;
  }

  this.getHealth = function() {
    return hp;
  }

  this.attack = function(defender) {
    const maxAtackProbability = 100;
    let atackProbability = 1 - defender.getAgility() / maxAtackProbability;

    if (atackProbability >= Math.random()) {
      defender.dealDamage(this.getDamage());
      console.log(`${this.getName()} make ${this.getDamage()} damage to ${defender.getName()}`);
    } else {
      console.log(`${this.getName()} attack missed`);
    }
  }

  this.logCombatHistory = function() {
    console.log(`Name: ${this.getName()}, Wins: ${winCounter}, Losses: ${lossCounter}`);
  }

  this.heal = function(hpAmount) {
    hp + hpAmount > this.getHealth() ? hp = this.getHealth() : hp += hpAmount;
  }

  this.dealDamage = function(hpAmount) {
    hp - hpAmount < 0 ? hp = 0 : hp -= hpAmount;
  }

  this.addWin = function() {
    winCounter++;
  }

  this.addLoss = function() {
    lossCounter++;
  }
}

function battle(fighter1, fighter2) {
  
    while (fighter1.getHealth() > 0 || fighter2.getHealth() > 0) {
    fighter1.attack(fighter2);
    console.log(`${fighter1.getName()} attack ${fighter2.getName()}`);
    fighter2.attack(fighter1);
    console.log(`${fighter2.getName()} attack ${fighter1.getName()}`);
   }
  if (fighter1.getHealth() === 0) {
    console.log(`${fighter1.getName()} dead and can't fight`);
    fighter1.addLoss();
    fighter2.addWin();
  } else if (fighter2.getHealth() === 0) {
    console.log(`${fighter1.getName()} dead and can't fight`);
    fighter2.addLoss();
    fighter1.addWin();
  }
}