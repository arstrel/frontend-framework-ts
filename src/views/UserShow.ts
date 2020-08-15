import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserShow extends View<User, UserProps> {
  template = (): string => {
    return `
    <div>
      <div>User name: ${this.model.get('name')}</div>
      <div>User age: ${this.model.get('age')}</div>
    </div>
    `;
  };
}
