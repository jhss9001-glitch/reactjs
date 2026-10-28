import { useEffect, useState } from "react";
import { NAV, PLANS } from "./data.js";
import { useRoute } from "./hooks/useRoute.js";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import WhySection from "./components/WhySection.jsx";
import PhrasePreview from "./components/PhrasePreview.jsx";
import Curriculum from "./components/Curriculum.jsx";
import Steps from "./components/Steps.jsx";
import LevelQuiz from "./components/LevelQuiz.jsx";
import ForYou from "./components/ForYou.jsx";
import Pricing from "./components/Pricing.jsx";
import Faq from "./components/Faq.jsx";
import ApplyForm from "./components/ApplyForm.jsx";
import Footer from "./components/Footer.jsx";

const DEFAULT_PLAN = PLANS.find((p) => p.featured).id;
const SITE_TITLE = "K-Pharm Talk · 약사를 위한 영어 복약지도 강의";

export default function App() {
  const route = useRoute();
  // 플랜 버튼을 누르면 신청서의 플랜을 미리 선택
  const [selectedPlan, setSelectedPlan] = useState(DEFAULT_PLAN);

  const pages = {
    why: <WhySection />,
    preview: <PhrasePreview />,
    curriculum: <><Curriculum /><Steps /></>,
    quiz: <LevelQuiz />,
    pricing: <Pricing onSelectPlan={setSelectedPlan} />,
    faq: <Faq />,
    apply: <ApplyForm plan={selectedPlan} onPlanChange={setSelectedPlan} />,
  };
  const page = pages[route] ?? <><Hero /><ForYou /></>;

  useEffect(() => {
    const nav = NAV.find((n) => n.id === route);
    document.title = nav ? `${nav.label} · K-Pharm Talk` : SITE_TITLE;
  }, [route]);

  return (
    <>
      <Header route={route} />
      {/* key로 페이지가 바뀔 때마다 새로 그려 등장 애니메이션을 다시 실행 */}
      <main className="page" key={route}>{page}</main>
      <Footer />
    </>
  );
}
