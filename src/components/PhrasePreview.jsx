import { Volume2 } from "lucide-react";
import { useState } from "react";
import { PHRASE_CATEGORIES, PHRASES } from "../data.js";
import { useToast } from "../context/ToastContext.jsx";
import { speak } from "../utils/speak.js";
import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";

export default function PhrasePreview() {
  const toast = useToast();
  const [cat, setCat] = useState("all");

  const list = PHRASES.filter((p) => cat === "all" || p.cat === cat);

  const onSpeak = (p) => {
    if (!speak(p.en, "en-US")) toast("이 브라우저는 음성 읽기를 지원하지 않습니다.");
  };

  const onCopy = async (p) => {
    try {
      await navigator.clipboard.writeText(`${p.en}\n(${p.ko})`);
      toast("표현을 복사했습니다.");
    } catch {
      toast("복사에 실패했습니다. 직접 선택해 복사해 주세요.");
    }
  };

  return (
    <section className="section" id="preview">
      <div className="container">
        <SectionHead
          eyebrow="Free preview"
          title="오늘 바로 쓰는 영어 복약지도 표현"
          desc="상황을 고르고, 원어민 발음(브라우저 음성)으로 들어보세요."
        />

        <Reveal className="preview-toolbar">
          <div className="seg" role="tablist" aria-label="상황 분류">
            {PHRASE_CATEGORIES.map((c) => (
              <button key={c.id} type="button" role="tab" aria-selected={c.id === cat} onClick={() => setCat(c.id)}>
                {c.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="phrase-grid" aria-live="polite">
          {list.map((p) => (
            <article className="card phrase" key={p.situation}>
              <p className="situation">{p.situation}</p>
              <p className="foreign" lang="en">{p.en}</p>
              <p className="ko">{p.ko}</p>
              <div className="phrase-actions">
                <button type="button" className="chip-btn" onClick={() => onSpeak(p)}><Volume2 size={16} aria-hidden="true" /> 듣기</button>
                <button type="button" className="chip-btn" onClick={() => onCopy(p)}>복사</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
