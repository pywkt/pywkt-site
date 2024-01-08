import { format } from 'date-fns';

export default function PostDate({ date }: { date: string }) {
  const isoDate = new Date(date).toISOString();
  const formattedDate = format(new Date(isoDate), 'MMMM dd, yyyy');

  return (
    <time className='text-xs font-ital' dateTime={isoDate} itemProp='dateModified'>
      {formattedDate}
    </time>
  );
}
