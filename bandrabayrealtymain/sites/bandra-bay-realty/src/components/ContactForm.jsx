import { useState } from "react";
import { SITE_CONFIG } from "../config/formConfig";
import { submitToGoogleForm } from "../../../shared/services/formService";

const promises = [
  "Priority access to all 11 developer projects with live pricing",
  "Dedicated advisor — no call centres, no generic follow-ups",
  "RERA documents, title verification and legal advisory included",
  "NRI remote buying — complete entire process without visiting Mumbai",
  "Zero brokerage from buyer — developer-funded advisory",
  "Response within 4 hours by WhatsApp, call, or video",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [botField, setBotField] = useState("");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    buyerType: "Indian Resident",
    budget: "₹10 Cr – ₹15 Cr",
    developer: "No preference — show all",
    purpose: "Own use — primary home",
  });

  const set = (k) => (e) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const { form: formConfig } = SITE_CONFIG;

  // Validators
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isValidPhone = (phone) =>
    /^[6-9]\d{9}$/.test(phone);

  const sanitize = (str) => str.trim();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // bot protection
    if (botField) return;

    // prevent spam click
    if (loading || submitted) return;

    // sanitize input
    const cleaned = {
      ...form,
      firstName: sanitize(form.firstName),
      lastName: sanitize(form.lastName),
      email: sanitize(form.email),
      phone: sanitize(form.phone),
    };

    // validations
    if (cleaned.firstName.length < 2) {
      alert("Enter a valid first name");
      return;
    }

    if (!isValidEmail(cleaned.email)) {
      alert("Enter a valid email");
      return;
    }

    if (!isValidPhone(cleaned.phone)) {
      alert("Enter a valid Indian phone number");
      return;
    }

    try {
      setLoading(true);

      // optional timeout wrapper (fails silently otherwise)
      const timeout = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Timeout")), 7000)
      );

      await Promise.race([
        submitToGoogleForm(cleaned, formConfig),
        timeout,
      ]);

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sec sec-dk" id="contact">
      <div className="form-wrap">

        {/* LEFT */}
        <div>
          <p className="ey-lt">Register Now</p>
          <h2 className="fl-h2">
            The bay<br />won't wait.<br /><em>Neither should you.</em>
          </h2>

          <p className="fl-p">
            Register today for exclusive access to project portfolios, pricing,
            floor plans, and payment schedules before they reach the open market.
          </p>

          <div className="promises">
            {promises.map((p) => (
              <div className="promise" key={p}>
                <div className="pck">✓</div>
                <p className="ptx">{p}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <div className="fbox">
            <div className="fbox-h">Request a Private Briefing</div>
            <div className="fbox-s">
              Confidential · No obligation · 4-hour response guaranteed
            </div>

            {submitted ? (
              <div style={{ padding: "40px 0", textAlign: "center" }}>
                <div style={{ fontSize: 22, marginBottom: 10 }}>
                  Thank you for registering.
                </div>
                <p style={{ fontSize: 14 }}>
                  Our advisory team will be in touch within 4 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>

                {/* Better honeypot */}
                <input
                  type="text"
                  name="company"
                  value={botField}
                  onChange={(e) => setBotField(e.target.value)}
                  style={{ position: "absolute", left: "-9999px" }}
                  autoComplete="off"
                  tabIndex="-1"
                />

                <div className="ff2">
                  <div className="ff">
                    <label>First Name</label>
                    <input required value={form.firstName} onChange={set("firstName")} />
                  </div>

                  <div className="ff">
                    <label>Last Name</label>
                    <input required value={form.lastName} onChange={set("lastName")} />
                  </div>
                </div>

                <div className="ff">
                  <label>Email</label>
                  <input type="email" required value={form.email} onChange={set("email")} />
                </div>

                <div className="ff">
                  <label>Phone</label>
                  <input required value={form.phone} onChange={set("phone")} />
                </div>

                <div className="ff2">
                  <div className="ff">
                    <label>Buyer Type</label>
                    <select value={form.buyerType} onChange={set("buyerType")}>
                      <option>Indian Resident</option>
                      <option>NRI — UAE</option>
                      <option>NRI — UK</option>
                      <option>NRI — USA / Canada</option>
                      <option>NRI — Singapore</option>
                      <option>NRI — Australia</option>
                      <option>Institutional</option>
                    </select>
                  </div>

                  <div className="ff">
                    <label>Budget</label>
                    <select value={form.budget} onChange={set("budget")}>
                      <option>₹10 Cr – ₹15 Cr</option>
                      <option>₹15 Cr – ₹25 Cr</option>
                      <option>₹25 Cr – ₹50 Cr</option>
                      <option>₹50 Cr+</option>
                    </select>
                  </div>
                </div>

                <div className="ff">
                  <label>Developer</label>
                  <select value={form.developer} onChange={set("developer")}>
                    <option>No preference — show all</option>
                    <option>Adani Realty</option>
                    <option>Hiranandani</option>
                    <option>Oberoi Realty</option>
                    <option>Godrej Properties</option>
                    <option>L&T Realty</option>
                    <option>Wadhwa Group</option>
                    <option>DLH</option>
                    <option>Inspira</option>
                  </select>
                </div>

                <div className="ff">
                  <label>Purpose</label>
                  <select value={form.purpose} onChange={set("purpose")}>
                    <option>Own use — primary home</option>
                    <option>Own use — second home</option>
                    <option>Investment — rental yield</option>
                    <option>Investment — capital appreciation</option>
                    <option>Mixed use &amp; invest</option>
                  </select>
                </div>

                <button className="sub-btn" disabled={loading}>
                  {loading ? "Submitting..." : "Register My Interest →"}
                </button>

                <p className="ffine">
                  We never share your details.
                </p>

              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}