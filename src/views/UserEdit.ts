import { User, UserProps } from '../models/User';
import { UserForm } from './UserForm';
import { UserShow } from './UserShow';
import { View } from './View';

export class UserEdit extends View<User, UserProps> {
  template(): string {
    return `
      <div>
        <div id="user-show"></div>
        <div id="user-form"></div>
      </div>
    `;
  }

  regionsMap(): { [key: string]: string } {
    return {
      userShow: '#user-show',
      userForm: '#user-form',
    };
  }

  onRender(): void {
    // Location to define view nesting
    const userShow = new UserShow(this.regions.userShow, this.model);
    userShow.render();

    const userForm = new UserForm(this.regions.userForm, this.model);
    userForm.render();
  }
}
