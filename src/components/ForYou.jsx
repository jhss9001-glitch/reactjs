import { TARGETS } from "../data.js";
import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";

export default function ForYou() {
  return (
    <section className="section">
      <div className="container narrow">
        <SectionHead eyebrow="For you" title="이런 약사님께 추천합니다" />
        <Reveal as="ul" className="check-list">
          {TARGETS.map((t) => <li key={t}>{t}</li>)}
        </Reveal>
      </div>
    </section>
  );
}
