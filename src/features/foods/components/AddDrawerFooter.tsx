import { DrawerClose } from '@/components/ui';
import { Button } from '@/components/ui';

export const AddDrawerFooter = ({
  setIsDrawerOpen,
}: {
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleCancelClick = () => {
    setIsDrawerOpen(false);
  };

  const handleAddClick = () => {
    alert('Successfully added!');
    setIsDrawerOpen(false);
  };
  return (
    <>
      {' '}
      <DrawerClose asChild>
        <Button variant="cancel" size="sm" onClick={handleCancelClick}>
          Cancel
        </Button>
      </DrawerClose>
      <Button variant="primary" size="sm" onClick={handleAddClick}>
        Add food
      </Button>
    </>
  );
};
