import { useEffect, useState } from "react";
import { PartyPopper } from "lucide-react";
import { QUIZ, QUIZ_RESULTS } from "../data.js";
import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";

const INITIAL = { idx: 0, score: 0, picked: null };

export default function LevelQuiz() {
  const [quiz, setQuiz] = useState(INITIAL);
  const { idx, score, picked } = quiz;
  const item = QUIZ[idx];

  // 답을 고르면 1.3초 뒤 다음 문제로
  useEffect(() => {
    if (picked === null) return;
    const timer = setTimeout(() => setQuiz((q) => ({ ...q, idx: q.idx + 1, picked: null })), 1300);
    return () => clearTimeout(timer);
  }, [picked]);

  const pick = (i) => {
    if (picked !== null) return;
    setQuiz((q) => ({ ...q, picked: i, score: q.score + (i === item.answer ? 1 : 0) }));
  };

  let body;
  if (idx >= QUIZ.length) {
    const result = [...QUIZ_RESULTS].reverse().find((r) => score >= r.min);
    body = (
      <div className="quiz-result">
        <p className="score">{score} <small>/ {QUIZ.length}</small></p>
        <h3>{result.title}</h3>
        <p>{result.text}</p>
        <div className="quiz-result-actions">
          <a href="#curriculum" className="btn btn-ghost">커리큘럼 보기</a>
          <button type="button" className="btn btn-primary" onClick={() => setQuiz(INITIAL)}>다시 풀기</button>
        </div>
      </div>
    );
  } else {
    let feedback = "";
    if (picked !== null) {
      feedback = picked === item.answer ? <>정답입니다! <PartyPopper size={18} aria-hidden="true" /></> : `정답은 “${item.options[item.answer]}”입니다.`;
    }
    body = (
      <>
        <div className="quiz-progress" aria-hidden="true">
          <span style={{ width: `${(idx / QUIZ.length) * 100}%` }}></span>
        </div>
        <p className="quiz-count">문제 {idx + 1} / {QUIZ.length}</p>
        <h3 className="quiz-q">{item.q}</h3>
        {/* 문제마다 버튼을 새로 만들어 이전 문제의 정답 표시가 남지 않게 함 */}
        <div className="quiz-options" key={idx}>
          {item.options.map((o, i) => {
            let cls = "opt";
            if (picked !== null && i === item.answer) cls += " correct";
            else if (picked === i) cls += " wrong";
            return (
              <button key={o} type="button" className={cls} disabled={picked !== null} onClick={() => pick(i)}>
                {o}
              </button>
            );
          })}
        </div>
        <p className="quiz-feedback" aria-live="polite">{feedback}</p>
      </>
    );
  }

  return (
    <section className="section" id="quiz">
      <div className="container narrow">
        <SectionHead eyebrow="Level test" title="1분 레벨 테스트" desc="4문제로 나에게 맞는 시작 단계를 추천해 드립니다." />
        <Reveal className="quiz-card">{body}</Reveal>
      </div>
    </section>
  );
}
