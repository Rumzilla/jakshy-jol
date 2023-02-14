import './App.css';
import CountDown from './components/timer';
import DrivingTestModule from "./modules/driving-test/TestingWindow";
import HomePage from './pages/HomePage/HomePage';

import './reset/reset.css'

function App() {
  return (
    <div className="App">
      <CountDown />
      <DrivingTestModule />
      <HomePage />
    </div>
  );
}

export default App
