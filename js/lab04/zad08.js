// Skrypt 8. Walidacja numeru NIP 
// Problem: Każda firma zarejestrowana w Polsce (i nie tylko) posiada przypisany tylko sobie indywidualny numer podatkowy, czyli tzw. NIP. Numer ten jest potrzebny często np. do prze prowadzenia rejestracji konta firmowego, do dokonania płatności czy wypełnienia wniosku ratalnego/leasingowego w przypadku prowadzenia działalności gospodarczej. Naszym zadaniem jest sprawdzenie, czy numer podany przez użytkownika np. w formularzu internetowym jest poprawnym numerem NIP. Nie będziemy jednak sprawdzać, czy faktycznie istnieje podmiot gospodarczy o wskazanym numerze; interesuje nas jedynie weryfikacja poprawności numeru zgodnie z polskimi zasadami. Numer taki ma dziesięć cyfr, a każda cyfra ma przypisaną określoną wagę. Aby obliczyć tzw. sumę kontrolną, należy pomnożyć każdą cyfrę (z wyjątkiem ostatniej) w numerze NIP przez odpowiadającą jej wagę i zsumować uzyskane wyniki. Następnie obliczamy resztę z dzielenia po zyskanej sumy przez 11, czyli wykonujemy działanie modulo 11. Uzyskana wartość powinna być równa ostatniej cyfrze w numerze NIP, która jest nazywana często cyfrą kontrolną.

// Zadanie. Przygotuj formularz do wprowadzania NIP. Napisz funkcję sprawdzającą czy NIP spełnia założenia wskazane powyżej. Informacja czy NIP poprawny czy  nie ma pojawiać się pod formularzem 
