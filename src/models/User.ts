import { Eventing, Callback } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  public attributes: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }

  get<K extends keyof UserProps>(propName: K): UserProps[K] {
    return this.attributes.get(propName);
  }
  set(value: UserProps): void {
    this.attributes.set(value);
  }
  on(eventName: string, callback: Callback): void {
    this.events.on(eventName, callback);
  }
  trigger(eventName: string): void {
    this.events.trigger(eventName);
  }
  fetch() {}
  save() {}
}
