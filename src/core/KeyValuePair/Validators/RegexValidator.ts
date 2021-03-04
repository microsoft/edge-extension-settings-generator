import Validator from './Validator';

export default class RegexValidator implements Validator {
  constructor(private regex: RegExp) {}

  validate(value: any): boolean {
    if (Array.isArray(value)) {
      return this.validateList(value);
    } else if (typeof value === 'string') {
      return this.validateSingleString(value);
    }
    return false;
  }

  validateList(list: string[]): boolean {
    let invalidItemFound: boolean = false;
    list.forEach((item) => {
      if (!this.regex.test(item)) {
        invalidItemFound = true;
      }
    });
    return !invalidItemFound;
  }

  validateSingleString(item: string): boolean {
    return this.regex.test(item);
  }
}
