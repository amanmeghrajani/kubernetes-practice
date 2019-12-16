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
    let number = req.body.number + 30
    console.log(`received request with param number=${number}`)

        res.status(200).json({
            number: number
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


app.listen(config.ports.ts3, () => console.log(`ts3 app listening on port ${config.ports.ts3}!`))