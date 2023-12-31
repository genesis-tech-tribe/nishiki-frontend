import { DatePicker } from '@/components/ui';

import { ReactNode, useState } from 'react';

interface IFormDatePickerProps {
  id?: string;
  hiddenInput: (date: string) => ReactNode;
}

export const FormDatePicker = ({ id, hiddenInput }: IFormDatePickerProps) => {
  const [date, setDate] = useState<Date | undefined>();

  return (
    <>
      {hiddenInput(date?.toJSON() || '')}
      <DatePicker date={date} onSelect={setDate} id={id} />
    </>
  );
};
