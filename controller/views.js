const views = (app) => {
    let options = {
        root: __dirname + "/../views/"
    }

    app.get('/', (req, res) => {
        res.sendFile("main.html", options)
    })

    app.get('/js/*', (req, res) => {
        res.sendFile(req.originalUrl, options);
    })

    app.get('/css/*', (req, res) => {
        res.sendFile(req.originalUrl, options);
    })
}

module.exports = views