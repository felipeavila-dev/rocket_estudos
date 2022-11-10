import { Routes, Route } from 'react-router-dom';
import App from './App';
import { Checkout } from './pages/Checkout';
import { Finished } from './pages/Finished';
import { Home } from './pages/Home';


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/finished" element={<Finished />} />
    </Routes>
  );
};