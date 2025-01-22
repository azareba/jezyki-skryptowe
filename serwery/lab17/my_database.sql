
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    imie VARCHAR(255) NOT NULL,
    nazwisko VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    kierunek VARCHAR(255),
    grupa VARCHAR(50)
);
