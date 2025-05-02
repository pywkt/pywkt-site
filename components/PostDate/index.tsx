import { dankMonoItal } from "@/config/fonts";
import { format } from "date-fns";

export default function PostDate({
  date,
  dateOnly,
  updated
}: {
  date: string;
  dateOnly?: boolean;
    updated?: boolean;
}) {
  if (!date) return;
  const isoDate = new Date(date).toISOString();
  const formattedDate = format(new Date(isoDate), "MMMM dd, yyyy");

  return (
    <div className="postDate">
      {!dateOnly && <span>Posted: </span>}
      {updated && <span>Updated: </span>}
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
