import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Subjects from "./pages/Subjects";
import TopicPage from "./pages/TopicPage";
import SecondLevelPage from "./pages/SecondLevelPage";
import LessonPage from "./pages/LessonPage";
import Minigames from "./pages/Minigames";
import MathSpeedDrill from "./games/MathSpeedDrill";
import GrammarBlitz from "./games/GrammarBlitz";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="subjects" element={<Subjects />} />
        <Route path="subjects/:slug" element={<TopicPage />} />
        <Route path="subjects/:slug/:secondSlug" element={<SecondLevelPage />} />
        <Route path="subjects/:slug/:unitSlug/:lessonSlug" element={<LessonPage />} />
        <Route path="minigames" element={<Minigames />} />
        <Route path="minigames/math-speed-drill" element={<MathSpeedDrill />} />
        <Route path="minigames/grammar-blitz" element={<GrammarBlitz />} />
      </Route>
    </Routes>
  );
}
