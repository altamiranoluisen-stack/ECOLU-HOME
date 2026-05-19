/* global React */
const { Fragment } = React;

// ============================================================
// Shared building blocks
// ============================================================

const EcoLogo = ({ dark = false, size = 36 }) => (
  <div className={`eco-mark ${dark ? "dark" : ""}`} style={{ fontSize: size }}>
    <svg viewBox="0 0 32 32" style={{ width: size, height: size }}>
      <path className="eco-leaf"
        d="M16 3c-6 0-11 5-11 12 0 4 2 7 5 9 0-6 4-11 10-13-1 4-4 7-7 9 2 1 4 1 6 0 5-2 8-7 8-13-3-2-7-4-11-4z" />
    </svg>
    <span>ECOLU</span>
  </div>
);

const Eyebrow = ({ children, dark = false, accent = "var(--bamboo-500)" }) => (
  <div className="eco-eyebrow" style={{
    display: "inline-flex", alignItems: "center", gap: 14,
    color: dark ? "rgba(251,248,238,0.7)" : "var(--ink-500)",
  }}>
    <span style={{ width: 36, height: 1, background: accent }}></span>
    {children}
  </div>
);

const FscBadge = () => (
  <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "16px 24px",
    border: "1px solid var(--line)", borderRadius: 14, background: "var(--paper)" }}>
    <svg viewBox="0 0 40 40" style={{ width: 38, height: 38 }}>
      <rect x="1" y="1" width="38" height="38" rx="4" fill="none" stroke="var(--forest-800)" strokeWidth="2"/>
      <path d="M10 30 L10 14 C10 10 14 8 18 10 L18 14 C16 13 14 14 14 16 L14 30 Z M22 30 L22 20 L28 20 L28 23 L25 23 L25 30 Z M14 22 L20 22 L20 25 L14 25 Z"
        fill="var(--forest-800)"/>
    </svg>
    <div>
      <div style={{ fontSize: 14, fontFamily: "JetBrains Mono", letterSpacing: "0.16em", color: "var(--ink-500)" }}>FSC®</div>
      <div style={{ fontSize: 22, fontWeight: 700, color: "var(--forest-800)" }}>Certified Bamboo</div>
    </div>
  </div>
);

// L-shaped icon (mini diagram of the product silhouette)
const LShapeIcon = ({ size = 80, color = "var(--forest-800)" }) => (
  <svg viewBox="0 0 60 60" style={{ width: size, height: size }}>
    <path d="M5 5 H55 V30 H30 V55 H5 Z" fill="none" stroke={color} strokeWidth="2.5" strokeLinejoin="round"/>
  </svg>
);

