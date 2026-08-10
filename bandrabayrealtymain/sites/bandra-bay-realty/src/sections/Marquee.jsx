const items = [
  "Adani Realty", "Hiranandani Communities", "Oberoi Realty",
  "Godrej Properties", "L&T Realty", "Wadhwa Group",
  "Sea-facing Residences", "From ₹12 Crore", "RERA Registered", "NRI Friendly",
];

export default function Marquee() {
  // Duplicate for seamless loop
  const all = [...items, ...items];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="mtrack">
        {all.map((item, i) => (
          <span key={i}>
            {item}
            <span className="dot"> · </span>
          </span>
        ))}
      </div>
    </div>
  );
}
