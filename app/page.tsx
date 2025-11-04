import { intro, work, education, projects, openSource } from "@/lib/content";
import { Intro as IntroComponent } from "@/components/intro";

export default function Home() {
  return (
    <main className="grid gap-10 max-w-4xl text-sm p-8">
      <IntroComponent intro={intro} />

      <section className="grid gap-5 fade-in-up !delay-300">
        <h3 className="text-xl font-semibold text-foreground">Work</h3>
        <div className="grid gap-4">
          {work.map((item, i) => (
            <Item key={item.title} {...item} isFirst={i === 0} />
          ))}
        </div>
      </section>

      <section className="grid gap-5 fade-in-up !delay-500">
        <h3 className="text-xl font-semibold text-foreground">Education</h3>
        <div className="grid gap-4">
          {education.map((item, i) => (
            <Item key={item.title} {...item} isFirst={i === 0} />
          ))}
        </div>
      </section>

      <section className="grid gap-5 fade-in-up !delay-700">
        <h3 className="text-xl font-semibold text-foreground">Projects</h3>
        <div className="grid gap-4">
          {projects.map((item, i) => (
            <Item key={item.title} {...item} isFirst={i === 0} />
          ))}
        </div>
      </section>

      <section className="grid gap-5 fade-in-up !delay-1000">
        <h3 className="text-xl font-semibold text-foreground">Open Source</h3>
        <div className="grid gap-4">
          {openSource.map((item, i) => (
            <Item key={item.title} {...item} isFirst={i === 0} />
          ))}
        </div>
      </section>

      <p className="text-muted-foreground text-xs fade-in-up !delay-1000 text-center mt-8">
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
    <section className="group bg-card border border-border rounded-xl p-5 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1">
      <div className="grid sm:grid-cols-[1fr_2fr] gap-5 sm:gap-6">
        <div>
          <h3 className="font-semibold text-base mb-2">
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                {title}
              </a>
            ) : (
              <span className="text-foreground">{title}</span>
            )}
          </h3>
          {date && (
            <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-md bg-primary/10 text-primary mb-1">
              {date}
            </span>
          )}
          {location && (
            <p className="text-muted-foreground text-xs mt-1">{location}</p>
          )}
        </div>
        <div className="grid gap-2">
          {description.map((item, i) => (
            <li key={i} className="grid grid-cols-[auto_1fr] items-baseline gap-2 list-none">
              <span className="text-primary text-sm font-bold">→</span>
              <p className="text-muted-foreground text-sm leading-relaxed">{item}</p>
            </li>
          ))}
        </div>
      </div>
    </section>
  );
}
