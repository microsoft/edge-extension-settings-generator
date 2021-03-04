import { UrlRegex } from '../constants';
import { ValidatedKeyValuePair } from './KeyValuePair';
import RegexValidator from './Validators/RegexValidator';

export default class UpdateUrl extends ValidatedKeyValuePair {
  private validator = new RegexValidator(UrlRegex);
  static key: string = 'update_url';  

  constructor(url: string) {
    super();
    super.setValue(url);
  }

  getKey() {
    return UpdateUrl.key;
  }

  protected getValidator(): RegexValidator {
    return this.validator;
  }
}
