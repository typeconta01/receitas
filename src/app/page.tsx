import type { Metadata } from "next";
import Image from "next/image";
import "./home.css";

export const metadata: Metadata = {
  title: "Digital products company",
  description:
    "We are a company specialized in digital products for people and businesses across different languages and markets.",
  openGraph: {
    title: "Digital products company",
    description:
      "We are a company specialized in digital products for people and businesses across different languages and markets.",
    type: "website",
    locale: "en_US",
    siteName: "Digital products",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital products company",
    description:
      "We are a company specialized in digital products for people and businesses across different languages and markets.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const focus = [
  {
    title: "Educational products",
    text: "Practical digital guides and learning materials that help people apply tools, methods, and ideas in real work and daily life.",
    tone: "teal",
  },
  {
    title: "Digital publishing",
    text: "We create, organize, and publish digital content for readers in more than one language, with a clear structure and a direct tone.",
    tone: "coral",
  },
  {
    title: "Product operations",
    text: "Each product is prepared for online delivery: access, updates, and the information people need after they acquire it.",
    tone: "violet",
  },
];

const principles = [
  {
    title: "Clarity",
    text: "We prefer simple language, useful structure, and pages that explain what a product is without pressure.",
  },
  {
    title: "Usefulness",
    text: "A digital product should help someone do something better — not only consume more information.",
  },
  {
    title: "Responsibility",
    text: "We describe products as they are. We do not invent testimonials, scarcity, or claims we cannot support.",
  },
];

export default function Home() {
  return (
    <main className="home" lang="en">
      <header className="home__hero">
        <div className="home__blob home__blob--teal" aria-hidden="true" />
        <div className="home__blob home__blob--coral" aria-hidden="true" />
        <div className="home__wrap home__hero-grid">
          <div>
            <p className="home__label">Digital products</p>
            <h1>A colorful studio for digital products, made for people and businesses.</h1>
            <p className="home__lead">
              We create and publish digital products that help people learn,
              work, and organize ideas. Our work lives online, in more than one
              language, and in more than one market.
            </p>
          </div>
          <div className="home__frame home__frame--hero">
            <Image
              src="/images/home/hero.png"
              alt="Abstract illustration of books, a tablet, and colorful digital shapes"
              width={1280}
              height={720}
              sizes="(max-width: 800px) 100vw, 520px"
              quality={75}
              preload
            />
          </div>
        </div>
      </header>

      <section className="home__band home__band--cream" aria-labelledby="about-heading">
        <div className="home__wrap home__split">
          <div className="home__frame home__frame--about">
            <Image
              src="/images/home/about.png"
              alt="Illustrated desk with a notebook, notes, and a small plant"
              width={1200}
              height={900}
              sizes="(max-width: 800px) 100vw, 420px"
              quality={75}
            />
          </div>
          <div>
            <p className="home__label home__label--dark">About us</p>
            <h2 id="about-heading">Independent, digital, and built to be used.</h2>
            <p>
              We research topics, write practical material, and turn that work
              into products people can access from anywhere.
            </p>
            <p>
              We are not a physical store, and we do not build custom software
              for third parties. We specialize in digital goods: guides,
              educational content, and materials that can be published and
              updated online.
            </p>
          </div>
        </div>
      </section>

      <section className="home__band home__band--navy" aria-labelledby="focus-heading">
        <div className="home__wrap">
          <div className="home__intro">
            <p className="home__label">What we work on</p>
            <h2 id="focus-heading">Three kinds of work, one digital craft.</h2>
          </div>
          <ul className="home__cards">
            {focus.map((item) => (
              <li key={item.title} className={`home__card home__card--${item.tone}`}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="home__band home__band--mint" aria-labelledby="how-heading">
        <div className="home__wrap home__split home__split--reverse">
          <div>
            <p className="home__label home__label--dark">How we work</p>
            <h2 id="how-heading">From a real problem to a finished product.</h2>
            <p>
              A product usually starts with someone who needs a clearer way to
              start, decide, or apply a tool. We define the scope, write the
              material, review it, and publish it as a finished digital product.
            </p>
            <p>
              When a product is offered in more than one language, each version
              is written for that audience. The goal stays the same: make the
              subject easier to understand and easier to use.
            </p>
          </div>
          <div className="home__frame home__frame--round">
            <Image
              src="/images/home/launch.png"
              alt="Illustration of a person launching a product on a rocket"
              width={800}
              height={800}
              sizes="(max-width: 800px) 80vw, 360px"
              quality={75}
            />
          </div>
        </div>
      </section>

      <section className="home__band home__band--lilac" aria-labelledby="markets-heading">
        <div className="home__wrap home__split">
          <div className="home__frame home__frame--round">
            <Image
              src="/images/home/world.png"
              alt="Stylized globe with colorful language orbs around it"
              width={1024}
              height={1024}
              sizes="(max-width: 800px) 80vw, 360px"
              quality={75}
            />
          </div>
          <div>
            <p className="home__label home__label--dark">Languages and markets</p>
            <h2 id="markets-heading">The same standard in every language.</h2>
            <p>
              We publish for international audiences. Current work includes
              material in English, Spanish, and Portuguese.
            </p>
            <p>
              Distribution is digital. People access products online, from the
              country and device they already use.
            </p>
            <ul className="home__langs" aria-label="Languages we publish in">
              <li>EN</li>
              <li>ES</li>
              <li>PT</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="home__band home__band--cream" aria-labelledby="principles-heading">
        <div className="home__wrap">
          <div className="home__intro home__intro--dark">
            <p className="home__label home__label--dark">How we communicate</p>
            <h2 id="principles-heading">Colorful pages. Quiet promises.</h2>
          </div>
          <ul className="home__principles">
            {principles.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="home__band home__band--note" aria-labelledby="note-heading">
        <div className="home__wrap home__note">
          <h2 id="note-heading">A short note</h2>
          <p>
            This website is the institutional page of the company. Product
            pages, when they exist, are published separately and speak only
            about the product they present.
          </p>
        </div>
      </section>

      <footer className="home__footer">
        <div className="home__wrap">
          <p>Digital products company</p>
          <p>© {new Date().getFullYear()}</p>
        </div>
      </footer>
    </main>
  );
}
