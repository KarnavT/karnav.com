type PageHeaderProps = {
  title: string;
  subtitle: string;
};

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <header className="space-y-2">
      <h1 className="text-4xl font-semibold tracking-tight text-gray-900">
        {title}
      </h1>
      <p className="text-base text-gray-500">{subtitle}</p>
    </header>
  );
}
