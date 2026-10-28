# K-Pharm Talk (React)

K-뷰티 시대, 약사를 위한 영어 복약지도 강의 홈페이지의 React 버전입니다.
HTML/CSS/JS 버전([react](https://github.com/jhss9001-glitch/react))을 Vite + React로 옮겼습니다.

## 실행

```powershell
npm install
npm run dev
```

빌드: `npm run build` (결과물은 `dist/`)

## 파일 구성

- `src/data.js` — 강의 콘텐츠 (표현, 커리큘럼, 퀴즈, 수강료, FAQ)
- `src/styles.css` — 스타일 (라이트/다크 테마, 반응형)
- `src/components/` — 섹션별 컴포넌트
- `src/hooks/` — 테마, localStorage, 스크롤 등장 효과
- `src/context/ToastContext.jsx` — 토스트 알림
- `src/utils/` — 음성 읽기, 가격 표시
- `PLAN.md` — 이식 계획
