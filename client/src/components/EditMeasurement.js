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
                        <form class="needs-validation" novalidate>
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
                            />
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="submit"
                                className="btn btn-secondary"
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
        </Fragment>
    );
};

export default EditMeasurements;
