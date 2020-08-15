import { CollectionView } from './CollectionView';
import { User, UserProps } from '../models/User';
import { UserShow } from './UserShow';

export class UserList extends CollectionView<User, UserProps> {
  template(item: User): string {
    return `
    <div>
      <h3>User: </h3>
      <p>Name: ${item.get('name')}</p>
      <p>Age: ${item.get('age')}</p>
    </div>
    `;
  }

  renderItem(item: User, itemParent: HTMLElement): void {
    new UserShow(itemParent, item).render();
  }
}
