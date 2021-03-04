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

  constructor(pinMode: string) {
    super();
    super.setValue(pinMode);
  }
  getKey() {
    return 'toolbar_pin';
  }

  protected getValidator(): ExactMatchValidator {
    return this.validator;
  }
}
