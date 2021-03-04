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
  static getList(): string[] {
    return Object.values(Modes.mode);
  }
}

export default class InstallationMode extends ValidatedKeyValuePair {
  private validator = new ExactMatchValidator(Modes.getList());

  constructor(installationMode: string) {
    super();
    super.setValue(installationMode);
  }

  getKey() {
    return 'installation_mode';
  }

  protected getValidator(): ExactMatchValidator {
    return this.validator;
  }
}