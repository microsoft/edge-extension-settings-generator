import { ValidatedKeyValuePair } from './KeyValuePair';
import RegexValidator from './Validators/RegexValidator';

export default class MinVersion extends ValidatedKeyValuePair {
  private validator = new RegexValidator(/^[0-9]+([.][0-9]+)*$/);

  constructor(version: string) {
    super();
    super.setValue(version);
  }

  getKey() {
    return 'minimum_version_required';
  }

  protected getValidator(): RegexValidator {
    return this.validator;
  }
}
