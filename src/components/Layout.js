import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/impact", label: "Your Impact" },
  { href: "/buy", label: "Store" },
];

const socials = [
  { href: "https://www.instagram.com/loop_life13", label: "Instagram" },
  { href: "mailto:hello@looplife.com", label: "Email" },
];

function Header() {
  const { pathname } = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link href="/" className="brand">
          Loop Life
        </Link>

        <nav className="nav-links desktop-nav" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link${pathname === link.href ? " active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/buy" className="button primary small desktop-cta">
          Shop Bracelets
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="menu-toggle-line" />
          <span className="menu-toggle-line" />
          <span className="menu-toggle-line" />
        </button>
      </div>

      {isMenuOpen && (
        <div id="mobile-menu" className="mobile-menu">
          <div className="container mobile-menu-inner">
            <nav className="mobile-nav-links" aria-label="Mobile primary">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link${pathname === link.href ? " active" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <Link href="/buy" className="button primary small mobile-cta">
              Shop Bracelets
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand">Loop Life</div>
          <p>
            Adorn your wrist and wear the change you want to see. Crafted to
            champion financial literacy and youth empowerment.
          </p>
        </div>

        <div>
          <h3>Explore</h3>
          <div className="list-card">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3>Connect</h3>
          <div className="list-card">
            {socials.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="container section-tight">
        <div className="list-card">
          <small>© {new Date().getFullYear()} Loop Life. All rights reserved.</small>
          <small>
            Website made by{" "}
            <Link
              href="https://shosites.com/"
              className="footer-credit"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sho Sites
            </Link>
          </small>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }) {
  return (
    <div className="page">
      <Header />
      <main className="page-content">{children}</main>
      <Footer />
    </div>
  );
}
