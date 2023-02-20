import {BrowserRouter, Route} from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import TestPage from "./pages/TestPage/TestPage";
import ResultPage from "./pages/ResultPage/ResultPage";
import './App.css';
import './reset/reset.css'

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/test">
            <TestPage />
          </Route>
          <Route exact path="/result">
            <ResultPage />
          </Route>
        </div>
      </BrowserRouter>

  );
}

export default App
