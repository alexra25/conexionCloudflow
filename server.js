const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const port = 8080; // Puedes cambiar el puerto si lo deseas

const whileList = ["http://localhost:8080","http://192.4.26.120:9090"]

app.use(cors({origin:whileList}));  // Usar el middleware cors

app.use(express.static(path.join(__dirname, "public")));  // Servir archivos estáticos desde la carpeta "public"

// Configurar una ruta para manejar la solicitud de inicio de sesión
app.post("/api/login", (req, res) => {
    // Aquí puedes agregar la lógica de autenticación y enviar la respuesta JSON adecuada
    const response = {
        success: true,
        message: "Inicio de sesión exitoso"
    };
    res.json(response);
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
