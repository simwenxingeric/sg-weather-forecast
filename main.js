const express = require('express')
const views = require('./controller/views.js')

const app = express()

const port = process.env.PORT || 3000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

views(app)

app.listen(port, () => {
    console.log(`App is running at port ${port}`)
})