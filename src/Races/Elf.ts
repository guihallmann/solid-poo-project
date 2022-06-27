import Race from './Race';

class Elf extends Race {
  public hp = 99;
  static instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.instances += 1;
  }

  get maxLifePoints(): number {
    return this.hp;
  }

  static createdRacesInstances(): number {
    return Elf.instances;
  }
}

export default Elf;