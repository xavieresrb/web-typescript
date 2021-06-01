import { User } from './models/User';

const user = new User({ name: 'newer name', age: 3 });

user.on('save', () => {
  console.log(user);
});

user.save();
