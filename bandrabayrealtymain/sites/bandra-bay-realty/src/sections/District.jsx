const facts = [
  {
    num: "140",
    title: "Acres of master-planned waterfront",
    body: "A cohesive 140-acre vision along the Arabian Sea — anchored by India's most respected developers, all aligned on promenade access, sea views, and curated lifestyle infrastructure.",
  },
  {
    num: "8M",
    title: "Sq. ft. of luxury residences",
    body: "Eight million square feet of ultra-premium residential space. 2.5, 3, 4, and 5 BHK sea-facing apartments, duplexes, and penthouses. From ₹12 crore to ₹100 crore+.",
  },
  {
    num: "9km",
    title: "From Mumbai International Airport",
    body: "Nine kilometres to CSIA. Ten minutes to BKC. Twenty minutes to Lower Parel. Bandra Bay sits at the exact centre of Mumbai's new geography.",
  },
  {
    num: "₹1L Cr",
    title: "Total development commitment",
    body: "One lakh crore rupees committed — making Bandra Bay the single largest coordinated private real estate investment in Indian history.",
  },
];

export default function District() {
  return (
    <div className="sec sec-alt" id="district">
      <p className="ey">The District</p>
      <h2 className="h2">140 acres.<br /><em>One vision.</em></h2>
      <p className="intro">
        Not a single tower. A full urban waterfront district — planned, phased, and permanent.
        The Arabian Sea as your front garden. BKC as your office. South Mumbai as your weekend.
      </p>

      <div className="district-wrap">
        {/* Photo stack */}
        <div className="photo-stack">
          <div className="photo-tall ph-water">
            <div className="photo-lbl">Bandra Bay — Arabian Sea coastline</div>
          </div>
          <div className="photo-pair">
            <div className="photo-sm ph-city">
              <div className="photo-lbl">Sea-facing residences</div>
            </div>
            <div className="photo-sm ph-sea">
              <div className="photo-lbl">140 acres · One address</div>
            </div>
          </div>
        </div>

        {/* Facts */}
        <div className="facts">
          {facts.map((f) => (
            <div className="fact" key={f.num}>
              <div className="fn">{f.num}</div>
              <div>
                <div className="ft">{f.title}</div>
                <p className="fb">{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
