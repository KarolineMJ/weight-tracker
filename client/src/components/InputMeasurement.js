import React, { useState } from "react";

const InputMeasurement = () => {
    const fetch = require("node-fetch");
    const [measure_date, setDate] = useState("");
    const [weight, setWeight] = useState("");

    const onSubimitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { measure_date, weight };
            await fetch("http://localhost:5000/measurements", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });

            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <div className="form-main">
            <h1 className="text-center mt-5">WEIGHT TRACKER</h1>
            <div className="measure-form">
                <form className="d-flex mt-5" onSubmit={onSubimitForm}>
                    <input
                        type="date"
                        className="measure_date"
                        name="measure_date"
                        value={measure_date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                    <input
                        type="number"
                        className="weight"
                        name="weight"
                        placeholder="Weight"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        required
                        min="1"
                        max="999"
                        step=".1"
                    />
                    <button className="btn btn-success">Add</button>
                </form>
            </div>
        </div>
    );
};

export default InputMeasurement;
