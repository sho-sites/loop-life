import Link from "next/link";
import Image from "next/image";
import looplifebanner from "../images/looplifebanner.png";

const valueCards = [
  {
    title: "Customization",
    subtitle: "Personalized Experience",
    body: "Each bracelet is crafted with care to reflect your unique style and interests. We ensure that every piece is a personal statement of creativity and individuality.",
  },
  {
    title: "Advocacy",
    subtitle: "Financial Literacy Promotion",
    body: "Through our commitment to promoting financial literacy, we aim to raise awareness and educate our community on the importance of financial management and investment.",
  },
  {
    title: "Social Impact",
    subtitle: "Supporting Non-profit Organizations",
    body: "We actively contribute to the Young Investors Society through our proceeds, fostering a generation of financially educated and responsible individuals.",
  },
];

export default function Home() {
  return (
    <div className="home">
      <section className="section hero">
        <div className="container hero-grid">
          <div>
            <span className="pill">Loop Life</span>
            <h1 className="hero-title">Adorn Your Wrist.</h1>
            <p className="hero-sub">Wear the Change You Want to See.</p>
            <div className="hero-actions">
              <Link href="/buy" className="button primary">
                Shop
              </Link>
              <Link href="/about" className="button secondary">
                Discover Our Story
              </Link>
            </div>
            <p className="hero-note">
              Custom, themed bracelets crafted to champion financial literacy
              and community impact.
            </p>
          </div>

          <div className="hero-visual">
            <div className="badge">Supports Young Investors Society</div>
            <div>
              <h3>Designed for impact</h3>
              <p className="muted">
                Handcrafted loops that spark conversations about money, mindset,
                and meaningful change.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container banner-card">
          <Image
            src={looplifebanner}
            alt="Loop Life bracelets banner"
            width={1600}
            height={640}
            className="banner-img"
            priority
          />
        </div>
      </section>

      <section className="section">
        <div className="container grid-two">
          <div>
            <div className="section-heading">
              <span className="eyebrow">Our Story</span>
              <h2>Mission Statement</h2>
            </div>
            <p>
              At Loop Life, we are dedicated to creating custom, themed
              bracelets that promote financial literacy. Our mission is to
              empower individuals through unique accessories while supporting
              the Young Investors Society.
            </p>
            <p>
              Loop Life operates uniquely on Instagram as well as other
              platforms, selling handcrafted products and advocating for
              financial education. Every purchase contributes to a meaningful
              cause, highlighting our commitment to enhancing financial
              awareness.
            </p>
            <Link href="/about" className="button secondary">
              Learn more
            </Link>
          </div>

          <div className="card list-card">
            <h3>What drives us</h3>
            <p>
              Community-first craftsmanship, built to make every bracelet a
              reminder that knowledge is a loop worth sharing.
            </p>
            <div className="badge">Mission-led brand</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-two">
          <div>
            <div className="section-heading">
              <span className="eyebrow">Partners</span>
              <h2>Green Silicon Valley</h2>
            </div>
            <p>
              We’re proud to work with Green Silicon Valley—one of our partners
              in bringing financial education and youth empowerment to more
              communities.
            </p>
            <p>
              Together, we’re hosting workshops with Green Silicon Valley
              internationally, helping spark conversations and build confidence
              around money skills worldwide.
            </p>
          </div>

          <div className="card list-card">
            <h3>Workshop spotlight</h3>
            <p className="muted">
              Partner-supported sessions that turn knowledge into action—one
              loop at a time.
            </p>
            <div className="badge">International workshops</div>
          </div>
        </div>
      </section>

      <section className="section section-contrast">
        <div className="container grid-two">
          <div>
            <div className="section-heading">
              <span className="eyebrow">Catalog</span>
              <h2>Stories you can wear</h2>
            </div>
            <p>
              Each and every one of our bracelets tell a story. They reflect
              real financial challenges that people face every day, like saving,
              debt, budgeting, and investing. Each design turns these complex
              topics into a powerful, wearable symbol that starts conversations
              and spreads awareness.
            </p>
            <p>
              When you buy a bracelet, you are directly supporting youth
              financial education through the Young Investors Society. Your
              purchase helps equip the next generation with the tools they need
              to take control of their financial futures. Follow us on Instagram
              @loop_life13 to see the impact in action, explore the meaning
              behind each bracelet, and join a community that believes knowledge
              is the first step toward empowerment.
            </p>
            <Link href="/buy" className="button primary">
              Get yours today
            </Link>
          </div>

          <div className="card list-card">
            <h3>What’s inside the loop</h3>
            <p className="muted">
              Custom color stories, purposeful charms, and thoughtful packaging
              that celebrate financial empowerment.
            </p>
            <p className="muted">
              Crafted in small batches to stay intentional, meaningful, and
              personal.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Value</span>
            <h2>What Loop Life delivers</h2>
          </div>
          <p>
            Our services go beyond just bracelets; we offer a gateway to
            financial empowerment through our custom designs and dedication to
            support education and social initiatives.
          </p>
          <Link href="/impact" className="button secondary">
            What you can do
          </Link>
          <div className="card-stack">
            {valueCards.map((card) => (
              <div key={card.title} className="card">
                <p className="eyebrow">{card.title}</p>
                <h3>{card.subtitle}</h3>
                <p className="muted">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
