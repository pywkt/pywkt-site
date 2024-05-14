import { dankMonoItal } from "@/config/fonts";
import { format } from "date-fns";

export default function UpdatedDate({ date }: { date: string }) {
  if (!date) return;
  const isoDate = new Date(date).toISOString();
  const formattedDate = format(new Date(isoDate), "MMMM dd, yyyy");

  return (
    <div className="postDate">
      <span>Updated: </span>
      <time
        className={dankMonoItal.className}
        dateTime={isoDate}
        itemProp="dateModified"
      >
        {formattedDate}
      </time>
    </div>
  );
}
