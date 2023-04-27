const express = require("express");
const mysql = require("mysql2/promise");

const app = express();
const port = 3000;

const connectionConfig = {
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "tienda",
};

app.get("/api/productos", async (req, res) => {
  try {
    //crear la conexion a la base de datos
    const connection = await mysql.createConnection(connectionConfig);
    //Generar ejecución de consulta de productos
    const [rows] = await connection.execute("SELECT * FROM productos");
    //Cierre de conexión
    await connection.end();
    res.send(rows);
  } catch (error){
    console.error(error);
    res.status(500).send("Error en el servidor");
  }
});

app.use(express.static('public'))

app.listen(port, () => {
  console.log(`El servidor esta arrancando por http://localhost:${port}`);
});