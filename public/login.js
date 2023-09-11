document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const data = {
        method: "auth.create_session",
        user_name: username,
        user_pass: password
    };

    fetch("http://192.4.26.120:9090/portal.cgi", {
        method: "POST",
        headers: {
            'Access-Control-Allow-Origin': "http://localhost:8080",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(console.log("post enviado"))
    .then(response => response.json())
    .then(result => {
        // Procesar la respuesta del servidor aquí
        console.log(result);
    })
    .catch(error => {
        // Manejar errores de la petición aquí
        console.error("Error:", error);
    });
});

