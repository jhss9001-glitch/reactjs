# K-Pharm Talk — React 이식 구현 계획

`vanilla/`의 강의 홈페이지(HTML/CSS/JS)를 `reactjs/` 폴더에 React로 옮기기 위한 계획입니다.
**목표는 화면과 동작이 vanilla와 사실상 똑같은 React 버전**을 만드는 것입니다.

---

## 현재 상태

```
바탕 화면/react/
├─ vanilla/   ← .git이 여기 있음 (origin = github.com/jhss9001-glitch/react.git)
└─ reactjs/   ← 이 계획 문서만 있음
```

- `.git`이 `vanilla/` 안에 있어서, 이대로는 `reactjs/`가 저장소에 포함되지 않습니다.
- 개발 환경: Node v24, npm 11

---

## 0단계: 저장소 구조 정리 ✅ 결정됨 (변경)

두 버전을 **별도 GitHub 저장소**로 따로 관리합니다. 각 저장소의 루트가 곧 프로젝트 루트라서
Vercel 같은 배포 서비스에서 Root Directory를 따로 지정할 필요가 없습니다.

```
바탕 화면/react/
├─ vanilla/       ← .git (origin = github.com/jhss9001-glitch/react.git)
│  ├─ README.md
│  ├─ index.html
│  ├─ style.css
│  ├─ data.js
│  └─ app.js
└─ reactjs/       ← .git (origin = github.com/jhss9001-glitch/reactjs.git)
   ├─ .gitignore  ← node_modules/, dist/ 제외
   ├─ README.md
   └─ ...
```

작업 순서

1. `vanilla/`의 저장소(`react.git`)는 그대로 둡니다. `reactjs/`를 그 안에 넣지 않습니다.
2. GitHub에서 빈 저장소 `reactjs`를 만듭니다. README·.gitignore·라이선스는 추가하지 않습니다.
3. `reactjs/`에서 `git init`으로 새 저장소를 만들고, `origin`을 `reactjs.git`으로 지정합니다.

> 처음에는 `.git`을 상위 폴더로 옮겨 저장소 하나에 두 버전을 두었지만, 배포할 때마다 Root Directory를
> 지정해야 해서 분리했습니다. `react.git`에는 vanilla 파일을 다시 루트로 되돌리는 커밋이 남아 있습니다.

---

## 1단계: 프로젝트 생성

- **Vite + React + JavaScript**로 만듭니다. TypeScript는 쓰지 않아 vanilla 코드와 최대한 비슷하게 유지합니다.
- `react/` 폴더에서 실행합니다.
  ```powershell
  npm create vite@latest reactjs -- --template react
  cd reactjs
  npm install
  ```
  - `reactjs/` 폴더가 이미 있어서(이 문서가 들어 있음) Vite가 어떻게 처리할지 묻습니다. **기존 파일을 지우지 않는 선택지**를 고르거나, 이 문서를 잠시 다른 곳에 옮겨 두었다가 다시 넣습니다.
- Vite 기본 예제는 지웁니다: `src/App.css`, `src/assets/`, `public/vite.svg`, 카운터 예제 코드
- 외부 라이브러리는 추가하지 않습니다. 상태 관리도 React 기본 기능(`useState`, `useEffect`, Context)만 씁니다.

---

## 2단계: 그대로 가져올 것

| vanilla | reactjs | 바꿀 점 |
|---|---|---|
| `style.css` | `src/styles.css` | **그대로 복사.** 클래스명을 똑같이 써서 화면도 똑같이 나오게 합니다. |
| `data.js` | `src/data.js` | 각 상수 앞에 `export`만 붙입니다. 내용은 바꾸지 않습니다. |
| `index.html`의 `<head>` | `reactjs/index.html` | `lang="ko"`, title, description meta, Pretendard 폰트 링크를 옮깁니다. `<body>`에는 `<div id="root">`만 남깁니다. |

---

## 3단계: 폴더·컴포넌트 구성

