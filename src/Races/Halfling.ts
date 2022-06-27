import Race from './Race';

class Halfling extends Race {
  private _hp = 60;
  static instances = 0;

  get maxLifePoints(): number {
    return this._hp;
  }

  static createdRacesInstances(): number {
    this.instances += 1;
    return this.instances;
  }
}

export default Halfling;