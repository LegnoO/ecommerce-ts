/** @format */

import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Login from './Login';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Routing;
