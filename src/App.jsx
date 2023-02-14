import './App.css';
import CountDown from './components/timer';
import DrivingTestModule from "./modules/driving-test/TestingWindow";

function App() {
  return (
    <div className="App">
      <CountDown />
      <DrivingTestModule />

    </div>
  );
}

export default App
