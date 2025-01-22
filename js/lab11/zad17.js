// Upewniamy się, że skrypt zostanie wykonany dopiero po załadowaniu całej struktury DOM
document.addEventListener("DOMContentLoaded", function() {
    // Adresy URL do API, które zwracają dane o kursach złota i walut
    const goldApiUrl = 'https://api.nbp.pl/api/cenyzlota/last/5/?format=json';
    const currencyApiUrl = 'https://api.nbp.pl/api/exchangerates/tables/A/?format=json';

    // Pobieramy dane o kursach złota
    fetch(goldApiUrl)
        .then(response => {
            // Sprawdzamy, czy odpowiedź jest prawidłowa
            if (!response.ok) {
                throw new Error('Błąd HTTP: ' + response.status);
            }
            // Konwertujemy odpowiedź na format JSON
            return response.json();
        })
        .then(data => {
            // Znajdujemy element `tbody` tabeli, do której dodamy dane o kursach złota
            const tableBody = document.getElementById("gold-table").querySelector("tbody");

            // Iterujemy po każdym elemencie danych (każdym kursie złota)
            data.forEach(item => {
                // Tworzymy nowy wiersz tabeli
                const row = document.createElement("tr");

                // Tworzymy komórkę z datą
                const dateCell = document.createElement("td");
                dateCell.textContent = item.data; // Ustawiamy zawartość komórki

                // Tworzymy komórkę z ceną złota
                const priceCell = document.createElement("td");
                priceCell.textContent = item.cena.toFixed(2) + " PLN"; // Zaokrąglamy cenę do dwóch miejsc po przecinku

                // Dodajemy komórki do wiersza
                row.appendChild(dateCell);
                row.appendChild(priceCell);

                // Dodajemy wiersz do `tbody`
                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            // Obsługujemy ewentualne błędy i wyświetlamy komunikat w konsoli
            console.error("Wystąpił błąd przy pobieraniu kursów złota:", error);
            const tableBody = document.getElementById("gold-table").querySelector("tbody");
            tableBody.innerHTML = `<tr><td colspan="2">Nie udało się pobrać danych. Spróbuj ponownie później.</td></tr>`;
        });

    // Pobieramy dane o kursach walut
    fetch(currencyApiUrl)
        .then(response => {
            // Sprawdzamy, czy odpowiedź jest prawidłowa
            if (!response.ok) {
                throw new Error('Błąd HTTP: ' + response.status);
            }
            // Konwertujemy odpowiedź na format JSON
            return response.json();
        })
        .then(data => {
            // Znajdujemy element `tbody` tabeli, do której dodamy dane o kursach walut
            const tableBody = document.getElementById("currency-table").querySelector("tbody");
            // Definiujemy interesujące nas waluty
            const currencies = ["USD", "GBP", "EUR"];
            const flags = {"USD":`<a id = "flag" title="L293D, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Icon_american_flag.png"><img width="16" alt="Icon american flag" src="https://upload.wikimedia.org/wikipedia/commons/2/22/Icon_american_flag.png?20171122025143"></a>`, 
                        "GBP": `<a id="flag" title="User:Verdy p, User:-xfi-, User:Paddu, User:Nightstallion, User:Funakoshi, User:Jeltz, User:Dbenbenn, User:Zscout370, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Flag_of_Europe.svg"><img width="16" alt="Flag of Europe" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/32px-Flag_of_Europe.svg.png?20081021155534"></a>`, 
                        "EUR": `<a id="flag" title="User:E Pluribus Anthony, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Flag_of_the_United_Kingdom.png"><img width="16" alt="Flag of the United Kingdom" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Flag_of_the_United_Kingdom.png/64px-Flag_of_the_United_Kingdom.png?20080216232030"></a>`}

            // Iterujemy po każdej stawce walutowej
            data[0].rates.forEach(rate => {
                // Sprawdzamy, czy waluta jest wśród wybranych (USD, GBP, EUR)
                if (currencies.includes(rate.code)) {
                    // Tworzymy nowy wiersz tabeli
                    const row = document.createElement("tr");
                    const currencyCell = document.createElement("td");
                    //flagi
                    // const nazwa = rate.code
                    // const flaga = flags
                    
                    currencyCell.innerHTML = `${rate.currency} (${rate.code}) ${flags[rate.code]}`;
                    
                    const priceCell = document.createElement("td");
                    priceCell.textContent = rate.mid.toFixed(2) + " PLN"; // Zaokrąglamy cenę do dwóch miejsc po przecinku
                    

                    row.appendChild(currencyCell)
                    row.appendChild(priceCell)

                    tableBody.appendChild(row)
                }})
        })
    })