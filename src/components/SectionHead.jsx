import Reveal from "./Reveal.jsx";

export default function SectionHead({ eyebrow, title, desc }) {
  return (
    <Reveal className="section-head">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {desc && <p className="section-desc">{desc}</p>}
    </Reveal>
  );
}
