import { useState } from "react";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setDrawerOpen(false);
  };

  return (
    <>
      <nav>
        <a href="#" className="logo">
          <span className="gem"></span>
          BANDRA BAY REALTY
        </a>

        <ul className="nav-links">
          <li><a href="#district">The District</a></li>
          <li><a href="#developers">Developers</a></li>
          <li><a href="#infra">Infrastructure</a></li>
          <li><a href="#returns">Returns</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button className="nav-btn" onClick={() => scrollTo("contact")}>
          Register Now
        </button>

        <button
          className="ham"
          onClick={() => setDrawerOpen((o) => !o)}
          aria-label="Menu"
        >
          {drawerOpen ? (
            <>
              <span style={{ transform: "rotate(45deg) translate(5px,5px)" }} />
              <span style={{ opacity: 0 }} />
              <span style={{ transform: "rotate(-45deg) translate(5px,-5px)" }} />
            </>
          ) : (
            <>
              <span /><span /><span />
            </>
          )}
        </button>
      </nav>

      <div className={`mob-drawer${drawerOpen ? " open" : ""}`}>
        <a href="#district" onClick={() => setDrawerOpen(false)}>The District</a>
        <a href="#developers" onClick={() => setDrawerOpen(false)}>Developers</a>
        <a href="#infra" onClick={() => setDrawerOpen(false)}>Infrastructure</a>
        <a href="#returns" onClick={() => setDrawerOpen(false)}>Returns</a>
        <a href="#contact" onClick={() => setDrawerOpen(false)}>Contact</a>
        <button className="mob-cta-btn" onClick={() => scrollTo("contact")}>
          Register Now →
        </button>
      </div>
    </>
  );
}
