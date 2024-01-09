import { dankMonoItal } from '@/config/fonts';
import { format } from 'date-fns';

export default function PostDate({ date }: { date: string }) {
  const isoDate = new Date(date).toISOString();
  const formattedDate = format(new Date(isoDate), 'MMMM dd, yyyy');

  return (
    <time className={dankMonoItal.className} dateTime={isoDate} itemProp='dateModified'>
      {formattedDate}
    </time>
  );
}