vanilla `index.html`의 섹션 하나를 컴포넌트 하나로 옮깁니다.

```
reactjs/
├─ index.html
├─ package.json
├─ vite.config.js
├─ PLAN.md
└─ src/
   ├─ main.jsx              ← styles.css 불러오기, ToastProvider로 App 감싸기
   ├─ App.jsx               ← 섹션 배치, selectedPlan 상태 보관
   ├─ data.js
   ├─ styles.css
   ├─ components/
   │  ├─ Header.jsx         ← 메뉴 열고 닫기, 테마 버튼, 스크롤 그림자
   │  ├─ Hero.jsx           ← 강의 통계 + ChatCard
   │  ├─ ChatCard.jsx       ← 언어가 번갈아 바뀌는 상담 대화
   │  ├─ WhySection.jsx     ← PAINS 카드
   │  ├─ PhrasePreview.jsx  ← 분류·언어 탭, 표현 카드, 듣기·복사
   │  ├─ Curriculum.jsx     ← 챕터 아코디언 + 합계 문구
   │  ├─ Steps.jsx          ← 학습 방식 4단계
   │  ├─ LevelQuiz.jsx      ← 문제 진행, 결과
   │  ├─ ForYou.jsx         ← 추천 대상 + 강사진
   │  ├─ Pricing.jsx        ← 플랜 카드
   │  ├─ Faq.jsx
   │  ├─ ApplyForm.jsx      ← 수강 신청서
   │  ├─ Footer.jsx
   │  ├─ SectionHead.jsx    ← eyebrow / 제목 / 설명 반복 묶음
   │  └─ Reveal.jsx         ← 스크롤하면 나타나는 효과를 감싸는 컴포넌트
   ├─ context/
   │  └─ ToastContext.jsx   ← 토스트 표시 + useToast()
   ├─ hooks/
   │  ├─ useTheme.js        ← 다크 모드 전환, localStorage 저장
   │  ├─ useLocalStorage.js ← try/catch로 감싼 저장·읽기
   │  └─ useInView.js       ← IntersectionObserver
   └─ utils/
      ├─ speak.js           ← speechSynthesis 음성 읽기
      └─ format.js          ← won() 가격 표시
```

`App.jsx`의 섹션 순서는 vanilla와 같습니다.

> Header → Hero → WhySection → PhrasePreview → Curriculum → Steps → LevelQuiz → ForYou → Pricing → Faq → ApplyForm → Footer

---

## 4단계: vanilla 동작을 React 방식으로 옮기기

### 대응표

| vanilla (`app.js`) | React |
|---|---|
| `innerHTML` + 템플릿 문자열 | JSX + `.map()`. React가 알아서 이스케이프하므로 `esc()`는 필요 없음 |
| `store.get/set` (localStorage) | `useLocalStorage` 훅 |
| `initTheme()` | `useTheme()`가 `document.documentElement.dataset.theme`에 반영 |
| `initMenu()` | Header 안의 `useState(open)` |
| `initHeaderShadow()` | Header 안의 `useEffect`에서 scroll 리스너 등록 + 정리 |
| `renderHeroStats()` | Hero에서 `CURRICULUM`으로 계산해 바로 렌더링 |
| `initHeroChat()`의 `setInterval` | ChatCard의 `useEffect` + `clearInterval`로 정리. 말풍선 묶음에 `key={lang}`을 줘서 애니메이션을 다시 실행. `prefers-reduced-motion`이면 순환하지 않음 |
| `previewState` 객체 | PhrasePreview의 `useState(cat)` + `useLocalStorage("kpt-lang")` |
| 표현 듣기·복사 이벤트 위임 | 카드 버튼마다 `onClick` |
| `quiz` 객체 + `locked` | LevelQuiz의 `useState({ idx, score, picked })`. `picked`가 있으면 클릭 막음 |
| 퀴즈 다음 문제로 넘어가는 `setTimeout` | `useEffect`에서 `picked`가 생기면 1.3초 뒤 다음 문제로, 정리 함수에서 `clearTimeout` |
| 플랜 버튼 → 신청서 `select` 값 변경 | `selectedPlan` 상태를 App에 두고 Pricing에는 `onSelectPlan`, ApplyForm에는 `plan` / `onPlanChange`로 전달 |
| 신청서 `FormData` 검사 | 입력값을 상태로 관리하는 폼. **검사 순서와 오류 문구는 그대로**: 이름 → 이메일 형식 → 관심 언어 → 동의 |
| `toast()` 함수 | `ToastContext`의 `useToast()`. 2.6초 뒤 자동으로 사라짐 |
| `.reveal` 관찰 (렌더링이 끝난 뒤 시작) | `<Reveal as="article" className="card pain">`처럼 감싸면 각자 자기 요소를 관찰 |
| `<details>` 아코디언 (커리큘럼, FAQ) | 그대로 사용, 상태 관리 불필요. 커리큘럼 첫 챕터만 `open` |

