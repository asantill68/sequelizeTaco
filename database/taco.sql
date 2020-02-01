-- Drops the blogger if it exists currently --
DROP DATABASE IF EXISTS tacos_db;

CREATE DATABASE IF NOT EXISTS tacos_db;
USE tacos_db;

CREATE TABLE tacos  (
    id INT NOT NULL AUTO_INCREMENT,
    taco_name VARCHAR(255) NOT NULL,
    devoured BOOL DEFAULT false,
    PRIMARY KEY (id)
);

INSERT INTO tacos (taco_name, devoured) VALUES ('Beef Taco', FALSE);
INSERT INTO tacos (taco_name, devoured) VALUES ('Chicken Taco', FALSE);
INSERT INTO tacos (taco_name, devoured) VALUES ('Cheese Taco', FALSE);

