import './App.css';
import CountDown from './components/timer';
import DrivingTestModule from "./modules/driving-test/TestingWindow";

function App() {
  return (
    <div className="App">
      <CountDown />
      <DrivingTestModule />
      <div>123</div>

    </div>
  );
}

export default App
