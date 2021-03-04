import { UrlMatchPatternRegex } from '../constants';
import { ValidatedKeyValuePair } from './KeyValuePair';
import RegexValidator from './Validators/RegexValidator';

export default class RuntimeBlockedHosts extends ValidatedKeyValuePair {
  private validator = new RegexValidator(UrlMatchPatternRegex);
  static key: string = 'runtime_blocked_hosts';  

  constructor(matchPatternList: string[]) {
    super();
    super.setValue(matchPatternList);
  }

  getKey() {
    return RuntimeBlockedHosts.key;
  }

  protected getValidator(): RegexValidator {
    return this.validator;
  }
}
