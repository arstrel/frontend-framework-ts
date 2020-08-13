import { Eventing } from './Eventing';
import axios, { AxiosResponse } from 'axios';

export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string, public deserealize: (json: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl).then((res: AxiosResponse) => {
      res.data.forEach((val: K) => {
        const itemFromDB = this.deserealize(val);
        this.models.push(itemFromDB);
      });
    });

    this.trigger('change');
  }
}
