import { PAINS } from "../data.js";
import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";

export default function WhySection() {
  return (
    <section className="section" id="why">
      <div className="container">
        <SectionHead
          eyebrow="Why now"
          title="약국은 이제 K-뷰티 쇼핑 코스입니다"
          desc={<>
            더마 화장품, 재생 연고, 영양제를 사러 오는 외국인 고객이 늘고 있습니다.
            제품을 건네는 것을 넘어, <b>올바르게 쓰는 법</b>까지 전하는 약사가 선택받습니다.
          </>}
        />
        <div className="pain-grid">
          {PAINS.map((p) => (
            <Reveal as="article" className="card pain" key={p.title}>
              <span className="pain-icon" aria-hidden="true"><p.icon size={26} /></span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
