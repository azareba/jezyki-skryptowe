<?php
    // Ustawienie nagłówków HTTP
    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin: *");

    // Sprawdzenie metody żądania
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        // Odczyt danych z pliku JSON
        $file = 'dane.json';
        if (file_exists($file)) {
            $data = file_get_contents($file);
            $jsonData = json_decode($data, true);

            // Zwrócenie danych w formacie JSON
            echo json_encode(["status" => "success", "data" => $jsonData]);
        } else {
            http_response_code(404);
            echo json_encode(["status" => "error", "message" => "File not found"]);
        }
    } else {
        // Obsługa innych metod żądania (np. POST, PUT, DELETE)
        http_response_code(405);
        echo json_encode(["status" => "error", "message" => "Method not allowed"]);
    }
?>
