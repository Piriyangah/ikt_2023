//Router ist eine Middleware (siehe hier), die die Routen verwaltet und request-Objekte an die entsprechende Routen weiterleitet und response-Objekte empfängt
const express = require('express');
const router = express.Router();

// eine GET-Anfrage
router.get('/', async(req, res) => { //request-Objekt heißt hier req; respones-Objekt heißt hier res und durch die Anfrage erzeugt

    res.send({ message: "Hello FIW!" }); //in der response ein JavaScript-Objekt zurückschicken, das einen Schlüssel message enthält
});

module.exports = router;
