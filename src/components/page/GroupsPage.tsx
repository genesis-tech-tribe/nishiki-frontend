import {
  CreateGroupButton,
  GroupCardList,
  GroupCollectionMenuButton,
} from '@/features/groups/components';
import { IGroup } from '@/types/definition';

import { FC } from 'react';

interface IGroupsPageProps {
  groups: IGroup[];
}

export const GroupsPage: FC<IGroupsPageProps> = ({ groups }) => {
  return (
    <div className="pt-6 px-4 pb-2 flex flex-col gap-2">
      <div className="h-12 w-full flex items-center justify-end gap-0.5">
        <GroupCollectionMenuButton />
        <CreateGroupButton />
      </div>
      <GroupCardList groups={groups} />
    </div>
  );
};
