export default function Footer() {
  return (
    <footer>
      <div className="foot-grid">
        {/* Brand */}
        <div>
          <div className="foot-brand">BANDRA BAY REALTY</div>
          <p className="foot-about">
            India's flagship portal for Bandra Bay — Mumbai's master-planned luxury waterfront
            district. We aggregate all major developer projects and guide buyers from interest
            to possession. Serving residents and NRI investors across 30+ countries.
          </p>
        </div>

        {/* Discover */}
        <div>
          <div className="fch">Discover</div>
          <ul className="fcl">
            <li><a href="#district">The District</a></li>
            <li><a href="#developers">All Developers</a></li>
            <li><a href="#infra">Infrastructure</a></li>
            <li><a href="#returns">ROI Calculator</a></li>
          </ul>
        </div>

        {/* Developers */}
        <div>
          <div className="fch">Developers</div>
          <ul className="fcl">
            <li><a href="#contact">Adani Realty</a></li>
            <li><a href="#contact">Hiranandani</a></li>
            <li><a href="#contact">Oberoi Realty</a></li>
            <li><a href="#contact">Godrej Properties</a></li>
            <li><a href="#contact">L&T Realty + more</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="fch">Contact</div>
          <ul className="fcl">
            <li><a href="https://wa.me/919XXXXXXXXX">WhatsApp Desk</a></li>
            <li><a href="mailto:hello@bandrabayreality.com">hello@bandrabayrealty.com</a></li>
            <li><a href="#contact">Schedule a Call</a></li>
            <li><a href="https://bandrabayrealty.com" target="_blank" rel="noreferrer">BandraBayRealty.com</a></li>
          </ul>
        </div>
      </div>

      <div className="foot-bottom">
        <p className="foot-legal">
          © 2026 BandraBayRealty.com · All project information, pricing and projections are
          indicative and subject to change. Verify all details with individual developers and
          MahaRERA filings. ROI projections are not financial advice. This portal is independent
          of all developers listed.
        </p>
        <div className="foot-rera">MahaRERA Compliant</div>
      </div>
    </footer>
  );
}