// ============================================================
// IMAGE 1 — Main hero (Amazon main image: clean white)
// ============================================================
const Image01_Hero = () => (
  <div className="eco-art" style={{ background: "#ffffff" }}>
    {/* Soft floor shadow */}
    <div style={{
      position: "absolute", left: "50%", bottom: 180, width: 1100, height: 70,
      transform: "translateX(-50%)", borderRadius: "50%",
      background: "radial-gradient(closest-side, rgba(20,24,15,0.18), transparent 70%)",
      filter: "blur(6px)",
    }}></div>

    {/* Brand top-left */}
    <div style={{ position: "absolute", top: 80, left: 100, display: "flex", flexDirection: "column", gap: 18 }}>
      <EcoLogo size={42} />
      <div className="eco-cap" style={{ fontSize: 16 }}>Designed in USA · Bamboo Series</div>
    </div>

    {/* Title block top-right */}
    <div style={{ position: "absolute", top: 78, right: 100, textAlign: "right" }}>
      <div className="eco-eyebrow" style={{ color: "var(--bamboo-600)" }}>No. 01 · Stair Basket</div>
      <div className="eco-serif" style={{ fontSize: 84, lineHeight: 0.95, marginTop: 14, color: "var(--forest-900)" }}>
        Bamboo Stair<br/>
        <em style={{ color: "var(--bamboo-600)", fontStyle: "italic" }}>Basket</em>
      </div>
      <div className="eco-body" style={{ marginTop: 18, color: "var(--ink-700)" }}>
        L-shaped storage for every step
      </div>
    </div>

    {/* Product photo — color corrected */}
    <img src="images/01-hero.jpg" className="eco-photo-fix"
      style={{
        position: "absolute", left: "50%", top: "50%",
        transform: "translate(-50%, -48%)",
        width: 1280, height: 1280, objectFit: "contain",
      }}
      alt="Ecolu Bamboo Stair Basket" />

    {/* Bottom callouts */}
    <div style={{ position: "absolute", bottom: 90, left: 100, right: 100,
      display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
      <div style={{ display: "flex", gap: 14 }}>
        <div className="eco-pill"><span className="dot"></span>LID + LINER</div>
        <div className="eco-pill"><span className="dot"></span>ROPE HANDLE</div>
        <div className="eco-pill"><span className="dot"></span>FOLDABLE</div>
      </div>
      <div className="eco-mono" style={{ fontSize: 18, color: "var(--ink-500)" }}>
        15½ × 9¼ × 15½ in · 3.5 lb
      </div>
    </div>
  </div>
);

// ============================================================
// IMAGE 2 — The L-shape (fits on stairs)
// ============================================================
const Image02_LShape = () => (
  <div className="eco-art eco-cream">
    {/* Left column: copy */}
    <div style={{ position: "absolute", top: 110, left: 110, width: 660 }}>
      <EcoLogo size={36} />
      <div style={{ marginTop: 60 }}>
        <Eyebrow>The Idea</Eyebrow>
      </div>
      <div className="eco-serif" style={{ fontSize: 132, lineHeight: 0.92, marginTop: 28, color: "var(--forest-900)" }}>
        Made for<br/>
        the <em style={{ color: "var(--bamboo-600)" }}>step.</em>
      </div>
      <div className="eco-body" style={{ marginTop: 36, fontSize: 30, maxWidth: 580 }}>
        An inverted L-shape that tucks neatly into any stairway corner — the
        long side rests on the floor, the short side on the step above.
      </div>

      {/* Mini diagram: stairs + basket */}
      <div style={{ marginTop: 64, position: "relative", width: 560, height: 220 }}>
        {/* steps */}
        <div className="stair-step" style={{ position: "absolute", left: 0, bottom: 0, width: 560, height: 60 }}></div>
        <div className="stair-step" style={{ position: "absolute", left: 0, bottom: 60, width: 380, height: 60 }}></div>
        <div className="stair-step" style={{ position: "absolute", left: 0, bottom: 120, width: 200, height: 60 }}></div>
        {/* basket silhouette */}
        <svg viewBox="0 0 560 220" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <path d="M200 60 L460 60 L460 0 L380 0 L380 30 L200 30 Z"
            fill="var(--bamboo-500)" stroke="var(--forest-800)" strokeWidth="2.5" strokeLinejoin="round"/>
          <line x1="380" y1="0" x2="380" y2="30" stroke="var(--forest-800)" strokeWidth="2.5"/>
        </svg>
        <div className="eco-mono" style={{ position: "absolute", right: 0, top: -28, fontSize: 16, color: "var(--ink-500)" }}>
          ↑ fits naturally
        </div>
      </div>
    </div>

    {/* Right column: product */}
    <div style={{ position: "absolute", top: 80, right: 0, width: 820, height: 1440 }}>
      <img src="images/02-product.jpg" className="eco-photo-fix"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain" }}
        alt="Stair basket detail" />
    </div>

    {/* Bottom band */}
    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "44px 110px",
      borderTop: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "center",
      background: "rgba(251,248,238,0.6)", backdropFilter: "blur(4px)" }}>
      <div className="eco-cap" style={{ fontSize: 18 }}>Tall side · 15½ in</div>
      <div className="eco-cap" style={{ fontSize: 18 }}>Step side · 8¼ in</div>
      <div className="eco-cap" style={{ fontSize: 18 }}>Depth · 9¼ in</div>
    </div>
  </div>
);

// ============================================================
// IMAGE 3 — One basket, many lives (use cases)
// ============================================================
const UseCase = ({ icon, title, desc }) => (
  <div style={{
    padding: "44px 40px", background: "var(--paper)",
    border: "1px solid var(--line)", borderRadius: 24,
    display: "flex", flexDirection: "column", gap: 18, minHeight: 320,
  }}>
    <div style={{ width: 72, height: 72, borderRadius: 16, background: "var(--cream-200)",
      display: "flex", alignItems: "center", justifyContent: "center" }}>
      {icon}
    </div>
    <div style={{ fontFamily: "Instrument Serif", fontSize: 48, color: "var(--forest-900)", lineHeight: 1 }}>{title}</div>
    <div className="eco-body" style={{ fontSize: 22 }}>{desc}</div>
  </div>
);

