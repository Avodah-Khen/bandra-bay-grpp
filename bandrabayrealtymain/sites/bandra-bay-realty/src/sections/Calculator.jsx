//sites/bandra-bay-realty/src/sections/Calculator.jsx
import { useState, useCallback } from "react";

const defaults = { budget: 20, years: 5, appreciation: 8, rentalYield: 3 };

function calcResults({ budget: bv, years: yv, appreciation: av, rentalYield: rv }) {
  const ex  = bv * Math.pow(1 + av / 100, yv);
  const cg  = ex - bv;
  const rn  = bv * (rv / 100) * yv;
  const tot = cg + rn;
  return {
    exitValue:      `₹${ex.toFixed(1)} Cr`,
    capitalGain:    `Capital gain: ₹${cg.toFixed(1)} Cr`,
    rentalIncome:   `₹${rn.toFixed(1)} Cr`,
    rentalSubtitle: `Over ${yv} years at ${rv}% yield`,
    totalReturn:    `₹${tot.toFixed(1)} Cr`,
    roi:            `ROI: ${((tot / bv) * 100).toFixed(1)}% over ${yv} years`,
    insight: (
      <>
        At <strong>{av}% annual appreciation</strong> over <strong>{yv} years</strong>,
        a ₹{bv} crore investment generates ~₹{tot.toFixed(1)} crore. The{" "}
        <strong>46% structural upside</strong> means outperformance is the base case.
      </>
    ),
  };
}

function CalcField({ label, id, value, min, max, step = 1, onChange }) {
  return (
    <div className="cf">
      <label>{label}</label>
      <input
        type="number"
        id={id}
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(e) => onChange(+e.target.value || min)}
      />
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(e) => onChange(+e.target.value)}
      />
    </div>
  );
}

export default function Calculator() {
  const [params, setParams] = useState(defaults);
  const set = useCallback((key) => (val) => setParams((p) => ({ ...p, [key]: val })), []);
  const r = calcResults(params);

  return (
    <div className="sec sec-lt" id="returns">
      <p className="ey">Your Returns</p>
      <h2 className="h2">Model your<br /><em>Bandra Bay investment.</em></h2>
      <p className="intro">
        Indicative projections based on Bandra Bay market data and historical waterfront
        appreciation. Not financial advice.
      </p>

      <div className="calc-wrap">
        {/* Inputs */}
        <div className="calc-box">
          <div className="calc-hd">Investment Parameters</div>
          <CalcField label="Budget (₹ Crore)"          id="b"  value={params.budget}       min={12}  max={200} onChange={set("budget")} />
          <CalcField label="Holding Period (Years)"     id="y"  value={params.years}        min={1}   max={20}  onChange={set("years")} />
          <CalcField label="Annual Appreciation (%)"   id="a"  value={params.appreciation} min={3}   max={20}  onChange={set("appreciation")} />
          <CalcField label="Gross Rental Yield (%)"    id="r"  value={params.rentalYield}  min={1}   max={8}   step={0.5} onChange={set("rentalYield")} />
        </div>

        {/* Results */}
        <div>
          <div className="results">
            <div className="res">
              <div className="res-lbl">Property value at exit</div>
              <div className="res-num">{r.exitValue}</div>
              <div className="res-sub">{r.capitalGain}</div>
            </div>
            <div className="res">
              <div className="res-lbl">Cumulative rental income</div>
              <div className="res-num">{r.rentalIncome}</div>
              <div className="res-sub">{r.rentalSubtitle}</div>
            </div>
            <div className="res">
              <div className="res-lbl">Total return</div>
              <div className="res-num">{r.totalReturn}</div>
              <div className="res-sub">{r.roi}</div>
            </div>
          </div>

          <div className="calc-insight">
            <p>{r.insight}</p>
          </div>
          <p className="calc-note">
            Projections are indicative only. Actual returns depend on specific project, floor,
            developer, and market conditions. Consult your advisor before investing.
          </p>
        </div>
      </div>
    </div>
  );
}
