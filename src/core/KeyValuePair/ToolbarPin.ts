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
  static key: string = 'toolbar_pin';  

  constructor(pinMode: string) {
    super();
    super.setValue(pinMode);
  }
  getKey() {
    return ToolbarPin.key;
  }

  protected getValidator(): ExactMatchValidator {
    return this.validator;
  }
}
