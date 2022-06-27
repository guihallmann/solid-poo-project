import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType = 'mana';
  static instances = 0;

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    this.instances += 1;
    return this.instances;
  }
}

export default Mage;