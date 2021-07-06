import React, { Fragment, useState } from "react";

const EditMeasurements = ({ measurement }) => {
    const [measure_date, setDate] = useState(measurement.measure_date);
    const [weight, setWeight] = useState(measurement.weight);

    //edit measurement function
    const updateMeasurements = async (e) => {
        e.preventDefault();
        try {
            const body = { measure_date, weight };
            const response = await fetch(
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
        <Fragment>
            <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target={`#id${measurement.id}`}
            >
                Edit
            </button>

            <div
                class="modal fade"
                id={`id${measurement.id}`}
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                onClick={() =>
                    setDate(
                        measurement.measure_date,
                        setWeight(measurement.weight)
                    )
                }
            >
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                                Edit measurement
                            </h5>
                            <button
                                type="button"
                                class="btn-close"
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
                        <div class="modal-body">
                            <input
                                type="date"
                                className="form-control"
                                value={measure_date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                            <input
                                type="text"
                                className="form-control"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                            />
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                                onClick={() =>
                                    setDate(
                                        measurement.measure_date,
                                        setWeight(measurement.weight)
                                    )
                                }
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                class="btn btn-primary"
                                data-bs-dismiss="modal"
                                onClick={(e) => updateMeasurements(e)}
                            >
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default EditMeasurements;
