import express from "express";
import bodyParser  from "body-parser";
import {loadBackend}  from "./back/index.js";
import dataStore  from "nedb";
import {handler} from "./front/build/handler.js";

let dbContacts = new dataStore();

let app = express();

const PORT = (process.env.PORT || 10000);

app.use(bodyParser.json());

loadBackend(app,dbContacts);

app.use(handler);

app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}.`);
});

console.log(`Server initializing...`);
