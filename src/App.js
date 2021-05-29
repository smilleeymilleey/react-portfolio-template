
import './App.css';
import Home from "./Home"
import Navbar from "./Navbar"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar />
        <Router>
          <Route path="/">
            <Home />
          </Route>
        </Router>
    </div>
  );
}

export default App;
