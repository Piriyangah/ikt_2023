const express = require('express'); //importieren express
const postRoutes = require('./routes/post.routes'); //einbinden von Router

const app = express(); //erzeugen uns davon ein Objekt und speichern dieses in der Variablen app
const PORT = 3000; //einer Konstanten PORT die Portnummer 3000 festlegen = unter http://localhost:3000 verfügbar

app.use(express.json()); //alle JavaScript-Objekte sollen in der response nach JSON umgewandelt werden
app.use('/posts', postRoutes);

app.listen(PORT, (error) => { //Starten des Webservers; Aufruf der listen()-Funktion von express
    if (error) {
        console.log(error);
    } else {
        console.log(`server running on http://localhost:${PORT}`);
    }
});
