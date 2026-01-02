type SectionProps = {
  title: string;
  children?: React.ReactNode;
  className?: string;
};

export default function Section({ title, children, className }: SectionProps) {
  return (
    <section className={["space-y-4", className].filter(Boolean).join(" ")}>
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      {children}
    </section>
  );
}
