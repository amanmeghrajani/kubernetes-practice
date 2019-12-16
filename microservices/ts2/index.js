let express = require("express")
let app = express()
let bodyParser = require("body-parser")
let config = require("./config")
let axios = require("axios")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))


app.post("/", function (req, res, next) {
    let number = req.body.number + 20
    console.log(`received request with param number=${number}`)
    let url = "http://" + config.hosts.ts3 + ":" + config.ports.ts3
    console.log(`received request with param number=${number}, ready to call url: ${url}`)
  
    axios.post(url, {number:number}).then(function(result){
        res.status(200).json({
            number: result.data.number
        })
    }).catch(function(err) {
        res.status(500).json({
            message: "Received error from ts2",
            error: err
        })
    })
})

app.get("/liveliness", function(req, res, next) {
    res.status(200).json({
        message: "success"
    })
})

app.get("/readiness", function(req, res, next){
    res.status(200).json({
        message: "success"
    })
})


app.listen(config.ports.ts2, () => console.log(`ts2 app listening on port ${config.ports.ts2}!`))