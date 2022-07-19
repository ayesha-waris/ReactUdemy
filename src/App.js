import {Route} from 'react-router-dom';
import MainHeader from './components/MainHeader';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div>
      <MainHeader/>  
      <Route path = '/welcome'>
        <Welcome/>
      </Route>

      <Route path = '/products'>
        <Products/>
      </Route>
      <Route path = '/product-detail/:productId'>
        <ProductDetails/>
      </Route>
    </div>
  );
}

export default App;
