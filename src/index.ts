import { User } from './models/User';

const user = new User({ id: 4, name: 'Artemius', age: 13 });

user.on('save', () => {
  console.log(user);
});

user.save();
