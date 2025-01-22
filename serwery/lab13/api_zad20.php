
<?php
// Ustawienie nagłówków HTTP
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");




// Sprawdzenie metody żądania
if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    $dataFile = 'zad20.txt';

    if ($dataFile){
        $zawartosc = file($dataFile,FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        $rand_linia = $zawartosc[array_rand($zawartosc)];
        list($name,$email)=explode(',',$rand_linia);
    }
    // Przykładowe dane do zwrócenia
    $response = [
        "status" => "success",
        "message" => "Hello, this is your simple PHP API!",
        "data" => [
            "name" => $name,
            "email" => $email
        ]
    ];

    // Zwrócenie odpowiedzi w formacie JSON
    echo json_encode($response);
} else {
    // Obsługa innych metod żądania (np. POST, PUT, DELETE)
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed"]);
}
?>
