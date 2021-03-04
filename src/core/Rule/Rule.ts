import { KeyValuePair } from '../KeyValuePair/KeyValuePair';

export default abstract class Rule {
  protected keyValuePairs: KeyValuePair[] = [];

  abstract canAddKeyValuePair(keyValuePair: KeyValuePair): boolean;
  abstract getScope(): string;

  addKeyValuePair(keyValuePair: KeyValuePair) {
    if (!this.canAddKeyValuePair(keyValuePair)) {
      throw new Error(
        `ValidatedRule: ${keyValuePair.getKey()} -> ${keyValuePair.getValue()} not supported in rule ${this.getScope()}`
      );
    }
    this.keyValuePairs.push(keyValuePair);
  }

  removeKey(keyToRemove: string) {
    this.keyValuePairs = this.keyValuePairs.filter(
      (pair) => pair.getKey() != keyToRemove
    );
  }

  replaceKeyValuePair(keyValuePair: KeyValuePair) {
    this.removeKey(keyValuePair.getKey());
    this.addKeyValuePair(keyValuePair);
  }

  getKeyValuePairs(): KeyValuePair[] {
    return this.keyValuePairs;
  }
}
