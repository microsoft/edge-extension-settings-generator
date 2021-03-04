import { ExtensionVersionRegex } from '../constants';
import { ValidatedKeyValuePair } from './KeyValuePair';
import RegexValidator from './Validators/RegexValidator';

export default class MinVersion extends ValidatedKeyValuePair {
  private validator = new RegexValidator(ExtensionVersionRegex);
  static key: string = 'minimum_version_required';  

  constructor(version: string) {
    super();
    super.setValue(version);
  }

  getKey() {
    return MinVersion.key;
  }

  protected getValidator(): RegexValidator {
    return this.validator;
  }
}
