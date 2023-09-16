import Log from "./components/Pages/Log/Log";
import { Route,Routes,BrowserRouter as Router } from "react-router-dom";
import Defaultlaytout from "../src/components/layout/DeafaultLayout/Defaultlaytout"
import Newfeeds from "./components/Pages/Newfeeds/Newfeeds";
import TypeShop from "./components/Pages/TypeShop/TypeShop";
function App() {
  return (
    <Router>
      <div className="App">
          <TypeShop notNav={true}/>
        {/* <Defaultlaytout >
        </Defaultlaytout> */}
      </div>
    </Router>
  );
}

export default App;
