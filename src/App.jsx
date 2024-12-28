import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import AskAI from "./pages/AskAI";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import MealPage from "./pages/MealPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:idMeal" element={<MealPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/ask-ai" element={<AskAI />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
