import tileAnalytics from "@/assets/tile-analytics.jpg";
import tileCall from "@/assets/tile-call.jpg";
import tileTeam from "@/assets/tile-team.jpg";
import { Section, H2 } from "@/components/primitives";

export type Tile = {
  kicker: string;
  title: string;
  body?: string;
  image?: string;
  tone: "brand" | "warm" | "green";
};

const IMAGES = [tileAnalytics, tileCall, tileTeam];

const TONE: Record<Tile["tone"], string> = {
  brand: "from-[hsl(202,98%,25%)]/85 via-[hsl(202,98%,37%)]/70 to-[hsl(202,98%,45%)]/60",
  warm: "from-[hsl(18,88%,28%)]/85 via-[hsl(14,84%,45%)]/70 to-[hsl(28,92%,55%)]/60",
  green: "from-[hsl(168,70%,22%)]/85 via-[hsl(172,64%,32%)]/70 to-[hsl(160,60%,42%)]/60",
};

export function ImageTiles({
  heading,
  subheading,
  tiles,
}: {
  heading: string;
  subheading?: string;
  tiles: Tile[];
}) {
  return (
    <Section className="pt-0">
      <div className="mx-auto max-w-3xl text-center">
        <H2>{heading}</H2>
        {subheading ? <p className="mx-auto mt-3 max-w-2xl text-ink-dim">{subheading}</p> : null}
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tiles.map((t, i) => (
          <div
            key={t.title}
            className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3]"
          >
            <img
              src={t.image ?? IMAGES[i % IMAGES.length].src}
              alt=""
              loading="lazy"
              width={1280}
              height={960}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-br ${TONE[t.tone]} mix-blend-multiply`}
              aria-hidden
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <div className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/85">
                {t.kicker}
              </div>
              <h3 className="mt-2 font-display text-2xl font-semibold uppercase leading-tight md:text-3xl">
                {t.title}
              </h3>
              {t.body ? <p className="mt-3 max-w-xs text-sm text-white/90">{t.body}</p> : null}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
