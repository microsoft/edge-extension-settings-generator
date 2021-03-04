import { ValidatedKeyValuePair } from './KeyValuePair';
import SingleStringValidator from './Validators/SingleStringValidator';

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
  private validator = new SingleStringValidator(Modes.getList());

  getKey() {
    return 'installation_mode';
  }

  setValue(installationMode: string) {
    super.setValue(installationMode);
  }

  protected getValidator(): SingleStringValidator {
    return this.validator;
  }
}
