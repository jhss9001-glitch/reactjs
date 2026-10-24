/* =========================================================
 * K-Pharm Talk - 강의 데이터
 * 페이지에 표시되는 콘텐츠는 모두 여기서 수정합니다.
 * ========================================================= */

export const LANGS = [
  { code: "en", label: "English", tts: "en-US" },
  { code: "zh", label: "中文", tts: "zh-CN" },
  { code: "ja", label: "日本語", tts: "ja-JP" },
];

/* 히어로 상담 대화 (언어별로 순환 표시) */
export const HERO_CHATS = {
  en: [
    { who: "guest", text: "Can I use this retinol cream in the morning?" },
    { who: "rx", text: "Please use it only at night, and apply sunscreen during the day." },
  ],
  zh: [
    { who: "guest", text: "这款视黄醇面霜早上可以用吗？" },
    { who: "rx", text: "请只在晚上使用，白天务必涂抹防晒霜。" },
  ],
  ja: [
    { who: "guest", text: "このレチノールクリーム、朝も使えますか。" },
    { who: "rx", text: "夜だけお使いください。日中は必ず日焼け止めを塗ってください。" },
  ],
};

/* 왜 지금인가 */
export const PAINS = [
  { icon: "🛍️", title: "늘어나는 K-뷰티 쇼핑객", text: "더마 화장품·재생 크림·연고를 찾아 약국을 일부러 방문하는 외국인 고객이 많아졌습니다." },
  { icon: "😶", title: "제품만 건네고 끝나는 응대", text: "“This one, good.” 이후 말이 막혀 사용법과 주의사항을 전하지 못한 경험, 있으신가요?" },
  { icon: "⚠️", title: "설명이 빠지면 생기는 문제", text: "레티놀의 광과민, 과산화벤조일의 탈색처럼 꼭 전해야 할 정보가 언어 장벽에 막힙니다." },
  { icon: "🌏", title: "말이 통하면 단골이 됩니다", text: "정확한 한마디가 리뷰와 재방문으로 이어집니다. 복약지도는 가장 강력한 서비스입니다." },
];

/* 표현 미리듣기 */
export const PHRASE_CATEGORIES = [
  { id: "all", label: "전체" },
  { id: "skin", label: "스킨케어 성분" },
  { id: "topical", label: "연고·외용제" },
  { id: "supp", label: "영양제" },
  { id: "ask", label: "문진" },
];

export const PHRASES = [
  {
    cat: "skin", situation: "레티놀 크림 사용 시간",
    ko: "밤에만 사용하시고, 낮에는 자외선 차단제를 꼭 바르세요.",
    en: "Use this only at night, and be sure to apply sunscreen during the day.",
    zh: "请只在晚上使用，白天务必涂抹防晒霜。",
    ja: "夜だけお使いください。日中は必ず日焼け止めを塗ってください。",
  },
  {
    cat: "skin", situation: "처음 쓰는 제품 패치 테스트",
    ko: "처음 사용하실 때는 팔 안쪽에 조금 발라 24시간 동안 반응을 확인하세요.",
    en: "Before first use, apply a small amount to your inner arm and check for any reaction for 24 hours.",
    zh: "首次使用前，请在手臂内侧涂抹少量，观察24小时是否有不良反应。",
    ja: "初めてお使いになる前に、腕の内側に少量塗って、24時間様子を見てください。",
  },
  {
    cat: "skin", situation: "자극 반응 시 대처",
    ko: "따끔거리거나 붉어지면 사용을 중단하고 물로 씻어내세요.",
    en: "If it stings or turns red, stop using it and rinse with water.",
    zh: "如有刺痛或发红，请停止使用并用清水冲洗。",
    ja: "ひりひりしたり赤くなったりしたら、使用を中止して水で洗い流してください。",
  },
  {
    cat: "topical", situation: "상처 재생 연고",
    ko: "하루 1~2회, 깨끗이 씻은 부위에 얇게 바르세요.",
    en: "Apply a thin layer to the clean affected area once or twice a day.",
    zh: "每天1～2次，清洁患处后薄薄涂抹一层。",
    ja: "1日1～2回、患部を清潔にしてから薄く塗ってください。",
  },
  {
    cat: "topical", situation: "여드름 연고 (과산화벤조일)",
    ko: "옷이나 수건이 탈색될 수 있으니 주의하세요.",
    en: "It may bleach your clothes or towels, so please be careful.",
    zh: "可能会使衣物或毛巾褪色，请注意。",
    ja: "衣類やタオルが脱色することがあるので、ご注意ください。",
  },
  {
    cat: "supp", situation: "비타민 복용 시점",
    ko: "식사 직후에 물과 함께 드세요.",
    en: "Take it with water right after a meal.",
    zh: "请在饭后立即用水送服。",
    ja: "食後すぐに水と一緒にお飲みください。",
  },
  {
    cat: "ask", situation: "임신·수유 확인",
    ko: "혹시 임신 중이시거나 수유 중이신가요?",
    en: "Are you pregnant or breastfeeding?",
    zh: "请问您是否怀孕或正在哺乳？",
    ja: "妊娠中、または授乳中ではありませんか。",
  },
  {
    cat: "ask", situation: "알레르기 확인",
    ko: "약이나 화장품에 알레르기가 있으신가요?",
    en: "Do you have any allergies to medicines or cosmetics?",
    zh: "您对药物或化妆品过敏吗？",
    ja: "お薬や化粧品でアレルギーはありますか。",
  },
];

