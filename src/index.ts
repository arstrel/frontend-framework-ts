import { UserEdit } from './views/UserEdit';
import { User } from './models/User';
import { UserList } from './views/UserList';

const user = User.buildUser({ name: 'Tim', age: 25 });
const root = document.getElementById('root');
if (root) {
  const userEdit = new UserEdit(root, user);
  userEdit.render();
} else {
  throw new Error('Root element not found');
}

const userCollection = User.buildUserCollection();
const listContainer = document.getElementById('user-list-container');
userCollection.on('change', () => {
  if (listContainer) {
    const userList = new UserList(userCollection, listContainer);
    userList.render();
  }
});

userCollection.fetch();
