const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.resolve(__dirname, ("./public"))

app.use(express.static(publicPath))

const parahtml = path.resolve(__dirname, ("./views"))

app.use(express.static(parahtml))


/* app.listen(3001, () => {
    console.log("Servidor corriendo");
})
 */
// levantar servidor en la nuve
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, ("./views/home.html")))
})