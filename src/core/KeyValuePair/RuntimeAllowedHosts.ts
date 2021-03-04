import { UrlMatchPatternRegex } from '../constants';
import { ValidatedKeyValuePair } from './KeyValuePair';
import RegexValidator from './Validators/RegexValidator';

export default class RuntimeAllowedHosts extends ValidatedKeyValuePair {
  private validator = new RegexValidator(UrlMatchPatternRegex);
  static key: string = 'runtime_allowed_hosts';  

  constructor(matchPatternList: string[]) {
    super();
    super.setValue(matchPatternList);
  }

  getKey() {
    return RuntimeAllowedHosts.key;
  }

  protected getValidator(): RegexValidator {
    return this.validator;
  }
}
