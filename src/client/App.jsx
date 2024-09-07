import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Landing from './components/Landing.jsx';
import Auth from './components/Auth.jsx';
import Sidebar from './components/Sidebar.jsx';
import FoodList from './components/FoodList.jsx';

const App = () => {
  return (
    <Router>
      {/* <Sidebar /> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="FoodList" element={<FoodList />} />
        {/* Catch all */}
        <Route path="*" element={<Landing />} />
      </Routes>
    </Router>
  );
};

export default App;
