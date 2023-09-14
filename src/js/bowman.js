import Character from './character.js';

class Bowman extends Character {
  constructor(name, type) {
    super(name, type);
    //this.setValue();
    this.attack = 25;
    this.defence = 25;
  }
}

export default Bowman;