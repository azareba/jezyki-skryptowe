$(document).ready(function() {
    // Pobieranie danych użytkowników z publicznego API
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users',
        method: 'GET',
        success: function(users) {
            const container = $('#userContainer');

            // Przetwarzanie każdego użytkownika i dodawanie go do kontenera
            users.forEach(function(user) {
                const userCard = `
                    <div class = 'user-card'> 
                    <h3>${user.name}</h3>
                    <p>Nazwa użytkownika: ${user.username}</p>
                    <p class = "email">${user.email}</p>
                    <p>Miasto: ${user.address.city}</p>
                    </div>
                `;
                container.append(userCard);
            });
        },
        error: function() {
            alert("Nie udało się załadować danych użytkowników.");
        }
    });
});