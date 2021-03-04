import { ValidatedKeyValuePair } from './KeyValuePair';
import ExactMatchValidator from './Validators/ExactMatchValidator';

export class ExtensionTypes {
  public static types = {
    extension: 'extension',
    hostedApp: 'hosted_app',
    legacyPackagedApp: 'legacy_packaged_app',
    platformApp: 'platform_app',
    theme: 'theme',
    userScript: 'user_script',
  }
  static getList(): string[] {
    return Object.values(ExtensionTypes.types);
} 
}

export default class AllowedTypes extends ValidatedKeyValuePair {

  private validator = new ExactMatchValidator(ExtensionTypes.getList());

  getKey() {
    return 'allowed_types';
  }

  setValue(allowedTypes: string[]) {
    super.setValue(allowedTypes);
  }

  protected getValidator(): ExactMatchValidator {
    return this.validator;
  }
}
