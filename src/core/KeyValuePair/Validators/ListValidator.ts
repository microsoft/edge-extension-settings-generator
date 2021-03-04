import Validator from './Validator';

export default class StringListValidator implements Validator {
  constructor(private allowedItems: string[]) {}

  validate(list: string[]): boolean {
    let invalidItemFound: boolean = false;
    list.forEach((item) => {
      if (!this.allowedItems.includes(item)) {
        invalidItemFound = true;
      }
    });
    return !invalidItemFound;
  }
}