### JSX로 옮길 때 주의할 점

- `class` 대신 `className`, `for` 대신 `htmlFor`를 씁니다.
- `style`은 객체로 씁니다. 예: `style={{ width: "50%" }}`, `style={{ animationDelay: "0.6s" }}`
- `aria-selected`, `aria-expanded`에는 boolean을 넘깁니다.
- 개발 모드(StrictMode)에서는 effect가 두 번 실행되므로 **타이머, 이벤트 리스너, observer는 반드시 정리**합니다.
- 퀴즈 진행 막대의 너비처럼 계산으로 정해지는 값은 인라인 style로 남겨 둡니다(vanilla와 동일).

---

## 5단계: 확인

1. `npm run dev`로 띄우고, vanilla `index.html`과 **나란히 놓고 비교**합니다.
2. 기능 체크리스트
   - [ ] 다크 모드 전환, 새로고침 후 유지
   - [ ] 모바일 메뉴 열고 닫기, 메뉴 클릭 시 닫힘
   - [ ] 스크롤 시 헤더 그림자
   - [ ] 히어로 대화가 EN → ZH → JA로 순환
   - [ ] 표현 분류 필터, 언어 탭, 새로고침 후 언어 유지
   - [ ] 표현 듣기(음성), 복사 + 토스트
   - [ ] 커리큘럼 챕터 수·강의 수·시간 합계가 vanilla와 같음
   - [ ] 퀴즈 정답·오답 표시, 결과 화면, 다시 풀기
   - [ ] 플랜 버튼을 누르면 신청서 플랜이 미리 선택됨
   - [ ] 신청서 오류 4가지, 접수 토스트, 접수 후 폼 초기화
   - [ ] 스크롤하면 섹션이 나타나는 효과
   - [ ] 반응형: 1000px / 860px / 560px 화면 폭
3. `npm run build`가 오류 없이 끝나는지 확인합니다.

---

## 6단계: 커밋과 push

1. `reactjs/.gitignore`에 `node_modules`와 `dist`가 들어 있는지 확인합니다.
2. `reactjs/` 폴더에서 커밋합니다. 예: `K-Pharm Talk React 버전`
3. `git remote -v`로 주소가 `reactjs.git`인지 확인하고 push합니다.
   ```powershell
   git branch -M main
   git remote add origin https://github.com/jhss9001-glitch/reactjs.git
   git push -u origin main
   ```

---

## 7단계: 배포 (Vercel)

1. Vercel에서 **Add New → Project**로 `reactjs` 저장소를 가져옵니다.
2. Framework Preset이 **Vite**로 자동 선택되는지 확인합니다. Root Directory는 기본값(`./`) 그대로 둡니다.
   - Build Command: `npm run build` / Output Directory: `dist`
3. Deploy를 누르고, 배포 주소에서 5단계 체크리스트를 다시 확인합니다.
4. 이후에는 `main`에 push할 때마다 자동으로 다시 배포됩니다.
