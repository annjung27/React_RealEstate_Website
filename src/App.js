import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Property from "./components/pages/Property";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Navbar />
          <Home />
        </Route>
        <Route path="/property" exact>
          <Property />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
