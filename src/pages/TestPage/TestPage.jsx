import React from 'react';
import CountDown from "../../components/timer";
import DrivingTestModule from "../../modules/driving-test/TestingWindow";
import {Route} from "react-router-dom";

const TestPage = () => {
  return (
    <div>
      <Route exact path="/test">
        <CountDown />
        <DrivingTestModule />
      </Route>
    </div>
  );
};

export default TestPage;