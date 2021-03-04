import { UrlMatchPatternRegex } from '../constants';
import { ValidatedKeyValuePair } from './KeyValuePair';
import RegexValidator from './Validators/RegexValidator';

export default class UpdateUrl extends ValidatedKeyValuePair {
  private validator = new RegexValidator(UrlMatchPatternRegex);

  constructor(url: string) {
    super();
    super.setValue(url);
  }

  getKey() {
    return 'update_url';
  }

  protected getValidator(): RegexValidator {
    return this.validator;
  }
}
