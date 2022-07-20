import { Route, Routes, Navigate } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div>
      <MainHeader />
      <Routes>
        <Route path="/" element={<Navigate replace to="/welcome" />} />

        <Route path="/welcome/*" element={<Welcome />}>
          <Route path="new-user" element={<p>Welcome, new user!</p>} />
        </Route>

        <Route path="/products" element={<Products />} />

        <Route path="/products/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
