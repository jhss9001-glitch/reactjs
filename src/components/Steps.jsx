import { STEPS } from "../data.js";
import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";

export default function Steps() {
  return (
    <section className="section section-tint">
      <div className="container">
        <SectionHead eyebrow="How you learn" title="듣고, 따라 하고, 롤플레이로 완성" />
        <ol className="steps">
          {STEPS.map((s, i) => (
            <Reveal as="li" className="step" key={s.title}>
              <span className="step-num">STEP {i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