/* 커리큘럼 (분 단위) */
export const CURRICULUM = [
  {
    title: "약국 응대 기본기",
    desc: "인사부터 문진까지, 상담의 뼈대를 만듭니다.",
    lessons: [
      { t: "첫인사와 상담 시작 표현", min: 12 },
      { t: "숫자·용량·횟수 말하기", min: 15 },
      { t: "신체 부위와 피부 타입 어휘", min: 14 },
      { t: "증상 묻고 되묻기 (확인 질문)", min: 16 },
    ],
  },
  {
    title: "K-뷰티 성분 상담",
    desc: "외국인 고객이 가장 많이 묻는 성분을 쉽게 설명합니다.",
    lessons: [
      { t: "레티놀·비타민C·나이아신아마이드", min: 18 },
      { t: "시카·판테놀 — 진정 성분 설명하기", min: 14 },
      { t: "AHA/BHA 각질 케어와 사용 빈도", min: 15 },
      { t: "자외선 차단제 SPF·PA 안내", min: 13 },
      { t: "성분 궁합: 같이 쓰면 안 되는 조합", min: 17 },
    ],
  },
  {
    title: "외용제·일반의약품 복약지도",
    desc: "연고와 외용제의 사용법·주의사항을 정확히 전달합니다.",
    lessons: [
      { t: "상처 재생 연고와 흉터 관리", min: 15 },
      { t: "여드름 치료제 사용법과 부작용", min: 18 },
      { t: "피부염 외용제: 사용 기간과 부위", min: 16 },
      { t: "보습제와 피부 장벽 설명", min: 12 },
    ],
  },
  {
    title: "영양제·이너뷰티",
    desc: "콜라겐부터 유산균까지, 복용 시점과 상호작용을 안내합니다.",
    lessons: [
      { t: "복용 시점: 식전·식후·취침 전", min: 13 },
      { t: "콜라겐·비오틴·비타민 상담", min: 15 },
      { t: "복용 중인 약과의 상호작용 묻기", min: 16 },
    ],
  },
  {
    title: "안전 상담 & 실전 롤플레이",
    desc: "까다로운 상황까지 롤플레이로 완성합니다.",
    lessons: [
      { t: "임신·수유·알레르기 확인 루틴", min: 14 },
      { t: "병원 진료가 필요할 때 안내하기", min: 15 },
      { t: "결제·면세·교환 응대 표현", min: 12 },
      { t: "언어별 실전 롤플레이 (3개 국어)", min: 30 },
    ],
  },
];

/* 학습 방식 */
export const STEPS = [
  { title: "상황 영상", text: "실제 약국 상담 장면으로 표현이 쓰이는 맥락을 먼저 봅니다." },
  { title: "핵심 표현 드릴", text: "용량·횟수·시점을 바꿔 끼우는 패턴 연습으로 응용력을 키웁니다." },
  { title: "발음 코칭", text: "원어민 튜터 음성을 듣고 녹음해 비교하며 따라 말합니다." },
  { title: "롤플레이 & 카드", text: "역할극으로 마무리하고, 약국 비치용 복약지도 카드를 받습니다." },
];

