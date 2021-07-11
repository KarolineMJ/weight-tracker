import React, { useEffect, useState } from "react";
import EditMeasurements from "./EditMeasurement";

const ListMeasurements = () => {
    const fetch = require("node-fetch");
    const [measurements, setMeasurements] = useState([]);

    //delete measurement function

    const deleteMeasurement = async (id) => {
        try {
            await fetch(`http://localhost:5000/measurements/${id}`, {
                method: "DELETE",
            });

            setMeasurements(
                measurements.filter((measurement) => measurement.id !== id)
            );
        } catch (err) {
            console.error(err.message);
        }
    };

    const getMeasurements = async () => {
        try {
            const response = await fetch("http://localhost:5000/measurements");
            const jsonData = await response.json();

            setMeasurements(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getMeasurements();
    }, []);

    return (
        <div className="wrap-table">
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Weight</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {measurements.map((measurement) => (
                        <tr key={measurement.id}>
                            <td>
                                {new Date(
                                    measurement.measure_date
                                ).toLocaleDateString("en-GB", {
                                    timeZone: "UTC",
                                })}
                            </td>
                            <td>{measurement.weight}</td>
                            <td>
                                <EditMeasurements measurement={measurement} />
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() =>
                                        deleteMeasurement(measurement.id)
                                    }
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListMeasurements;
