const infraCards = [
  {
    tag: "Operational Now",
    title: "Bandra–Worli Sea Link",
    desc: "8-lane expressway connecting Bandra Bay to Worli and Lower Parel in under 10 minutes. Mumbai's most iconic structure — the artery of this district.",
    hi: "Worli in 7 min · Lower Parel in 10 min",
  },
  {
    tag: "Phase 1 Open",
    title: "Mumbai Coastal Road",
    desc: "8-lane sea-front expressway running along the Bandra Bay promenade. Marine Drive to Bandra in under 10 minutes. The artery that makes the bay a daily address.",
    hi: "Marine Drive in 10 min · Nariman Point in 15 min",
  },
  {
    tag: "2026 — Completing",
    title: "Metro Lines 2B & 3 Aqua",
    desc: "India's first fully underground metro. Connects Bandra directly to BKC, Andheri, CST, and CSIA Airport. No signals. No jams. Just 6 minutes to BKC.",
    hi: "BKC in 6 min · Airport in 18 min",
  },
  {
    tag: "2028 — Under Construction",
    title: "Atal Setu — MTHL Bridge",
    desc: "21.8 km sea bridge — India's longest — connecting Mumbai to Navi Mumbai. Unlocks the entire eastern Mumbai catchment for Bandra Bay.",
    hi: "Navi Mumbai in 20 min · New CBD access",
  },
  {
    tag: "2029 — Under Construction",
    title: "Mumbai Bullet Train (MAHSR)",
    desc: "India's first high-speed rail from BKC station — 10 minutes from Bandra Bay. Mumbai to Ahmedabad in under 2 hours. ₹1.1 lakh crore project.",
    hi: "BKC station 10 min · Ahmedabad in 2 hrs",
  },
  {
    tag: "By 2030 — Expanding",
    title: "BKC — 7M Sq Ft Expansion",
    desc: "7 million sq. ft. of new Grade-A office space. 8,000 CXO-level professionals will need luxury housing in this corridor. Office rents up 21% since 2019.",
    hi: "8,000 CXOs · 21% rent growth",
  },
];

export default function Infrastructure() {
  return (
    <div className="sec sec-dk" id="infra">
      <div className="infra-hd">
        <div>
          <p className="ey-lt">Infrastructure</p>
          <h2 className="h2-lt">₹3.6 lakh crore<br /><em>converging here.</em></h2>
        </div>
        <div className="infra-note">
          No address in India has more infrastructure investment pointing directly at it.{" "}
          <strong>Every major connectivity project in Mumbai</strong> — the Coastal Road,
          Metro 3, Bullet Train, Atal Setu — terminates within minutes of this district.
        </div>
      </div>

      <div className="infra-grid">
        {infraCards.map((c) => (
          <div className="icard" key={c.title}>
            <div className="itag">{c.tag}</div>
            <div className="ititle">{c.title}</div>
            <p className="idesc">{c.desc}</p>
            <div className="ihi">{c.hi}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
