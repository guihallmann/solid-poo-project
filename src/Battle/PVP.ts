import Battle from './Battle';
import Fighter from '../Fighter';

class PVP extends Battle {
  private _fighterOne: Fighter;
  private _fighterTwo: Fighter;

  constructor(fighterOne: Fighter, fighterTwo: Fighter) {
    super(fighterOne);
    this._fighterOne = fighterOne;
    this._fighterTwo = fighterTwo;
  }

  get fighterOne(): Fighter {
    return this._fighterOne;
  }

  get fighterTwo(): Fighter {
    return this._fighterTwo;
  }

  fight(): number {
    this._fighterOne.attack(this.fighterTwo);
    this._fighterTwo.attack(this.fighterOne);
    return super.fight();
  }
}

export default PVP;