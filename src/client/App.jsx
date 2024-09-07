import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing.jsx';
import Auth from './components/Auth.jsx';
import Sidebar from './components/Sidebar.jsx';
// import FoodList from './components/FoodList.jsx';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Routes>
        <Route path="/" element={<Landing toggleSidebar={toggleSidebar} />} />
        <Route path="/auth" element={<Auth />} />
        {/* <Route path="FoodList" element={<FoodList />} /> */}
        {/* Catch all */}
        <Route path="*" element={<Landing toggleSidebar={toggleSidebar} />} />
      </Routes>
    </Router>
  );
};

export default App;
