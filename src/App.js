import {Route, Switch} from 'react-router-dom';
import MainHeader from './components/MainHeader';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div>
      <MainHeader/> 
      <Switch>
        
      <Route exact path = '/welcome'>
        <Welcome/>
      </Route>

      <Route exact path = '/products'>
        <Products/>
      </Route>
      <Route exact path = '/products/:productId'>
        <ProductDetails/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
