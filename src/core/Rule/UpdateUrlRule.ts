import BlockedPermissions from '../KeyValuePair/BlockedPermissions';
import InstallationMode, {
  Modes as InstallationModes,
} from '../KeyValuePair/InstallationMode';
import { KeyValuePair } from '../KeyValuePair/KeyValuePair';
import Rule from './Rule';

export class UpdateUrlRule extends Rule {
  private static allowedKeys: string[] = [
    InstallationMode.key,
    BlockedPermissions.key,
  ];

  constructor(private updateUrl: string) {
    super();
    // TODO: Add validation for updateUrl
  }

  canAddKeyValuePair(keyValuePair: KeyValuePair): boolean {
    let key = keyValuePair.getKey();

    if (!UpdateUrlRule.allowedKeys.includes(key)) {
      return false;
    }

    if (
      key === InstallationMode.key &&
      key !== InstallationModes.mode.blocked &&
      key !== InstallationModes.mode.allowed &&
      key !== InstallationModes.mode.removed
    ) {
      return false;
    }

    return true;
  }

  getScope(): string {
    return `update_url:${this.updateUrl}`;
  }
}
