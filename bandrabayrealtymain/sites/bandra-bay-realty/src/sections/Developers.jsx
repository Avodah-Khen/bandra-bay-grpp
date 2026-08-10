const developers = [
  { initial: "A", name: "Adani Realty",           desc: "~20 acres · Sea-facing ultra-luxury · Invite-only first phase",       price: "Enquire for pricing" },
  { initial: "H", name: "Hiranandani Communities", desc: "Bay Heights · 2.5, 3 & 4 BHK · Sea views · 50+ year legacy",          price: "From ₹12 Crore" },
  { initial: "O", name: "Oberoi Realty",           desc: "Ultra-premium · Bandra West · Sky homes & full-floor residences",      price: "From ₹18 Crore" },
  { initial: "G", name: "Godrej Properties",       desc: "Waterfront redevelopment · Heritage Bandra · Green certification",     price: "Enquire for pricing" },
  { initial: "L", name: "L&T Realty",              desc: "Riverwalk · 20 acres · ₹11,000 Cr GDV · Bandra Reclamation",          price: "From ₹14 Crore" },
  { initial: "W", name: "Wadhwa Group",            desc: "Mixed-use luxury · Sea-facing high floors · 5-decade legacy",          price: "From ₹15 Crore" },
  { initial: "D", name: "DLH",                     desc: "Boutique residences · Limited supply · Curated community",             price: "Enquire for pricing" },
  { initial: "I", name: "Inspira",                 desc: "Contemporary architecture · Bay promenade · 3 & 4 BHK",               price: "From ₹13 Crore" },
];

export default function Developers() {
  return (
    <div className="sec sec-lt" id="developers">
      <p className="ey">Committed Developers</p>
      <h2 className="h2">India's finest.<br /><em>One address.</em></h2>
      <p className="intro">
        Eleven of India's most trusted developers have chosen Bandra Bay. Every project
        RERA-registered, title-verified, built to the standard this address demands.
      </p>

      <div className="dev-grid">
        {developers.map((d) => (
          <div className="dev-card" key={d.name}>
            <div className="di">{d.initial}</div>
            <div className="dn">{d.name}</div>
            <div className="dt">{d.desc}</div>
            <div className="dp">{d.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
