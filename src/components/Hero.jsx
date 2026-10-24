import { CURRICULUM, LANGS } from "../data.js";
import ChatCard from "./ChatCard.jsx";
import Reveal from "./Reveal.jsx";

const lessons = CURRICULUM.reduce((n, m) => n + m.lessons.length, 0);
const minutes = CURRICULUM.reduce((n, m) => n + m.lessons.reduce((s, l) => s + l.min, 0), 0);
const STATS = [
  { num: LANGS.length, unit: "개 국어", label: "EN · ZH · JA" },
  { num: lessons, unit: "강", label: "상황별 레슨" },
  { num: Math.round(minutes / 60), unit: "시간+", label: "실전 콘텐츠" },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <Reveal className="hero-copy">
          <p className="eyebrow">K-Beauty × Pharmacy · English · 中文 · 日本語</p>
          <h1>
            K-뷰티를 찾아온 외국인 고객,<br />
            <span className="hl">약사의 한마디</span>가<br />
            신뢰를 만듭니다.
          </h1>
          <p className="lead">
            레티놀 크림의 사용 시간, 여드름 연고의 주의사항, 영양제 복용 시점까지.
            약국에서 실제로 쓰는 표현만 골라 <strong>3개 국어 복약지도</strong>를 연습합니다.
          </p>
          <div className="hero-cta">
            <a href="#apply" className="btn btn-primary">얼리버드로 시작하기</a>
            <a href="#preview" className="btn btn-ghost">무료 표현 들어보기 ▶</a>
          </div>
          <ul className="hero-stats" aria-label="강의 구성 요약">
            {STATS.map((s) => (
              <li key={s.label}><b>{s.num}<small>{s.unit}</small></b><span>{s.label}</span></li>
            ))}
          </ul>
        </Reveal>

        {/* 상담 대화 목업 */}
        <Reveal className="hero-visual" aria-label="외국인 고객 상담 예시">
          <ChatCard />
          <div className="float-badge badge-1">🧴 성분 상담</div>
          <div className="float-badge badge-2">💊 복약지도</div>
        </Reveal>
      </div>
    </section>
  );
}
