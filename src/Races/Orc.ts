import Race from './Race';

class Orc extends Race {
  private _hp = 74;
  static instances = 0;

  get maxLifePoints(): number {
    return this._hp;
  }

  static createdRacesInstances(): number {
    this.instances += 1;
    return this.instances;
  }
}

export default Orc;