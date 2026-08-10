

const heroStats = [
  { num: "140",    label: "Acres of waterfront" },
  { num: "46%",    label: "Price upside projected" },
  { num: "₹1L Cr", label: "Development pipeline" },
  { num: "11+",    label: "Premier developers" },
];

export default function Hero() {
  return (
    <div className="hero">
      {/* Left — Copy */}
      <div className="hero-copy">
        <p className="hero-strap">India's Defining Address</p>
        <h1 className="hero-h1">
          The Bay<br />
          <span className="it">is rising.</span><br />
          Are you in?
        </h1>
        <p className="hero-p">
          Bandra Bay — 140 acres of master-planned luxury on the Arabian Sea.
          Mumbai's answer to Palm Jumeirah. Eleven of India's finest developers.
          The address that defines a generation.
        </p>
        <div className="hero-btns">
          <a href="#contact" className="btn-dark">Register Your Interest</a>
          <a href="#district" className="btn-line">Explore the District</a>
        </div>
      </div>

      {/* Right — Photo */}
      <div className="hero-photo">
        <div className="hero-photo-img ph-bay"></div>
        <div className="hero-fade"></div>

        <div className="hero-pill">
          <span className="live-dot"></span>
          <span>Active Now — Limited Availability</span>
        </div>

        <div className="hero-stats">
          {heroStats.map((s) => (
            <div className="hst" key={s.label}>
              <div className="hst-n">{s.num}</div>
              <div className="hst-l">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
