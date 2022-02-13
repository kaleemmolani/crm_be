import {
  Ability,
  AbilityBuilder,
  AbilityClass,
  ExtractSubjectType,
  InferSubjects,
} from '@casl/ability';

import { Item } from 'src/item/entities/item.entity';
import { Action, UserId } from 'src/shared/utils';
import { UserEntity } from 'src/users/entity/user.entity';

type Subjects = InferSubjects<typeof Item | typeof UserEntity> | 'all';

export type AppAbility = Ability<[Action, Subjects]>;

export class CaslAbilityFactory {
  createForUser(user: UserEntity) {
    const { can, build } = new AbilityBuilder<Ability<[Action, Subjects]>>(
      Ability as AbilityClass<AppAbility>,
    );
    if (user.isAdmin) {
      can(Action.Manage, 'all'); // read-write access to everything
    } else {
      can(Action.Read, 'all'); // read-only access to everything
    }
    const userId = UserId(user);
    can(Action.Update, Item, { createdBy: userId }); // can update own items
    can(Action.Delete, Item, { createdBy: userId }); // can delete own items
    return build({
      // Read https://casl.js.org/v5/en/guide/subject-type-detection#use-classes-as-subject-types for details
      detectSubjectType: (item) =>
        item.constructor as ExtractSubjectType<Subjects>,
    });
  }
}
