import Counter from './components/Counter';
import {Fragment} from 'react';
import Header from './components/Header';
import Auth from './components/Auth';
import {useSelector} from 'react-redux';
import UserProfile from './components/UserProfile';

function App() {
const isLogin =  useSelector(state => state.auth.isAuthenticated)
console.log(isLogin);  
return (
    <Fragment>

    <Header/>
    {isLogin && <> <UserProfile/>
    <Counter />
    </>
    }
    
   {!isLogin && <Auth/>}
    </Fragment>
  );
}

export default App;
