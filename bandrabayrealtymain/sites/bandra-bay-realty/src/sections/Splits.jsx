export function SplitSeaView() {
  return (
    <div className="split">
      <div className="split-photo">
        <div className="split-photo-img ph-bridge"></div>
      </div>
      <div className="split-body dk">
        <p className="ey-lt">The View</p>
        <h2 className="h2-lt" style={{ fontSize: "clamp(26px,2.8vw,40px)" }}>
          The Sea.<br /><em>Your horizon.</em>
        </h2>
        <p className="intro-lt" style={{ marginTop: 16 }}>
          Bandra Bay's most iconic feature isn't the address or the amenities — it's waking
          up to the Arabian Sea every morning. A skyline that announces to everyone: you made it.
        </p>
        <p style={{ fontSize: 13, fontWeight: 300, color: "rgba(245,241,232,.38)", marginTop: 16, lineHeight: 1.75 }}>
          Sea-facing floors command a{" "}
          <strong style={{ color: "var(--goldl)" }}>15–20% premium</strong>{" "}
          over comparable inland luxury — and that gap is only widening.
        </p>
      </div>
    </div>
  );
}

export function SplitPenthouse() {
  return (
    <div className="split">
      <div className="split-body lt">
        <p className="ey">The Residence</p>
        <h2 className="h2" style={{ fontSize: "clamp(26px,2.8vw,40px)" }}>
          Where every room<br /><em>faces the sea.</em>
        </h2>
        <p className="intro" style={{ marginTop: 16 }}>
          Floor-to-ceiling glass. Double-height living rooms. Private terraces framing the
          Arabian Sea. Every detail calibrated to match the ambitions of those who choose
          to live here.
        </p>
        <p style={{ fontSize: 13, fontWeight: 300, color: "var(--ink-dim)", marginTop: 14, lineHeight: 1.75 }}>
          2.5 BHK · 3 BHK · 4 BHK · Penthouses · Duplexes · Sky Villas<br />
          From 1,800 sq. ft. to 12,000 sq. ft.+
        </p>
        <div style={{ marginTop: 28 }}>
          <a href="#contact" className="btn-dark">View Floor Plans</a>
        </div>
      </div>
      <div className="split-photo">
        <div className="split-photo-img ph-luxury"></div>
      </div>
    </div>
  );
}
