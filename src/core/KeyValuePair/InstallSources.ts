import { UrlMatchPatternRegex } from '../constants';
import { ValidatedKeyValuePair } from './KeyValuePair';
import RegexValidator from './Validators/RegexValidator';

export default class InstallSources extends ValidatedKeyValuePair {
  private validator = new RegexValidator(UrlMatchPatternRegex);
  static key: string = 'install_sources';  

  constructor(matchPatternList: string[]) {
    super();
    super.setValue(matchPatternList);
  }

  getKey() {
    return InstallSources.key;
  }

  protected getValidator(): RegexValidator {
    return this.validator;
  }
}
