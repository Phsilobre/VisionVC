const routes = (app) => {
    app.route('/chores')
    .get((req, res, next) => {
        // Middleware
        console.log(`Request de : ${req.originalUrl}`)
        console.log(`Request type : ${req.method}`)
        next();
    }, (req, res, next) => {
        let toto = [{
            "id": "01",
            "name": "aspirateur",
            "frequency": 2,
            "category": 1,
            "lastDone": "04/01/2023"
        },
        {
            "id": "02",
            "name": "vitres",
            "frequency": 2,
            "category": 2,
            "lastDone": "04/01/2023"
        }]
        res.set({
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Private-Network": "true",
            "Access-Control-Allow-Origin": req.headers.origin
        })
        res.send(toto);
    })
    .post((req, res) =>
        res.send('La demande Post avec succès'));

    app.route('/contact/:contactId')
    .put((req, res) =>
        res.send('La demande Put avec succès'))
    .delete((req, res) =>
        res.send('La demande Delete avec succès'));
}

export default routes;