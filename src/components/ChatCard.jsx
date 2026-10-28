import { useEffect, useState } from "react";
import { HERO_CHATS } from "../data.js";

export default function ChatCard() {
  const [idx, setIdx] = useState(0);
  const chat = HERO_CHATS[idx % HERO_CHATS.length];

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => setIdx((i) => i + 1), 5200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="chat-card">
      <div className="chat-head">
        <span className="dot"></span>
        <span>상담 중 · <b>{chat.topic}</b></span>
      </div>
      <div className="chat-body" aria-live="polite">
        {/* key에 대화 번호를 넣어 대화가 바뀔 때마다 말풍선 애니메이션을 다시 실행 */}
        {chat.messages.map((m, i) => (
          <div key={`${idx}-${i}`} className={`bubble ${m.who}`} lang="en" style={{ animationDelay: `${i * 0.6}s` }}>
            <span className="who">{m.who === "rx" ? "약사" : "Guest"}</span>{m.text}
          </div>
        ))}
      </div>
      <div className="chat-foot">
        {chat.tags.map((t) => <span className="chip" key={t}>#{t}</span>)}
      </div>
    </div>
  );
}
