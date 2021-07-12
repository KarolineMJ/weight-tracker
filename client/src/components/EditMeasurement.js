import React, { useState } from "react";

const EditMeasurements = ({ measurement }) => {
    const fetch = require("node-fetch");
    const [measure_date, setDate] = useState(measurement.measure_date);
    const [weight, setWeight] = useState(measurement.weight);

    // Update measurement function
    const updateMeasurements = async (e) => {
        e.preventDefault();
        try {
            const body = { measure_date, weight };
            if (weight <= 0 || weight >= 1000) {
                alert(
                    "The weight value must be greater than 0 and less than 1000"
                );
                setDate(
                    measurement.measure_date,
                    setWeight(measurement.weight)
                );
                return;
            }
            await fetch(
                `http://localhost:5000/measurements/${measurement.id}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body),
                }
            );

            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <div className="wrap-edit">
            <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target={`#id${measurement.id}`}
            >
                Edit
            </button>

            <div
                className="modal fade"
                id={`id${measurement.id}`}
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Edit measurement
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                onClick={() =>
                                    setDate(
                                        measurement.measure_date,
                                        setWeight(measurement.weight)
                                    )
                                }
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form className="needs-validation">
                                <input
                                    type="date"
                                    className="form-control"
                                    value={measure_date}
                                    onChange={(e) => setDate(e.target.value)}
                                    required
                                />
                                <input
                                    type="number"
                                    className="form-control"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                    required
                                    min="1"
                                    max="999.99"
                                    step=".1"
                                />
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                onClick={(e) => updateMeasurements(e)}
                            >
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditMeasurements;
