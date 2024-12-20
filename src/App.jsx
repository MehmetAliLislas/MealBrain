import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import AskAI from './pages/AskAI';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/ask-ai" element={<AskAI />} />
        {/* Diğer rotaları buraya ekleyebilirsiniz */}
      </Routes>
    </Router>
  );
};

export default App;
