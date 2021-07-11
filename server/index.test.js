const request = require("supertest");
const express = require("express");

const app = express();

const body = { measure_date: "2021-01-02", weight: 70 };

app.post("/measurements", function (req, res) {
    res.status(200).json(body);
});

describe("POST /measurements", () => {
    it("should get create a measurement", async () => {
        await request(app)
            .post("/measurements")
            .send(body)
            .set("Accept", "application/json")
            .expect("Content-Type", /json/);
    });
});

app.get("/measurements", function (req, res) {
    res.status(200).json(body);
});

describe("GET /measurements", () => {
    it("should get all measurements", async () => {
        await request(app)
            .get("/measurements")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200, body);
    });
});
