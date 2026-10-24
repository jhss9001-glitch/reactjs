import { useState } from "react";
import { PLANS } from "./data.js";
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

export default function App() {
  // 플랜 버튼을 누르면 신청서의 플랜을 미리 선택
  const [selectedPlan, setSelectedPlan] = useState(DEFAULT_PLAN);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhySection />
        <PhrasePreview />
        <Curriculum />
        <Steps />
        <LevelQuiz />
        <ForYou />
        <Pricing onSelectPlan={setSelectedPlan} />
        <Faq />
        <ApplyForm plan={selectedPlan} onPlanChange={setSelectedPlan} />
      </main>
      <Footer />
    </>
  );
}
