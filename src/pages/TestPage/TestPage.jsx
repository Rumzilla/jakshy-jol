import React from 'react';
import DrivingTestModule from "../../modules/driving-test/TestingWindow";
import {Route} from "react-router-dom";
import CountDown from "../../components/timer";



const TestPage = (props) => {
  const {finishTime} = props
  return (
    <div>
      <Route exact path="/test">
        <CountDown />
        <DrivingTestModule/>
      </Route>
    </div>
  );
};

export default TestPage;