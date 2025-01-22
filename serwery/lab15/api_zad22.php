<?php
// Konfiguracja bazy danych
$host = 'localhost';
$dbname = 'zadanie22';
$user = 'root';
$password = '';

// Wyłączenie wyświetlania błędów w środowisku produkcyjnym
error_reporting(0);
ini_set('display_errors', 0);

header('Content-Type: application/json'); // Nagłówek odpowiedzi JSON

// Połączenie z bazą danych
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['message' => 'Błąd połączenia z bazą danych: ' . $e->getMessage()]);
    exit;
}

// Obsługa żądania POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $firstName = $_POST['firstName'] ?? null;
    $lastName = $_POST['lastName'] ?? null;
    $address_email = $_POST['address_email'] ?? null;

    if ($firstName && $lastName && $address_email) {
        try {
            $stmt = $pdo->prepare("INSERT INTO klienci (first_name, last_name, email) VALUES (:first_name, :last_name, :email)");
            $stmt->bindParam(':first_name', $firstName);
            $stmt->bindParam(':last_name', $lastName);
            $stmt->bindParam(':email', $address_email);

            if ($stmt->execute()) {
                echo json_encode(['message' => 'Dane zostały zapisane do bazy.']);
            } else {
                http_response_code(500);
                echo json_encode(['message' => 'Nie udało się zapisać danych do bazy.']);
            }
        } catch (PDOException $e) {
            http_response_code(500);
            echo json_encode(['message' => 'Błąd podczas zapisywania danych: ' . $e->getMessage()]);
        }
    } else {
        http_response_code(400);
        echo json_encode(['message' => 'Wszystkie pola są wymagane.']);
    }
} else {
    http_response_code(405);
    echo json_encode(['message' => 'Metoda nie jest obsługiwana.']);
}
exit; // Wymuszenie zakończenia skryptu
?>
