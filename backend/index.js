const express = require("express")
const app = express()
const port = process.env.PORT || 5500

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json())


app.get("/api", (req, res) => {
  const slack_name = req.query.slack_name
  const track = req.query.track

  if (!slack_name || !track) {
    return res
      .status(400)
      .send({ error: "Both slack_name and track parameters are required!" })
  }

  const currentDate = new Date()
  const Day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]
  
  const currentDay = Day[currentDate.getUTCDay()]
  const utcTime = new Date().toISOString().slice(0, -5) + "Z"

  const response = {
    slack_name,
    current_day: currentDay,
    utc_time: utcTime,
    track,
    github_file_url: "https://github.com/jorshimayor/zuri_backend_week1/blob/main/backend/index.js",
    github_repo_url: "https://github.com/jorshimayor/zuri_backend_week1",
    status_code: 200,
  };

  res.json(response)
});

app.get("*", (req, res) => {
  res.status(404).json({
    message: "Not Found!",
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});

module.exports = app