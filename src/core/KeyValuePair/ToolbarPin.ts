import { ValidatedKeyValuePair } from './KeyValuePair';
import SingleStringValidator from './Validators/SingleStringValidator';

export class PinningMode {
  public static mode = {
    forcePinned: 'force_pinned',
    defaultUnpinned: 'default_unpinned',
  };
  static getList(): string[] {
    return Object.values(PinningMode.mode);
  }
}

export default class ToolbarPin extends ValidatedKeyValuePair {
  private validator = new SingleStringValidator(PinningMode.getList());

  getKey() {
    return 'toolbar_pin';
  }

  setValue(pinMode: string) {
    super.setValue(pinMode);
  }

  protected getValidator(): SingleStringValidator {
    return this.validator;
  }
}
