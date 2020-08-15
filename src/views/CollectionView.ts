import { Collection } from '../models/Collection';

// ex. T - instance of User (type of Model),
// K - UserProps (properties that T has)
export abstract class CollectionView<T, K> {
  constructor(
    public collection: Collection<T, K>,
    public parentElement: HTMLElement
  ) {}

  abstract renderItem(item: T, itemParent: HTMLElement): void;

  render(): void {
    this.parentElement.innerHTML = '';
    const templateElement = document.createElement('template');

    this.collection.models.forEach((item: T): void => {
      const wrapperElement = document.createElement('div');
      this.renderItem(item, wrapperElement);
      templateElement.content.append(wrapperElement);
    });

    this.parentElement.append(templateElement.content);
  }
}
