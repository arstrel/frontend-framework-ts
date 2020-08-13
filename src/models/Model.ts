import { Callback } from './Eventing';
import { AxiosPromise, AxiosResponse } from 'axios';

export interface ModelAttributes<T> {
  set(update: T): void;
  get<K extends keyof T>(propName: K): T[K];
  getAll(): T;
}

export interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

export interface Events {
  on(eventName: string, callback: Callback): void;
  trigger(eventName: string): void;
}

interface HasId {
  id?: number;
}

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private sync: Sync<T>,
    private events: Events
  ) {}

  /* This syntax 
    "on = this.events.on"
    will break,  if we assign attributes, 
    sync or events inside the constructor, instead
    of using the shortened syntax as we are doing now.

    In this case we will need to change it to 
    "get on() {return this.events.on}"
  */
  on = this.events.on;
  get = this.attributes.get;
  trigger = this.events.trigger;

  set(update: T): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.attributes.get('id');
    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without an id');
    }
    this.sync.fetch(id).then((response: AxiosResponse): void => {
      this.set(response.data);
    });
  }

  save(): void {
    const userData = this.attributes.getAll();
    this.sync
      .save(userData)
      .then((response: AxiosResponse) => {
        this.trigger('save');
      })
      .catch(() => {
        this.trigger('error');
      });
  }
}
