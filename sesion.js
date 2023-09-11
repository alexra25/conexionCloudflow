
const username = "test";
const password = "test";

const data = {
    method: "auth.create_session",
    user_name: username,
    user_pass: password
};

fetch("http://192.4.26.120:9090/portal.cgi", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
})
    .then(response => response.json())
    .then(result => {
        // Procesar la respuesta del servidor aquí
        console.log(result);
    })
    .catch(error => {
        // Manejar errores de la petición aquí
        console.error("Error:", error);
    });



