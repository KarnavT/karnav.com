type PageHeaderProps = {
  title: string;
  subtitle: string;
  className?: string;
};

export default function PageHeader({
  title,
  subtitle,
  className,
}: PageHeaderProps) {
  return (
    <header className={["space-y-2", className].filter(Boolean).join(" ")}>
      <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </h1>
      <p className="text-sm text-gray-500 sm:text-base">{subtitle}</p>
    </header>
  );
}
