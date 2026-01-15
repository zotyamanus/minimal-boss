<?php
require __DIR__ . '/db.php';

// Nyers POST test olvasása
$data = json_decode(file_get_contents('php://input'), true);
$title = $data['title'] ?? '';

if ($title) {
    $stmt = $pdo->prepare('INSERT INTO todos (title) VALUES (?)');
    $stmt->execute([$title]);
}
