import Race from './Race';

class Halfling extends Race {
  public hp = 80;
  static instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.instances += 1;
  }

  get maxLifePoints(): number {
    return this.hp;
  }

  static createdRacesInstances(): number {
    return Halfling.instances;
  }
}

export default Halfling;