import { ExtensionVersionRegex } from '../constants';
import { ValidatedKeyValuePair } from './KeyValuePair';
import RegexValidator from './Validators/RegexValidator';

export default class MinVersion extends ValidatedKeyValuePair {
  private validator = new RegexValidator(ExtensionVersionRegex);

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
