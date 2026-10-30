import { DATA } from "@/data/resume";
import { Timeline, TimelineConnectItem, TimelineItem } from "@/components/timeline";

export default function FocusSection() {
  return (
    <section id="focus" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">Research & Practice</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Artificial intelligence, teaching, and technology</h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              My work spans academic research in AI and building accessible, high-performance web products.
            </p>
          </div>
        </div>
        <Timeline>
          {DATA.focusAreas.map((area, index) => (
            <TimelineItem key={area.title} className="w-full flex items-start justify-between gap-10">
              <TimelineConnectItem className="flex items-start justify-center">
                <div className="size-10 bg-card z-10 shrink-0 border rounded-full shadow ring-2 ring-border grid place-items-center text-xs font-mono text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </TimelineConnectItem>
              <div className="flex flex-1 flex-col justify-start gap-2 min-w-0">
                <h3 className="font-semibold leading-none">{area.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
              </div>
            </TimelineItem>
          ))}
        </Timeline>
        <a
          href={DATA.featuredPublication.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-xl border bg-card p-5 transition-colors hover:bg-muted/50"
        >
          <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Selected Publication</div>
          <h3 className="mt-2 font-semibold leading-snug group-hover:underline">{DATA.featuredPublication.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{DATA.featuredPublication.description}</p>
          <span className="mt-3 inline-flex text-sm font-medium text-primary">View Google Scholar profile ↗</span>
        </a>
      </div>
    </section>
  );
}
