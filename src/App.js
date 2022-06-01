import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Properties from './components/pages/Properties';
import Contact from './components/pages/Contact';
import SignUp from './components/pages/SignUp';


function App() {
  return (
    <div className="App">
      <Navbar/>

      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/services' exact>
          <Services />
        </Route>
        <Route path='/properties' exact>
          <Properties />
        </Route>
        <Route path='/contact' exact>
          <Contact />
        </Route>
        <Route path='/sign-up' exact>
          <SignUp />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
