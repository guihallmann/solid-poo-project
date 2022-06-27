import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType: EnergyType = 'stamina';
  static instances = 0;

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    this.instances += 1;
    return this.instances;
  }
}

export default Warrior;