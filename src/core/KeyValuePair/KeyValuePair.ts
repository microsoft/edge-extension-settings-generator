export interface KeyValuePair {
  getKey(): string;
  getValue(): any;
  setValue(value: any): void;
}

export abstract class StringStringPair implements KeyValuePair {
  private value: string;
  protected allowedValues: string[] = [];

  abstract getKey();

  getValue(): any {
    return this.value;
  }

  setValue(value: string): void {
    if (this.allowedValues.length > 0 && !this.allowedValues.includes(value)) {
      throw new Error('StringStringPair: value not allowed: ' + value);
    }
    this.value = value;
  }
}
