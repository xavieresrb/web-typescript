import { Model } from './Model';
import { Attributes } from './Attributes';
import { ApiSync } from './ApiSync';
import { Eventing } from './Eventing';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
  static buildUser(attributes: UserProps): User {
    return new User(
      new Attributes<UserProps>(attributes),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    );
  }
}
