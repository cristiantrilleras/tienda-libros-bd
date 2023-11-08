const express = require("express");
const router = express.Router();
const mysql = require("mysql2");
const app = express();
const port = 10101;
const cors = require("cors");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Tienda_Libros",
});

connection.connect((error) => {
  if (error) {
    console.error("Error de conexión a la base de datos:", error);
  } else {
    console.log("Conexión a la base de datos exitosa");
  }
});

app.use(cors({ origin: "*", methods: "*", allowedHeaders: "*" }));
app.post("/removequantity", (req, res) => {
  connection.query(
    `update productos set stock = stock - ${req.query.quantity} where id = ${req.query.id}`,
    (error, results) => {
      if (error) {
        console.error("Error al obtener productos:", error);
        res.status(500).json(error);
      } else {
        res.json(results);
      }
    }
  );
});
// Configura tus rutas y controladores aquí
// Ruta para obtener todos los productos
app.get("/productos", (req, res) => {
  connection.query("SELECT * FROM productos", (error, results) => {
    if (error) {
      console.error("Error al obtener productos:", error);
      res.status(500).json({ error: "Error al obtener productos" });
    } else {
      res.json(results);
    }
  });
});


app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
