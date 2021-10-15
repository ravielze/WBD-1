<?php

$users = <<<EOD
CREATE TABLE IF NOT EXISTS users (
    id_user     INTEGER     AUTO_INCREMENT,
    email       TEXT        NOT NULL,
    username    TEXT        NOT NULL,
    password    TEXT        NOT NULL,
    is_admin    INTEGER     NOT NULL    DEFAULT (0),

    PRIMARY KEY(id_user),
    UNIQUE(email)
);
EOD;

$dorayakis = <<<EOD
CREATE TABLE IF NOT EXISTS dorayakis (
    id_dorayaki     INTEGER     AUTO_INCREMENT,
    name            TEXT        NOT NULL,
    description     TEXT        NOT NULL,
    picture         TEXT        NOT NULL,
    price           INTEGER     NOT NULL,
    stock           INTEGER     NOT NULL    DEFAULT (0),
    is_deleted      INTEGER     NOT NULL    DEFAULT (0),

    PRIMARY KEY(id_dorayaki)
);
EOD;

$histories = <<<EOD
CREATE TABLE IF NOT EXISTS histories (
    id_history      INTEGER     AUTO_INCREMENT,
    amount          INTEGER     NOT NULL,
    flag            TEXT        NOT NULL,
    id_modified_by  INTEGER     NOT NULL,
    id_dorayaki     INTEGER     NOT NULL,

    PRIMARY KEY(id_history),
    FOREIGN KEY(id_modified_by) REFERENCES users(id_user),
    FOREIGN KEY(id_dorayaki)    REFERENCES dorayakis(id_dorayaki)
);
EOD;
?>