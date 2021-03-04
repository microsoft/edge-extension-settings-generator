import AllowedTypes from '../KeyValuePair/AllowedTypes';
import BlockedPermissions from '../KeyValuePair/BlockedPermissions';
import InstallationMode, {
  Modes as InstallationModes,
} from '../KeyValuePair/InstallationMode';
import InstallSources from '../KeyValuePair/InstallSources';
import { KeyValuePair } from '../KeyValuePair/KeyValuePair';
import RuntimeAllowedHosts from '../KeyValuePair/RuntimeAllowedHosts';
import RuntimeBlockedHosts from '../KeyValuePair/RuntimeBlockedHosts';
import Rule from './Rule';

export class GlobalRule extends Rule {

  private static allowedKeys: string[] = [
    InstallationMode.key,
    BlockedPermissions.key,
    InstallSources.key,
    AllowedTypes.key,
    RuntimeBlockedHosts.key,
    RuntimeAllowedHosts.key,
  ];

  getScope(): string {
    return '*';
  }

  canAddKeyValuePair(keyValuePair: KeyValuePair): boolean {
    let key = keyValuePair.getKey();
    let value = keyValuePair.getValue();

    if (!GlobalRule.allowedKeys.includes(key)) {
      return false;
    }

    if (
      key === InstallationMode.key &&
      value !== InstallationModes.mode.blocked &&
      value !== InstallationModes.mode.allowed &&
      value !== InstallationModes.mode.removed
    ) {
      return false;
    }

    return true;
  }
}
