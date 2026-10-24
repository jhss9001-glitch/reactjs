import { CURRICULUM } from "../data.js";
import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";

const sumMin = (m) => m.lessons.reduce((s, l) => s + l.min, 0);
const total = CURRICULUM.reduce((n, m) => n + m.lessons.length, 0);
const totalMin = CURRICULUM.reduce((n, m) => n + sumMin(m), 0);
const SUMMARY =
  `총 ${CURRICULUM.length}개 챕터 · ${total}강 · 약 ${Math.floor(totalMin / 60)}시간 ${totalMin % 60}분. 모든 레슨은 영어·중국어·일본어 버전으로 제공됩니다.`;

export default function Curriculum() {
  return (
    <section className="section" id="curriculum">
      <div className="container">
        <SectionHead eyebrow="Curriculum" title="약국 현장에서 거꾸로 설계한 커리큘럼" desc={SUMMARY} />
        <div className="curriculum">
          {CURRICULUM.map((m, i) => (
            <Reveal as="details" className="module" open={i === 0} key={m.title}>
              <summary>
                <span className="mod-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="mod-title">
                  <b>{m.title}</b>
                  <small>{m.desc}</small>
                </span>
                <span className="mod-meta">{m.lessons.length}강 · {sumMin(m)}분</span>
              </summary>
              <ol className="lessons">
                {m.lessons.map((l) => <li key={l.t}><span>{l.t}</span><time>{l.min}분</time></li>)}
              </ol>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
