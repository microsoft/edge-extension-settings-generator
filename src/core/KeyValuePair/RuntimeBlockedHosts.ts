import { UrlMatchPatternRegex } from '../constants';
import { ValidatedKeyValuePair } from './KeyValuePair';
import RegexValidator from './Validators/RegexValidator';

export default class RuntimeBlockedHosts extends ValidatedKeyValuePair {
  private validator = new RegexValidator(UrlMatchPatternRegex);

  constructor(matchPatternList: string[]) {
    super();
    super.setValue(matchPatternList);
  }

  getKey() {
    return 'runtime_blocked_hosts';
  }

  protected getValidator(): RegexValidator {
    return this.validator;
  }
}
