const photoCards = [
  {
    ph: "ph-pool",
    cat: "The Amenities",
    title: "Infinity pools. Private beach. Sky lounges.",
    body: "World-class facilities benchmarked against the finest addresses globally.",
  },
  {
    ph: "ph-room",
    cat: "The Interior",
    title: "Floor-to-ceiling glass. Double-height living.",
    body: "Every room designed to frame the sea and the city in equal measure.",
  },
  {
    ph: "ph-street",
    cat: "The Neighbourhood",
    title: "Bandra — Mumbai's cultural capital.",
    body: "Carter Road. Bandstand. Hill Road. India's most coveted postal code.",
  },
];

const infoCards = [
  {
    num: "04",
    cat: "The Commute",
    title: "Everything, minutes away",
    body: "BKC in 10 minutes. Lower Parel in 10. Airport in 18. Marine Drive in 10. The only luxury address that doesn't make you choose.",
  },
  {
    num: "05",
    cat: "The Community",
    title: "India's most ambitious residents",
    body: "Founders, CXOs, artists, athletes, diplomats. Global Indians who want their home city to match their global stature.",
  },
  {
    num: "06",
    cat: "The Investment",
    title: "A home that works while you live in it",
    body: "2–4% gross rental yield. 46% capital appreciation projected. ₹1 lakh crore in development catalysts. Rewards you on every axis.",
  },
];

export default function Lifestyle() {
  return (
    <div className="sec sec-lt">
      <p className="ey">Life at Bandra Bay</p>
      <h2 className="h2">More than a home.<br /><em>A complete life.</em></h2>
      <p className="intro">
        Designed for people who expect their address to match their ambition — in every direction.
      </p>

      <div className="lp-grid">
        {photoCards.map((c) => (
          <div className="lcard" key={c.cat}>
            <div className={`lcard-img ${c.ph}`}></div>
            <div className="lcard-ov">
              <div className="lcat">{c.cat}</div>
              <div className="ltitle">{c.title}</div>
              <p className="lbody">{c.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="lc-grid">
        {infoCards.map((c) => (
          <div className="lc" key={c.num}>
            <div className="lcbg">{c.num}</div>
            <div className="lccat">{c.cat}</div>
            <div className="lctitle">{c.title}</div>
            <p className="lcbody">{c.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
