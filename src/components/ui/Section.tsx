type SectionProps = {
  title: string;
  children?: React.ReactNode;
};

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      {children}
    </section>
  );
}
