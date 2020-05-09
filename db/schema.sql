/* Delete the database if it exists*/
DROP DATABASE IF EXISTS burgers_db;
/* Create the the database */
CREATE DATABASE burgers_db;
USE burgers_db;
/* Create the burgers table */
CREATE TABLE burgers (
    id INTEGER AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN DEFAULT false, 
    PRIMARY KEY (id)
);