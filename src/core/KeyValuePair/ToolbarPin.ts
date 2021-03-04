import { ValidatedKeyValuePair } from './KeyValuePair';
import ExactMatchValidator from './Validators/ExactMatchValidator';

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
  private validator = new ExactMatchValidator(PinningMode.getList());

  getKey() {
    return 'toolbar_pin';
  }

  setValue(pinMode: string) {
    super.setValue(pinMode);
  }

  protected getValidator(): ExactMatchValidator {
    return this.validator;
  }
}
