import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import TestPage from "./pages/TestPage/TestPage";
import ResultPage from "./pages/ResultPage/ResultPage";
import './App.css';
import './reset/reset.css'

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/test" component={TestPage} />
          <Route exact path="/result" component={ResultPage} />
        </Switch>
      </BrowserRouter>

  );
}

export default App
