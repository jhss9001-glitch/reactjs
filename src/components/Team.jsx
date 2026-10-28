import { TEAM } from "../data.js";
import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";

export default function Team() {
  return (
    <section className="section" id="team">
      <div className="container">
        <SectionHead
          eyebrow="Team"
          title="현장과 교육을 아는 강사진"
          desc="약국 실무, 현지 회화, 영어 교육 전문가가 함께 강의를 만듭니다."
        />
        <div className="team-grid">
          {TEAM.map((m) => (
            <Reveal as="article" className="card member" key={m.name}>
              <div className="member-head">
                <span className="avatar" aria-hidden="true"><m.icon size={28} /></span>
                <div>
                  <h3>{m.name}</h3>
                  <p className="member-role">{m.role}</p>
                </div>
              </div>
              <ul className="career">
                {m.career.map((c) => <li key={c}>{c}</li>)}
              </ul>
              <blockquote className="member-quote">“{m.quote}”</blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
