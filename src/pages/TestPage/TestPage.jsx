import React from 'react';
import DrivingTestModule from "../../modules/driving-test/TestingWindow";
import {Route} from "react-router-dom";

const TestPage = () => {
  return (
    <div>
      <Route exact path="/test">
        <DrivingTestModule />
      </Route>
    </div>
  );
};

export default TestPage;