import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
  template = (): string => {
    return `
    <div>
     
      <input type="text" id="name-input" placeholder="${this.model.get(
        'name'
      )}"/>
      <button id="set-name">Change Name</button>
      <button id="set-age">Set Random age</button>
      <button id="user-save">Save User</button>

    </div>
    `;
  };

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:#set-age': this.onSetAgeClick,
      'click:#set-name': this.onSetNameClick,
      'click:#user-save': this.OnUserSaveClick,
    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  OnUserSaveClick = (): void => {
    this.model.save();
  };

  onSetNameClick = (): void => {
    const input = document.getElementById('name-input') as HTMLInputElement;
    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };
}
