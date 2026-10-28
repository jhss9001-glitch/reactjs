import { useId } from "react";

/* 팔짱 낀 강사 일러스트. look = { hair: "long" | "bob" | "short", top: 옷 색, coat: 약사 가운, glasses } */
const SKIN = "#f1c9a8";
const HAIR = "#2b2124";
const COAT = "#fbfbfb";
const COAT_LINE = "#d6cdd0";

const BACK_HAIR = {
  long: "M34 54 C34 30 46 22 60 22 C74 22 86 30 86 54 L88 102 L32 102 Z",
  bob: "M35 54 C35 30 46 23 60 23 C74 23 85 30 85 54 L86 78 C78 82 42 82 34 78 Z",
};
const FRONT_HAIR = {
  long: "M39 52 C38 33 49 27 60 27 C72 27 82 33 82 52 C76 42 67 37 57 38 C49 39 43 45 39 52 Z",
  bob: "M39 52 C38 33 49 27 60 27 C72 27 82 33 82 52 C76 42 67 37 57 38 C49 39 43 45 39 52 Z",
  short: "M38 50 C37 30 49 24 61 24 C74 24 83 31 82 50 C80 41 74 36 64 36 C54 36 44 40 38 50 Z",
};

export default function Portrait({ look, label }) {
  const clip = useId();
  const sleeve = look.coat ? COAT : look.top;
  const arm = (x1, y1, x2, y2) => (
    <>
      {/* 몸통과 같은 색이어도 팔이 구분되도록 테두리를 먼저 그림 */}
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={look.coat ? COAT_LINE : "rgba(0, 0, 0, .3)"} strokeWidth="19.5" strokeLinecap="round" />
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={sleeve} strokeWidth="17" strokeLinecap="round" />
      <circle cx={x2 + (x2 > x1 ? 2 : -2)} cy={y2} r="7" fill={SKIN} />
    </>
  );

  return (
    <svg className="portrait" viewBox="0 0 120 140" role="img" aria-label={label}>
      <clipPath id={clip}><rect width="120" height="140" rx="22" /></clipPath>
      <g clipPath={`url(#${clip})`}>
        <rect width="120" height="140" fill="var(--primary-soft)" />
        {BACK_HAIR[look.hair] && <path d={BACK_HAIR[look.hair]} fill={HAIR} />}

        {/* 상체 */}
        <path
          d="M14 140 C14 104 32 90 60 90 C88 90 106 104 106 140 Z"
          fill={look.coat ? COAT : look.top}
          stroke={look.coat ? COAT_LINE : "none"}
        />
        <rect x="52" y="70" width="16" height="23" rx="6" fill={SKIN} />
        {look.coat ? (
          <>
            {/* 가운 안의 셔츠와 옷깃, 명찰, 펜 */}
            <path d="M48 91 L60 115 L72 91 Z" fill={look.top} />
            <path d="M47 91 L57 114 M73 91 L63 114" stroke={COAT_LINE} strokeWidth="2" fill="none" />
            <rect x="74" y="96" width="14" height="6" rx="1.5" fill="var(--primary)" />
            <path d="M39 94 L39 103" stroke="var(--mint)" strokeWidth="2.5" strokeLinecap="round" />
          </>
        ) : (
          <path d="M51 90 Q60 100 69 90 Z" fill={SKIN} />
        )}

        {/* 머리 */}
        <circle cx="39" cy="55" r="4" fill={SKIN} />
        <circle cx="81" cy="55" r="4" fill={SKIN} />
        <ellipse cx="60" cy="53" rx="21" ry="23" fill={SKIN} />
        <path d={FRONT_HAIR[look.hair]} fill={HAIR} />
        <path d="M48 48 Q52 46 56 48 M64 48 Q68 46 72 48" stroke={HAIR} strokeWidth="1.6" fill="none" strokeLinecap="round" />
        <circle cx="52" cy="55" r="2.2" fill={HAIR} />
        <circle cx="68" cy="55" r="2.2" fill={HAIR} />
        {look.glasses && (
          <path d="M46 55 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 M62 55 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 M58 55 L62 55" stroke="#4a3a42" strokeWidth="1.5" fill="none" />
        )}
        <circle cx="47" cy="63" r="3.5" fill="#e88a9a" opacity=".3" />
        <circle cx="73" cy="63" r="3.5" fill="#e88a9a" opacity=".3" />
        <path d="M53 65 Q60 70 67 65" stroke="#a0525e" strokeWidth="1.8" fill="none" strokeLinecap="round" />

        {/* 팔짱 */}
        {arm(24, 123, 88, 110)}
        {arm(96, 125, 32, 112)}
      </g>
    </svg>
  );
}
