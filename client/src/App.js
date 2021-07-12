import React from "react";
import "regenerator-runtime/runtime";
import "./App.css";

// Components

import InputMeasurement from "./components/InputMeasurement";
import ListMeasurements from "./components/ListMeasurements";

function App() {
    return (
        <div className="container">
            <InputMeasurement />
            <ListMeasurements />
        </div>
    );
}

export default App;
