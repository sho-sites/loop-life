import Link from "next/link";

export default function Buy() {
  return (
    <div className="store">
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Store</span>
            <h1>Bracelets designed to build brighter financial futures.</h1>
          </div>
          <p className="lead">
            100% of our proceeds go directly to the Young Investors Society, empowering the next
            generation of financial leaders. Buy a bracelet, make a real impact, and follow us on
            Instagram to see your contribution in action!
          </p>
          <div className="hero-actions">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSf3FdsTzYR0rT24QEmIRVrlC2JKGMItyWAsPEL2394naXhydQ/viewform?usp=header"
              className="button primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy here!
            </Link>
            <Link href="https://www.instagram.com/loop_life13" className="button secondary">
              Follow on Instagram
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
