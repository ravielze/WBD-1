<?php

$users = <<<EOD
CREATE TABLE IF NOT EXISTS users (
    id_user     INTEGER     PRIMARY KEY     AUTOINCREMENT,
    email       TEXT        UNIQUE          NOT NULL,
    username    TEXT        UNIQUE          NOT NULL,
    password    TEXT        NOT NULL,
    is_admin    INTEGER     NOT NULL        DEFAULT (0),
    access_id   TEXT
);
EOD;

$dorayakis = <<<EOD
CREATE TABLE IF NOT EXISTS dorayakis (
    id_dorayaki     INTEGER     PRIMARY KEY     AUTOINCREMENT,
    name            TEXT        NOT NULL,
    description     TEXT        NOT NULL,
    picture         TEXT        NOT NULL,
    price           INTEGER     NOT NULL,
    stock           INTEGER     NOT NULL    DEFAULT (0),
    is_deleted      INTEGER     NOT NULL    DEFAULT (0)
);
EOD;

$histories = <<<EOD
CREATE TABLE IF NOT EXISTS histories (
    id_history      INTEGER     PRIMARY KEY     AUTOINCREMENT,
    amount          INTEGER     NOT NULL,
    flag            TEXT        NOT NULL,
    id_modified_by  INTEGER     NOT NULL,
    id_dorayaki     INTEGER     NOT NULL,

    FOREIGN KEY(id_modified_by) REFERENCES users(id_user)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(id_dorayaki)    REFERENCES dorayakis(id_dorayaki)
        ON DELETE CASCADE ON UPDATE CASCADE
);
EOD;
