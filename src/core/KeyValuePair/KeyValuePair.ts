import Validator from './Validators/Validator';

export interface KeyValuePair {
  getKey(): string;
  getValue(): any;
  setValue(value: any): void;
}

export abstract class ValidatedKeyValuePair implements KeyValuePair {
  private value: any;

  abstract getKey();

  getValue(): any {
    return this.value;
  }

  setValue(value: any): void {
    if (!this.getValidator().validate(value)) {
      throw new Error('ValidatedKeyValuePair: value not allowed: ' + value);
    }
    this.value = value;
  }

  protected abstract getValidator(): Validator;
}
