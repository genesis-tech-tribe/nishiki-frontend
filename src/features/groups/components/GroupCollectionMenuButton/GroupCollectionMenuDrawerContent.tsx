import { SelectionDrawerContent } from '@/components/ui';

import { FC } from 'react';

import { DeleteGroupsButton } from '../DeleteGroupsButton';
import { RenameGroupsButton } from '../RenameGroupsButton';

interface IGroupCollectionMenuDrawerContentProps {}

export const GroupCollectionMenuDrawerContent: FC<
  IGroupCollectionMenuDrawerContentProps
> = ({}) => {
  return (
    <SelectionDrawerContent>
      <RenameGroupsButton />
      <DeleteGroupsButton />
    </SelectionDrawerContent>
  );
};
