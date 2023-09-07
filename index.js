const express = require('express')
const app = express()

const port = process.env.PORT || 5500;


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

app.get('/zuri', (req, res) => {
    const slack = req.query.slack_name

    const Date = new Date()
    const currentDay = Date.getDay()

    const track = req.query.track

    const githubFileUrl = ""
    const githubRepoUrl = "https://github.com/jorshimayor/zuri_backend_week1"

    const statusCode = res.statusCode()
})