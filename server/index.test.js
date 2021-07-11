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

app.put("/measurements/:id", function (req, res) {
    res.status(200).json(body);
});

describe("PUT /measurements/:id", () => {
    it("should update a measurement", async () => {
        const newbody = { measure_date: "2022-01-02", weight: 75 };
        await request(app)
            .put("/measurements/" + body.id)
            .send(newbody)
            .set("Accept", "application/json")
            .expect(200);
    });
});

app.delete("/measurements/:id", function (req, res) {
    res.status(200).json(body);
});

describe("DELETE /measurements/:id", () => {
    it("should delete a measurement", async () => {
        await request(app)
            .delete("/measurements/" + body.id)
            .set("Accept", "application/json")
            .expect(200);
    });
});
