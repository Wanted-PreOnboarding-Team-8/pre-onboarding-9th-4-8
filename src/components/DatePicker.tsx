import { Input } from '@chakra-ui/react';
import useParams from '@/lib/hooks/useParams';

const DatePicker = () => {
  const { selectedDate, onSetParams } = useParams();

  return (
    <Input
      placeholder="Select Date and Time"
      size="lg"
      bg="white"
      type="date"
      value={selectedDate || ''}
      onChange={(event) => onSetParams({ event })}
    />
  );
};

export default DatePicker;
