import React, { Fragment } from "react";
import "./App.css";

//components

import InputMeasurement from "./components/InputMeasurement";
import ListMeasurements from "./components/ListMeasurements";

function App() {
    return (
        <Fragment>
            <div className="container">
                <InputMeasurement />
                <ListMeasurements />
            </div>
        </Fragment>
    );
}

export default App;
