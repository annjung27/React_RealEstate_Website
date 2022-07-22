import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Navbar />
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
