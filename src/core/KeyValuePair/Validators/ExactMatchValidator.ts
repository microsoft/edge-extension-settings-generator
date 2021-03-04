import Validator from './Validator';

export default class ExactMatchValidator implements Validator {
  constructor(private allowedItems: string[]) {}

  validate(value: any): boolean {
    if (Array.isArray(value)) {
      return this.validateList(value);
    } else if(typeof value === "string") {
      return this.validateSingleString(value);
    }
    return false;
  }

  validateList(list: string[]): boolean {
    let invalidItemFound: boolean = false;
    list.forEach((item) => {
      if (!this.allowedItems.includes(item)) {
        invalidItemFound = true;
      }
    });
    return !invalidItemFound;
  }

  validateSingleString(item: string): boolean {
    return this.allowedItems.includes(item);
  }
}
