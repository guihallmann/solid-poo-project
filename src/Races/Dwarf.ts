import Race from './Race';

class Dwarf extends Race {
  public hp = 80;
  static instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.instances += 1;
  }

  get maxLifePoints(): number {
    return this.hp;
  }

  static createdRacesInstances(): number {
    return Dwarf.instances;
  }
}

export default Dwarf;