/* 레벨 테스트 */
export const QUIZ = [
  {
    q: "“Apply a thin layer.”의 뜻으로 알맞은 것은?",
    options: ["두껍게 덧바르세요.", "얇게 펴 바르세요.", "하루 한 번 바르세요.", "씻어내세요."],
    answer: 1,
  },
  {
    q: "중국어 “饭后”는 어떤 복용 시점일까요?",
    options: ["식전", "식후", "취침 전", "공복"],
    answer: 1,
  },
  {
    q: "일본어 “日焼け止め”가 가리키는 제품은?",
    options: ["보습 크림", "클렌징 오일", "자외선 차단제", "여드름 패치"],
    answer: 2,
  },
  {
    q: "“Are you breastfeeding?”는 무엇을 묻는 질문인가요?",
    options: ["알레르기가 있는지", "임신 계획이 있는지", "수유 중인지", "복용 중인 약이 있는지"],
    answer: 2,
  },
];

export const QUIZ_RESULTS = [
  { min: 0, title: "기초부터 탄탄하게", text: "‘약국 응대 기본기’ 챕터부터 시작하는 것을 추천합니다. 숫자·횟수 표현만 익혀도 상담이 훨씬 편해져요." },
  { min: 2, title: "바로 성분 상담으로", text: "기본 표현은 충분해요. ‘K-뷰티 성분 상담’ 챕터로 전문성을 더해 보세요." },
  { min: 4, title: "실전 롤플레이 준비 완료", text: "훌륭합니다! ‘안전 상담 & 실전 롤플레이’로 까다로운 상황까지 대비해 보세요." },
];

/* 추천 대상 */
export const TARGETS = [
  "명동·홍대·성수 등 관광 상권 약국에서 근무하는 약사",
  "더마 코스메틱 상담을 강화하고 싶은 약국 개설자",
  "외국인 고객 앞에서 영어가 입에서 맴돌기만 했던 분",
  "중국어·일본어 응대가 필요하지만 시간이 부족한 분",
  "약대생·신입 약사로 경쟁력을 키우고 싶은 분",
];

/* 강사진 (실제 강사 정보로 교체하세요) */
export const TEAM = [
  { emoji: "👩‍⚕️", role: "대표 강사 · 약사", text: "관광 상권 약국 실무 경험을 바탕으로 상황별 커리큘럼과 복약지도 스크립트를 설계합니다." },
  { emoji: "🗣️", role: "원어민 튜터 · EN / ZH / JA", text: "언어별 원어민 튜터가 발음과 자연스러운 표현을 코칭하고 롤플레이 상대가 되어 드립니다." },
];

/* 수강료 */
export const PLANS = [
  {
    id: "single", name: "단과", desc: "1개 언어 집중",
    price: 149000, early: 119000, period: "3개월 수강",
    features: ["선택 언어 1개 전 강의", "표현 스크립트 PDF", "복약지도 카드 1종"],
  },
  {
    id: "all", name: "올인원", desc: "3개 국어 전체", featured: true,
    price: 289000, early: 219000, period: "6개월 수강",
    features: ["영어·중국어·일본어 전 강의", "원어민 발음 피드백 4회", "복약지도 카드 3종 (EN·ZH·JA)", "실전 롤플레이 라이브 세션"],
  },
  {
    id: "team", name: "약국 단체", desc: "3인 이상 약국·체인",
    price: null, early: null, period: "맞춤 기간",
    features: ["올인원 전체 구성", "약국 맞춤 스크립트 제작", "직원 진도 관리 리포트", "방문 워크숍 (협의)"],
  },
];

/* FAQ */
export const FAQS = [
  { q: "외국어를 거의 못 해도 따라갈 수 있나요?", a: "네. 문장 구조를 고정하고 용량·횟수·시점만 바꿔 끼우는 패턴 방식이라, 기초 단어만 알아도 첫 주부터 실제 응대에 쓸 수 있습니다." },
  { q: "강의는 어떤 방식으로 진행되나요?", a: "온라인 VOD로 언제든 수강할 수 있고, 올인원 플랜은 월 1회 라이브 롤플레이 세션이 추가됩니다." },
  { q: "약국 비치용 복약지도 카드는 어떤 건가요?", a: "자주 쓰는 사용법·주의사항 문장을 3개 국어로 정리한 인쇄용 PDF입니다. 고객에게 손가락으로 가리키며 설명할 때 유용합니다." },
  { q: "환불 규정이 궁금해요.", a: "수강 시작 후 7일 이내, 진도율 10% 미만이면 전액 환불됩니다. 이후에는 잔여 기간에 따라 부분 환불됩니다." },
  { q: "다른 언어도 추가될 예정인가요?", a: "태국어·베트남어 과정을 준비 중이며, 기존 수강생에게 우선 안내해 드립니다." },
];
