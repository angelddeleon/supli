CREATE DATABASE suplidb;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    email VARCHAR(255),
    password VARCHAR(255),
    rol VARCHAR(10) CHECK (rol IN('client', 'supplier'))
);

CREATE TABLE clients(
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES user(id) ON DELETE CASCADE,
    phone VARCHAR(15)
);

CREATE TABLE suppliers(
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES user(id) ON DELETE CASCADE,
    phone VARCHAR(15)
);


INSERT INTO users(email,password,rol)
VALUES('angel','123', 'client');

INSERT INTO users(email,password,rol)
VALUES('david','123', 'supplier');

