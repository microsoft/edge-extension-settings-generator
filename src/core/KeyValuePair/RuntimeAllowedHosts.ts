import { UrlMatchPatternRegex } from '../constants';
import { ValidatedKeyValuePair } from './KeyValuePair';
import RegexValidator from './Validators/RegexValidator';

export default class RuntimeAllowedHosts extends ValidatedKeyValuePair {
  private validator = new RegexValidator(UrlMatchPatternRegex);

  constructor(matchPatternList: string[]) {
    super();
    super.setValue(matchPatternList);
  }

  getKey() {
    return 'runtime_allowed_hosts';
  }

  protected getValidator(): RegexValidator {
    return this.validator;
  }
}
