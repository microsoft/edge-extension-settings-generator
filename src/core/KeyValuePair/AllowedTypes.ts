import { ValidatedKeyValuePair } from './KeyValuePair';
import StringListValidator from './Validators/ListValidator';

export default class AllowedTypes extends ValidatedKeyValuePair {
  public static extension = 'extension';
  public static hostedApp = 'hosted_app';
  public static legacyPackagedApp = 'legacy_packaged_app';
  public static platformApp = 'platform_app';
  public static theme = 'theme';
  public static userScript = 'user_script';

  allowedValues = [
    AllowedTypes.extension,
    AllowedTypes.hostedApp,
    AllowedTypes.legacyPackagedApp,
    AllowedTypes.platformApp,
    AllowedTypes.theme,
    AllowedTypes.userScript,
  ];

  private validator = new StringListValidator(this.allowedValues);

  getKey() {
    return 'allowed_types';
  }

  setValue(allowedTypes: string[]) {
    super.setValue(allowedTypes);
  }

  protected getValidator(): StringListValidator {
    return this.validator;
  }
}
