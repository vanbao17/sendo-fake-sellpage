import Log from "./components/layout/Log/Log";
import { Route,Routes,BrowserRouter as Router } from "react-router-dom";
import Defaultlaytout from "../src/components/layout/DeafaultLayout/Defaultlaytout"
function App() {
  return (
    <Router>
      <div className="App">
        <Defaultlaytout >
          bangr tin
        </Defaultlaytout>
      </div>
    </Router>
  );
}

export default App;
