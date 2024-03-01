let cool = require("cool-ascii-faces");
let express = require("express");
let bodyParser = require("body-parser");
let contactAPI = require("./api-contacts");
let dataStore = require("nedb");

let dbContacts = new dataStore();

let app = express();

const PORT = (process.env.PORT || 10000);

app.use(bodyParser.json());

contactAPI(app,dbContacts);

app.use("/",express.static("./public"));

app.get("/cool", (req,res)=>{
    res.send(`<html><body><h1>${cool()}</h1></body></html>`);
});

app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}.`);
});

console.log(`Server initializing...`);