const Image03_UseCases = () => (
  <div className="eco-art eco-cream">
    <div style={{ position: "absolute", top: 100, left: 110, right: 110 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <Eyebrow>Versatility</Eyebrow>
          <div className="eco-serif" style={{ fontSize: 124, lineHeight: 0.92, marginTop: 22, color: "var(--forest-900)" }}>
            One basket.<br/>
            <em style={{ color: "var(--bamboo-600)" }}>Many lives.</em>
          </div>
        </div>
        <EcoLogo size={36} />
      </div>
      <div className="eco-body" style={{ fontSize: 28, marginTop: 30, maxWidth: 880 }}>
        Books on the way upstairs. Shoes by the door. Towels for the bath.
        Toys at the end of the day. It quietly handles them all.
      </div>
    </div>

    {/* 4-up grid of use cases */}
    <div style={{
      position: "absolute", bottom: 110, left: 110, right: 110,
      display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 24,
    }}>
      <UseCase
        title="Books"
        desc="Magazines, novels, the next chapter waiting on step five."
        icon={<svg viewBox="0 0 48 48" width="40" height="40"><path d="M8 10 H22 V40 H8 Z M26 10 H40 V40 H26 Z" fill="none" stroke="var(--forest-800)" strokeWidth="2.5"/><line x1="12" y1="18" x2="18" y2="18" stroke="var(--forest-800)" strokeWidth="2"/><line x1="30" y1="18" x2="36" y2="18" stroke="var(--forest-800)" strokeWidth="2"/></svg>}
      />
      <UseCase
        title="Shoes"
        desc="A landing spot for the pair you'll wear tomorrow morning."
        icon={<svg viewBox="0 0 48 48" width="40" height="40"><path d="M6 32 L6 24 C12 22 18 18 22 12 L34 16 C36 22 42 26 42 32 Z" fill="none" stroke="var(--forest-800)" strokeWidth="2.5" strokeLinejoin="round"/></svg>}
      />
      <UseCase
        title="Laundry"
        desc="Sort darks and lights — the removable cotton liner lifts out."
        icon={<svg viewBox="0 0 48 48" width="40" height="40"><path d="M14 8 L34 8 L38 40 L10 40 Z" fill="none" stroke="var(--forest-800)" strokeWidth="2.5"/><line x1="14" y1="20" x2="34" y2="20" stroke="var(--forest-800)" strokeWidth="2"/></svg>}
      />
      <UseCase
        title="Toys"
        desc="A lid closes the day. Tomorrow they'll be exactly where you left them."
        icon={<svg viewBox="0 0 48 48" width="40" height="40"><circle cx="16" cy="32" r="8" fill="none" stroke="var(--forest-800)" strokeWidth="2.5"/><rect x="26" y="22" width="16" height="16" fill="none" stroke="var(--forest-800)" strokeWidth="2.5"/><path d="M14 18 L24 8 L34 18" fill="none" stroke="var(--forest-800)" strokeWidth="2.5" strokeLinejoin="round"/></svg>}
      />
    </div>
  </div>
);

// ============================================================
// IMAGE 4 — Dimensions
// ============================================================
const Image04_Dimensions = () => (
  <div className="eco-art" style={{ background: "#ffffff" }}>
    {/* Grid pattern background */}
    <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.5 }}>
      <defs>
        <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(20,24,15,0.05)" strokeWidth="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>

    {/* Header */}
    <div style={{ position: "absolute", top: 100, left: 110, right: 110,
      display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
      <div>
        <Eyebrow>Specifications</Eyebrow>
        <div className="eco-serif" style={{ fontSize: 118, lineHeight: 0.92, marginTop: 22, color: "var(--forest-900)" }}>
          Built to fit,<br/>
          <em style={{ color: "var(--bamboo-600)" }}>down to the inch.</em>
        </div>
      </div>
      <EcoLogo size={36} />
    </div>

    {/* Product with dimension overlays */}
    <div style={{ position: "absolute", left: 180, top: 480, width: 900, height: 900 }}>
      <img src="images/02-product.jpg" className="eco-photo-fix"
        style={{ width: "100%", height: "100%", objectFit: "contain" }} alt="" />

      {/* Dimension labels around */}
      <div style={{ position: "absolute", top: -10, left: "50%", transform: "translateX(-50%)",
        fontFamily: "JetBrains Mono", fontSize: 26, color: "var(--forest-800)",
        display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ width: 60, height: 1, background: "var(--forest-800)" }}></span>
        15½″ wide
        <span style={{ width: 60, height: 1, background: "var(--forest-800)" }}></span>
      </div>
      <div style={{ position: "absolute", right: -40, top: "50%", transform: "translateY(-50%) rotate(90deg)",
        transformOrigin: "center", fontFamily: "JetBrains Mono", fontSize: 26, color: "var(--forest-800)" }}>
        15½″ tall
      </div>
      <div style={{ position: "absolute", left: -50, bottom: 40,
        fontFamily: "JetBrains Mono", fontSize: 26, color: "var(--forest-800)", transform: "rotate(-90deg)", transformOrigin: "left bottom" }}>
        8¼″ short
      </div>
    </div>

    {/* Spec sidebar right */}
    <div style={{ position: "absolute", right: 110, top: 480, width: 380,
      display: "flex", flexDirection: "column", gap: 0 }}>
      {[
        ["Overall", "15½ × 9¼ × 15½ in"],
        ["Long compartment", "8¼ in deep"],
        ["Step (short) side", "7¼ in"],
        ["Handle drop", "7¼ in"],
        ["Weight", "3.5 lb · lightweight"],
        ["Material", "100% natural bamboo"],
        ["Liner", "Removable cotton"],
        ["Closure", "Foldable dual lid"],
      ].map(([k, v], i) => (
        <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline",
          padding: "22px 0", borderBottom: "1px solid var(--line)" }}>
          <span className="eco-cap" style={{ fontSize: 14 }}>{k}</span>
          <span style={{ fontFamily: "Manrope", fontWeight: 700, fontSize: 22, color: "var(--ink-900)", textAlign: "right" }}>{v}</span>
        </div>
      ))}
    </div>
  </div>
);

