const express = require('express')
const app = express()

const port = process.env.PORT || 5500;


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

app.get('/zuri', (req, res) => {
    const slackName = "Obafemi Joshua"

    const Today = new Date()
    const currentDay = Today.toLocaleDateString('en-us', {  weekday: 'long' })
    const utcTime = Today.toISOString()

    const track = "backend"

    const githubFileUrl = "https://github.com/jorshimayor/zuri_backend_week1/blob/main/index.js"
    const githubRepoUrl = "https://github.com/jorshimayor/zuri_backend_week1"

    const response = {
        slack_name: slackName,
        current_day: currentDay,
        utc_time: utcTime,
        track: track,
        github_file_url: githubFileUrl,
        github_repo_url: githubRepoUrl,
        status_code: 200
    }

    res.json(response)
})

module.exports = app