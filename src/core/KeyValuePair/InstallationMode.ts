import { ValidatedKeyValuePair } from './KeyValuePair';
import ExactMatchValidator from './Validators/ExactMatchValidator';

export class Modes {
  public static mode = {
    allowed: 'allowed',
    blocked: 'blocked',
    forceInstalled: 'force_installed',
    normalInstalled: 'normal_installed',
    removed: 'removed',
  };
  static getListForExtensionScope(): string[] {
    return Object.values(Modes.mode);
  }
  static getListForGlobalScope(): string[] {
    return [this.mode.allowed, this.mode.blocked, this.mode.removed];
  }
}

export default class InstallationMode extends ValidatedKeyValuePair {
  private validator = new ExactMatchValidator(Modes.getListForExtensionScope());
  static key: string = 'installation_mode';  

  constructor(installationMode: string) {
    super();
    super.setValue(installationMode);
  }

  getKey() {
    return InstallationMode.key;
  }

  protected getValidator(): ExactMatchValidator {
    return this.validator;
  }
}
