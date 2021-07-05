CREATE DATABASE weighttracker;

CREATE TABLE measurements(
    id SERIAL PRIMARY KEY,
    weight numeric(5,1) NOT NULL,
    measure_date date NOT NULL
);