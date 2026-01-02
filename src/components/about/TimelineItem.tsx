type TimelineItemProps = {
  title: string;
  role: string;
  detail: string;
  date: string;
};

export default function TimelineItem({
  title,
  role,
  detail,
  date,
}: TimelineItemProps) {
  return (
    <div className="relative pl-6">
      <span
        className="absolute -left-[7px] top-2 h-2.5 w-2.5 rounded-full bg-gray-300"
        aria-hidden
      />
      <div className="space-y-1">
        <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
          {date}
        </p>
        <p className="text-sm font-semibold text-gray-900">{title}</p>
        <p className="text-sm font-medium text-gray-700">{role}</p>
        <p className="text-sm font-medium text-gray-600">{detail}</p>
      </div>
    </div>
  );
}
