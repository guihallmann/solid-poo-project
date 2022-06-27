import Race from './Race';

class Elf extends Race {
  private _hp = 99;
  static instances = 0;

  get maxLifePoints(): number {
    return this._hp;
  }

  static createdRacesInstances(): number {
    this.instances += 1;
    return this.instances;
  }
}

export default Elf;