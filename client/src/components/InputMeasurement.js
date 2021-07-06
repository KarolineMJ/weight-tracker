import React, { Fragment, useState } from "react";

const InputMeasurement = () => {
    const [measure_date, setDate] = useState("");
    const [weight, setWeight] = useState("");

    const onSubimitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { measure_date, weight };
            const response = await fetch("http://localhost:5000/measurements", {
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
        <Fragment>
            <h1 className="text-center mt-5">Input Measurement</h1>
            <form className="d-flex mt-5" onSubmit={onSubimitForm}>
                <input
                    type="date"
                    className="measure_date"
                    name="measure_date"
                    value={measure_date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <input
                    type="text"
                    className="weight"
                    name="weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    );
};

export default InputMeasurement;
