import Validator from './Validator';

export default class SingleStringValidator implements Validator {
  constructor(private allowedItems: string[]) {}

  validate(item: string): boolean {
    return this.allowedItems.includes(item);
  }
}
