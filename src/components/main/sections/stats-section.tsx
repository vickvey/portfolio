"use client";

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  {
    value: "+700hrs",
    label: "Work dedicated to full-stack development and ML",
  },
  { value: "+30", label: "Projects delivered since 2021" },
  { value: "~98%", label: "Successful completion rate" },
  { value: "4.7★", label: "Average client rating" },
];

const StatsCard = ({ value, label }: Stat) => (
  <div className="group shadow-lg hover:shadow-2xl flex flex-col items-center justify-center rounded-2xl border border-border bg-background/60 backdrop-blur-sm p-6 text-center transition-all duration-300 hover:border-accent hover:bg-accent/10">
    <h3 className="text-3xl font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors">
      {value}
    </h3>
    <p className="mt-2 text-sm text-muted-foreground leading-snug max-w-[18ch]">
      {label}
    </p>
  </div>
);

export default function StatsSection({ items = stats }: { items?: Stat[] }) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-16">
      {items.map((stat) => (
        <StatsCard key={stat.label} {...stat} />
      ))}
    </section>
  );
}
