<?php
// Run once to initialize the database
$db = new PDO('sqlite:db.sqlite');
$db->exec("CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    priority INTEGER DEFAULT 1,
    completed INTEGER DEFAULT 0
)");