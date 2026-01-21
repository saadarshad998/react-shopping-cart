
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Items from './pages/Items';
import Cart from './pages/Cart';
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pages/items" element={<Items />} />
      <Route path="/pages/cart" element={<Cart />} />
    </Routes>
  );
}

export default App
