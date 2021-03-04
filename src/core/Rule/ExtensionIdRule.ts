import AllowedTypes from '../KeyValuePair/AllowedTypes';
import InstallSources from '../KeyValuePair/InstallSources';
import { KeyValuePair } from '../KeyValuePair/KeyValuePair';
import Rule from './Rule';

export class ExtensionIdRule extends Rule {
  constructor(private extensionId: string) {
    super();
    // TODO: add validation for extension id.
  }
  canAddKeyValuePair(keyValuePair: KeyValuePair): boolean {
    let key = keyValuePair.getKey();
    return key !== AllowedTypes.key && key !== InstallSources.key;
  }
  getScope(): string {
    return this.extensionId;
  }
}
