const headers = ["Address", "Bandra Bay", "Palm Jumeirah", "Marina Bay, SG", "Worli, Mumbai"];

const rows = [
  { label: "Price per sq. ft.",       cols: [{ text: "₹81k → ₹1.5L", cls: "win" }, { text: "AED 3,000+" }, { text: "SGD 3,500+" }, { text: "₹1.2L" }] },
  { label: "Appreciation potential",  cols: [{ text: "46% upside", cls: "win" },    { text: "At peak" },    { text: "At peak" },    { text: "3.6% CAGR" }] },
  { label: "Open to Indian buyers",   cols: [{ text: "Fully open", cls: "yes" },    { text: "Restrictions", cls: "noo" }, { text: "Caps apply", cls: "noo" }, { text: "Yes", cls: "yes" }] },
  { label: "Currency risk (Indians)", cols: [{ text: "Zero — INR", cls: "yes" },    { text: "AED exposure", cls: "noo" }, { text: "SGD exposure", cls: "noo" }, { text: "Zero", cls: "yes" }] },
  { label: "Infrastructure",          cols: [{ text: "Accelerating", cls: "win" },  { text: "Complete" },   { text: "Complete" },   { text: "Mature" }] },
  { label: "Entry timing",            cols: [{ text: "Early stage", cls: "win" },   { text: "Window closed" }, { text: "Window closed" }, { text: "Mature" }] },
];

export default function Comparison() {
  return (
    <div className="sec sec-alt">
      <p className="ey">Global Context</p>
      <h2 className="h2">How Bandra Bay<br /><em>compares globally.</em></h2>
      <p className="intro">
        Bandra Bay is where Palm Jumeirah was in 2002. Every great waterfront had this window
        — and all rewarded early conviction.
      </p>

      <div className="ctable-wrap">
        <div className="ctable">
          <div className="cth">
            {headers.map((h, i) => <span key={i}>{h}</span>)}
          </div>
          {rows.map((row) => (
            <div className="ctr" key={row.label}>
              <span>{row.label}</span>
              {row.cols.map((c, i) => (
                <span key={i} className={c.cls || ""}>{c.text}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
