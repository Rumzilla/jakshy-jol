import './App.css';
import CountDown from './components/timer';
import {BrowserRouter, Route} from "react-router-dom";
import DrivingTestModule from "./modules/driving-test/TestingWindow";
import Result from "./modules/driving-test/result/result";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CountDown />
        <Route exact path="/test">
          <DrivingTestModule />
        </Route>
        <Route exact path="/result">
          <Result />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App