// ============================================================
// IMAGE 5 — Premium Features (2x2 grid using actual product detail shots)
// ============================================================
const FeatureCell = ({ src, crop, label, sub }) => (
  <div style={{ position: "relative", borderRadius: 24, overflow: "hidden", background: "#f4ecd6" }}>
    <img src={src} className="eco-photo-fix"
      style={{
        position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover",
        objectPosition: crop || "center",
      }} alt="" />
    <div style={{ position: "absolute", left: 0, right: 0, bottom: 0,
      padding: "70px 40px 36px",
      background: "linear-gradient(to top, rgba(20,24,15,0.85), transparent)",
      color: "var(--cream-100)" }}>
      <div className="eco-cap" style={{ color: "rgba(251,248,238,0.7)", fontSize: 14 }}>{sub}</div>
      <div className="eco-serif" style={{ fontSize: 56, marginTop: 8, lineHeight: 1 }}>{label}</div>
    </div>
  </div>
);

const Image05_Features = () => (
  <div className="eco-art eco-cream">
    <div style={{ position: "absolute", top: 100, left: 110, right: 110,
      display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
      <div>
        <Eyebrow>Crafted Details</Eyebrow>
        <div className="eco-serif" style={{ fontSize: 110, lineHeight: 0.92, marginTop: 22, color: "var(--forest-900)" }}>
          Considered, <em style={{ color: "var(--bamboo-600)" }}>cleanly.</em>
        </div>
      </div>
      <EcoLogo size={36} />
    </div>

    <div style={{ position: "absolute", top: 460, left: 110, right: 110, bottom: 110,
      display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: 28 }}>
      <FeatureCell src="images/04-features-grid.jpg" crop="0% 0%" sub="Cotton interior" label="Removable liner" />
      <FeatureCell src="images/04-features-grid.jpg" crop="100% 0%" sub="Privacy" label="Folding dual lid" />
      <FeatureCell src="images/04-features-grid.jpg" crop="0% 100%" sub="Closure" label="Twin compartments" />
      <FeatureCell src="images/04-features-grid.jpg" crop="100% 100%" sub="Build quality" label="Scratch-free base" />
    </div>
  </div>
);

// ============================================================
// IMAGE 6 — Setup in 60 seconds (6 steps)
// ============================================================
const StepCard = ({ n, title, src, crop }) => (
  <div style={{ background: "var(--paper)", borderRadius: 22, overflow: "hidden",
    border: "1px solid var(--line)", display: "flex", flexDirection: "column" }}>
    <div style={{ position: "relative", flex: 1, background: "#fff" }}>
      <img src={src} className="eco-photo-fix"
        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: crop }} alt="" />
      <div style={{ position: "absolute", top: 18, left: 18,
        width: 56, height: 56, borderRadius: "50%",
        background: "var(--forest-800)", color: "var(--cream-100)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "JetBrains Mono", fontSize: 22, fontWeight: 700 }}>
        {n}
      </div>
    </div>
    <div style={{ padding: "22px 26px", borderTop: "1px solid var(--line)" }}>
      <div style={{ fontFamily: "Manrope", fontWeight: 700, fontSize: 22, color: "var(--ink-900)" }}>{title}</div>
    </div>
  </div>
);

const Image06_Setup = () => (
  <div className="eco-art eco-cream-strong">
    <div style={{ position: "absolute", top: 100, left: 110, right: 110,
      display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
      <div>
        <Eyebrow>Setup</Eyebrow>
        <div className="eco-serif" style={{ fontSize: 118, lineHeight: 0.92, marginTop: 22, color: "var(--forest-900)" }}>
          Open the box.<br/>
          <em style={{ color: "var(--bamboo-600)" }}>You're done in a minute.</em>
        </div>
      </div>
      <div style={{ textAlign: "right" }}>
        <EcoLogo size={36} />
        <div className="eco-mono" style={{ marginTop: 12, fontSize: 18, color: "var(--ink-500)" }}>
          ≈ 60 seconds · no tools
        </div>
      </div>
    </div>

    <div style={{ position: "absolute", top: 480, left: 110, right: 110, bottom: 110,
      display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "1fr 1fr", gap: 28 }}>
      <StepCard n="01" title="Unfold the bamboo frame" src="images/08-setup-steps.jpg" crop="16% 18%" />
      <StepCard n="02" title="Slide in the support rails" src="images/08-setup-steps.jpg" crop="84% 18%" />
      <StepCard n="03" title="Drop in the wooden base" src="images/08-setup-steps.jpg" crop="16% 50%" />
      <StepCard n="04" title="Fit the cotton liner" src="images/08-setup-steps.jpg" crop="84% 50%" />
      <StepCard n="05" title="Tie the corner bows" src="images/08-setup-steps.jpg" crop="16% 84%" />
      <StepCard n="06" title="Place by the stairs" src="images/08-setup-steps.jpg" crop="84% 84%" />
    </div>
  </div>
);

// ============================================================
// IMAGE 7 — Family lifestyle ("A quiet helper at home")
// ============================================================
const Image07_Lifestyle = () => (
  <div className="eco-art" style={{ background: "#ffffff" }}>
    {/* Big photo left */}
    <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 980 }}>
      <img src="images/03-mom-daughter.jpg" className="eco-photo-fix-warm"
        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "30% center" }} alt="" />
      {/* small ECOLU badge bottom-left */}
      <div style={{ position: "absolute", bottom: 60, left: 60,
        padding: "18px 28px", background: "rgba(251,248,238,0.92)",
        borderRadius: 999, backdropFilter: "blur(6px)" }}>
        <EcoLogo size={28} />
      </div>
    </div>

    {/* Right column */}
    <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 620,
      padding: "120px 80px", background: "var(--cream-100)",
      display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <div>
        <Eyebrow>At home</Eyebrow>
        <div className="eco-serif" style={{ fontSize: 96, lineHeight: 0.95, marginTop: 28, color: "var(--forest-900)" }}>
          A quiet<br/>
          helper for<br/>
          <em style={{ color: "var(--bamboo-600)" }}>busy days.</em>
        </div>
        <div className="eco-body" style={{ marginTop: 36, fontSize: 26 }}>
          Tucks into the stairs so the laundry, the toys and the homework
          never crowd the hallway again.
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        {[
          ["Stairs stay clear", "Designed to sit on the step, not block the path."],
          ["Kid-friendly", "Light enough for little hands to help carry."],
          ["Blends in", "Natural bamboo plays well with any palette."],
        ].map(([t, d], i) => (
          <div key={i} style={{ display: "flex", gap: 22, alignItems: "flex-start" }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--bamboo-600)", marginTop: 14 }}></div>
            <div>
              <div style={{ fontFamily: "Manrope", fontWeight: 700, fontSize: 24, color: "var(--ink-900)" }}>{t}</div>
              <div className="eco-body" style={{ fontSize: 20, marginTop: 4 }}>{d}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ============================================================
// IMAGE 8 — Sustainability / Materials
// ============================================================
const Image08_Sustainability = () => (
  <div className="eco-art eco-forest">
    {/* Subtle bamboo silhouette */}
    <svg style={{ position: "absolute", right: -100, top: -50, width: 700, height: 1700, opacity: 0.08 }} viewBox="0 0 200 500">
      <g stroke="#9bb088" strokeWidth="2" fill="none">
        <line x1="40" y1="0" x2="40" y2="500" />
        <line x1="100" y1="0" x2="100" y2="500" />
        <line x1="160" y1="0" x2="160" y2="500" />
        {[60,140,220,300,380,460].map((y,i) => <line key={i} x1="20" y1={y} x2="180" y2={y} />)}
      </g>
    </svg>

    <div style={{ position: "absolute", top: 110, left: 110, right: 110,
      display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
      <EcoLogo size={36} dark />
      <div className="eco-eyebrow" style={{ color: "rgba(251,248,238,0.6)" }}>
        <span style={{ display: "inline-block", width: 36, height: 1, background: "var(--bamboo-500)", marginRight: 14, verticalAlign: "middle" }}></span>
        Materials & Origin
      </div>
    </div>

    <div style={{ position: "absolute", top: 280, left: 110, right: 110 }}>
      <div className="eco-serif" style={{ fontSize: 168, lineHeight: 0.9, color: "var(--cream-100)" }}>
        Grown in<br/>
        <em style={{ color: "var(--bamboo-500)" }}>five years.</em><br/>
        Lasts for<br/>
        <em style={{ color: "var(--bamboo-500)" }}>many.</em>
      </div>
    </div>

    {/* Three pillars at bottom */}
    <div style={{ position: "absolute", bottom: 110, left: 110, right: 110,
      display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32 }}>
      {[
        {
          title: "100% bamboo",
          desc: "Fast-growing, renewable, naturally resilient. No plastic frame, no synthetic core.",
          icon: <svg viewBox="0 0 40 40" width="36" height="36" stroke="var(--bamboo-500)" strokeWidth="2" fill="none">
            <line x1="20" y1="4" x2="20" y2="36"/><line x1="10" y1="14" x2="30" y2="14"/><line x1="10" y1="26" x2="30" y2="26"/>
          </svg>,
        },
        {
          title: "FSC® certified",
          desc: "Sourced from responsibly managed forests with verified chain-of-custody.",
          icon: <svg viewBox="0 0 40 40" width="36" height="36" stroke="var(--bamboo-500)" strokeWidth="2" fill="none">
            <path d="M20 4 L34 12 L34 24 C34 32 28 36 20 36 C12 36 6 32 6 24 L6 12 Z"/><path d="M14 20 L18 24 L26 16"/>
          </svg>,
        },
        {
          title: "Recyclable packaging",
          desc: "Cardboard outer, paper inserts. No foam, no plastic clamshell.",
          icon: <svg viewBox="0 0 40 40" width="36" height="36" stroke="var(--bamboo-500)" strokeWidth="2" fill="none">
            <path d="M12 12 L20 4 L28 12"/><path d="M28 28 L20 36 L12 28"/><path d="M4 20 L20 20"/>
          </svg>,
        },
      ].map((p, i) => (
        <div key={i} style={{ padding: "36px 0", borderTop: "1px solid rgba(251,248,238,0.18)" }}>
          {p.icon}
          <div className="eco-serif" style={{ fontSize: 48, color: "var(--cream-100)", marginTop: 16, lineHeight: 1 }}>{p.title}</div>
          <div className="eco-body" style={{ fontSize: 20, marginTop: 14, color: "rgba(251,248,238,0.75)" }}>{p.desc}</div>
        </div>
      ))}
    </div>
  </div>
);

// ============================================================
// IMAGE 9 — Why ECOLU + What's in the box
// ============================================================
const Image09_Brand = () => (
  <div className="eco-art eco-cream">
    <div style={{ position: "absolute", top: 100, left: 110, right: 110,
      display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
      <EcoLogo size={42} />
      <div className="eco-eyebrow">Est. 2023 · USA design</div>
    </div>

    {/* Big claim */}
    <div style={{ position: "absolute", top: 260, left: 110, width: 900 }}>
      <Eyebrow>The Promise</Eyebrow>
      <div className="eco-serif" style={{ fontSize: 132, lineHeight: 0.92, marginTop: 26, color: "var(--forest-900)" }}>
        Functional.<br/>
        Elegant.<br/>
        <em style={{ color: "var(--bamboo-600)" }}>Sustainable.</em>
      </div>
      <div className="eco-body" style={{ fontSize: 28, marginTop: 36, maxWidth: 800 }}>
        We make quiet objects that make small rooms work better.
        The Stair Basket is the first piece in our Bamboo Series — built
        to live with you for years, not seasons.
      </div>
    </div>

    {/* Product image right */}
    <div style={{ position: "absolute", top: 240, right: 60, width: 540, height: 540 }}>
      <img src="images/01-hero.jpg" className="eco-photo-fix"
        style={{ width: "100%", height: "100%", objectFit: "contain" }} alt="" />
    </div>

    {/* What's in the box */}
    <div style={{ position: "absolute", bottom: 110, left: 110, right: 110,
      padding: "44px 48px", background: "var(--paper)", borderRadius: 28, border: "1px solid var(--line)",
      display: "flex", alignItems: "center", gap: 48 }}>
      <div>
        <div className="eco-cap" style={{ fontSize: 14 }}>In the box</div>
        <div className="eco-serif" style={{ fontSize: 54, lineHeight: 1, marginTop: 8, color: "var(--forest-900)" }}>
          Everything you need.
        </div>
      </div>
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 18 }}>
        {[
          ["01", "Bamboo body"],
          ["02", "Wooden base"],
          ["03", "Cotton liner"],
          ["04", "Fold-out lid"],
        ].map(([n, t], i) => (
          <div key={i} style={{ padding: "18px 22px", borderLeft: "2px solid var(--bamboo-500)" }}>
            <div className="eco-mono" style={{ fontSize: 14, color: "var(--bamboo-600)" }}>{n}</div>
            <div style={{ fontFamily: "Manrope", fontWeight: 700, fontSize: 22, color: "var(--ink-900)", marginTop: 4 }}>{t}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ============================================================
// Mount everything inside the design canvas
// ============================================================
const App = () => (
  <DesignCanvas>
    <DCSection id="amazon" title="Amazon Listing — ECOLU Stair Basket Bamboo">
      <DCArtboard id="img-01" label="01 · Main Hero" width={1600} height={1600}><Image01_Hero /></DCArtboard>
      <DCArtboard id="img-02" label="02 · The L-Shape" width={1600} height={1600}><Image02_LShape /></DCArtboard>
      <DCArtboard id="img-03" label="03 · One Basket, Many Lives" width={1600} height={1600}><Image03_UseCases /></DCArtboard>
      <DCArtboard id="img-04" label="04 · Dimensions" width={1600} height={1600}><Image04_Dimensions /></DCArtboard>
      <DCArtboard id="img-05" label="05 · Crafted Details" width={1600} height={1600}><Image05_Features /></DCArtboard>
      <DCArtboard id="img-06" label="06 · Setup in 60 Seconds" width={1600} height={1600}><Image06_Setup /></DCArtboard>
      <DCArtboard id="img-07" label="07 · Lifestyle" width={1600} height={1600}><Image07_Lifestyle /></DCArtboard>
      <DCArtboard id="img-08" label="08 · Sustainability" width={1600} height={1600}><Image08_Sustainability /></DCArtboard>
      <DCArtboard id="img-09" label="09 · The Promise" width={1600} height={1600}><Image09_Brand /></DCArtboard>
    </DCSection>
  </DesignCanvas>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
