import { ValidatedKeyValuePair } from './KeyValuePair';
import RegexValidator from './Validators/RegexValidator';

export default class MinVersion extends ValidatedKeyValuePair {
  private validator = new RegexValidator(/^[0-9]+([.][0-9]+)*$/);

  getKey() {
    return 'minimum_version_required';
  }

  setValue(version: string) {
    super.setValue(version);
  }

  protected getValidator(): RegexValidator {
    return this.validator;
  }
}
