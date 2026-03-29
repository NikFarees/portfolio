interface SectionHeadingProps {
  label: string;
  title: string;
}

export default function SectionHeading({ label, title }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <p className="font-mono text-accent text-sm mb-2">{label}</p>
      <h2 className="text-3xl font-bold text-text">{title}</h2>
      <div className="mt-3 h-px w-16 bg-accent" />
    </div>
  );
}
