const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//midleware
app.use(cors());
app.use(express.json());

//ROUTES//

// Create a measurement

app.post("/measurements", async (req, res) => {
    try {
        const { measure_date, weight } = req.body;
        const new_measure = await pool.query(
            "INSERT INTO measurements (measure_date, weight)VALUES($1, $2) RETURNING *",
            [measure_date, weight]
        );

        res.json(new_measure.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// Get all measurements ordered by date of measurement

app.get("/measurements", async (req, res) => {
    try {
        const allMeasurements = await pool.query(
            "SELECT * from measurements order by measure_date"
        );
        res.json(allMeasurements.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// Update a measurement

app.put("/measurements/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { measure_date, weight } = req.body;
        const updateMeasurement = await pool.query(
            "UPDATE measurements SET (measure_date, weight) = ($1, $2) WHERE id = $3",
            [measure_date, weight, id]
        );
        res.json("Measurement was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

// Delete a measurement

app.delete("/measurements/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteMeasurement = await pool.query(
            "DELETE FROM measurements WHERE id = $1",
            [id]
        );
        res.json("Measurement was deleted!");
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(5000, () => {
    console.log("server has started on port 5000");
});
