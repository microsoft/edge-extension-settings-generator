import { UrlMatchPatternRegex } from '../constants';
import { ValidatedKeyValuePair } from './KeyValuePair';
import RegexValidator from './Validators/RegexValidator';

export default class InstallSources extends ValidatedKeyValuePair {
  private validator = new RegexValidator(UrlMatchPatternRegex);

  constructor(matchPatternList: string[]) {
    super();
    super.setValue(matchPatternList);
  }

  getKey() {
    return 'install_sources';
  }

  protected getValidator(): RegexValidator {
    return this.validator;
  }
}
