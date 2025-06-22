import { intro, work, education, projects, openSource } from "@/lib/content";
import { Intro as IntroComponent } from "@/components/intro";

export default function Home() {
  return (
    <main className="grid gap-8 max-w-4xl text-sm p-8">
      <IntroComponent intro={intro} />

      <section className="grid gap-4 fade-in-up !delay-300">
        <h2 className="text-base font-medium">Work</h2>
        <div className="grid divide-y">
          {work.map((item, i) => (
            <Item key={item.title} {...item} isFirst={i === 0} />
          ))}
        </div>
      </section>

      <section className="grid gap-4 fade-in-up !delay-500">
        <h2 className="text-base font-medium">Education</h2>
        <div className="grid divide-y">
          {education.map((item, i) => (
            <Item key={item.title} {...item} isFirst={i === 0} />
          ))}
        </div>
      </section>

      <section className="grid gap-4 fade-in-up !delay-700">
        <h2 className="text-base font-medium">Projects</h2>
        <div className="grid divide-y">
          {projects.map((item, i) => (
            <Item key={item.title} {...item} isFirst={i === 0} />
          ))}
        </div>
      </section>

      <section className="grid gap-4 fade-in-up !delay-1000">
        <h2 className="text-base font-medium">Open Source</h2>
        <div className="grid divide-y">
          {openSource.map((item, i) => (
            <Item key={item.title} {...item} isFirst={i === 0} />
          ))}
        </div>
      </section>

      <p className="text-muted-foreground text-xs fade-in-up !delay-1000">
        &copy; {new Date().getFullYear()} {intro.name}
      </p>
    </main>
  );
}

type ItemProps = {
  title: string;
  date?: string;
  description: string[];
  href?: string;
  location?: string;
  isFirst: boolean;
};

function Item({ title, date, description, href, location, isFirst }: ItemProps) {
  return (
    <section className={`grid sm:grid-cols-[1fr_2fr] ${isFirst ? "pt-3 pb-5 sm:py-3" : "py-5 sm:py-3"} gap-5 sm:gap-2 px-3 -mx-3 hover:bg-muted/50 transition-all`}>
      <div>
        <h3 className="mb-4 sm:mb-0">
          {href ? (
            <a href={href} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        {date && (
          <p className="text-muted-foreground text-xs">{date}</p>
        )}
        {location && (
          <p className="text-muted-foreground text-xs">{location}</p>
        )}
      </div>
      <div className="grid gap-1">
        {description.map((item, i) => (
          <li key={i} className="grid grid-cols-[auto_1fr] items-baseline gap-1 list-none">
            <p className="text-muted-foreground/50 text-xs">&gt;</p>
            <p>{item}</p>
          </li>
        ))}
      </div>
    </section>
  );
}
