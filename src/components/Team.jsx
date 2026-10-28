import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TEAM } from "../data.js";
import Portrait from "./Portrait.jsx";
import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";

// 모션 줄이기 설정이면 자동 넘김 없이 버튼으로만 이동
const plugins = () => matchMedia("(prefers-reduced-motion: reduce)").matches
  ? []
  : [Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true })];

export default function Team() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" }, plugins());
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="section" id="team">
      <div className="container">
        <SectionHead
          eyebrow="Team"
          title="현장과 교육을 아는 강사진"
          desc="약국 실무, 현지 회화, 영어 교육 전문가가 함께 강의를 만듭니다."
        />
        <Reveal className="carousel" role="region" aria-roledescription="carousel" aria-label="강사 소개">
          <div className="embla" ref={emblaRef}>
            <div className="embla-track">
              {TEAM.map((m, i) => (
                <div
                  className={`embla-slide${i === selected ? " is-active" : ""}`}
                  key={m.name}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} / ${TEAM.length}`}
                >
                  <article className="card member">
                    <div className="member-head">
                      <div>
                        <h3>{m.name}</h3>
                        <p className="member-role">{m.role}</p>
                      </div>
                      <Portrait look={m.look} label={`${m.name} 강사 일러스트`} />
                    </div>
                    <ul className="career">
                      {m.career.map((c) => <li key={c}>{c}</li>)}
                    </ul>
                    <blockquote className="member-quote">“{m.quote}”</blockquote>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-controls">
            <button type="button" className="icon-btn" aria-label="이전 강사" onClick={prev}><ChevronLeft aria-hidden="true" /></button>
            <div className="dots">
              {TEAM.map((m, i) => (
                <button
                  key={m.name}
                  type="button"
                  aria-label={`${m.name} 강사 보기`}
                  aria-current={i === selected}
                  onClick={() => emblaApi?.scrollTo(i)}
                />
              ))}
            </div>
            <button type="button" className="icon-btn" aria-label="다음 강사" onClick={next}><ChevronRight aria-hidden="true" /></button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
