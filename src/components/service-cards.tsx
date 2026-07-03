import { services } from "@/content/services";
import { Card } from "@/components/primitives";

export function ServiceCards() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {services.map((s) => (
        <Card
          key={s.slug}
          kicker={s.kicker}
          title={s.title}
          body={s.lede.split(".")[0] + "."}
          href={s.path}
        />
      ))}
    </div>
  );
}
