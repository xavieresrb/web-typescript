import { User } from './models/User';

const user = new User({ name: 'new record', age: 22 });

// user.set({ name: 'NEW NAME', age: 9999 });

user.save();

// user.fetch();

/* import axios from 'axios';

axios.post('http://localhost:3000/users', {
  name: 'myname',
  age: 20,
}); 

axios.get('http://localhost:3000/users/1'); */

/* import { User } from './models/User';

const user = new User({ name: 'myname', age: 20 });

user.set({ name: 'newName', age: 9999 });

user.set({ name: 'newName2' });

user.on('change', () => {
  console.log('change', user);
});

user.on('change', () => {
  console.log('change2', user);
});

user.on('idiota', () => {
  console.log('idiota', user);
});

user.trigger('change');
user.trigger('idiota');
user.trigger('save'); */
