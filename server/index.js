//Main starting point of hte application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan')
const app = express();
const router = require('./router')
const { MongoClient } = require('mongodb')
const mongoose = require('mongoose')
const cors = require('cors');


//App Setup
app.use(morgan('combined'))
app.use(cors());
app.use(bodyParser.json({type: '*/*'}));
router(app);

//MongoDB Compass Connection

    const uri = "mongodb://jarodAdmin:oT1gi5ai@cluster0-shard-00-00.lxjso.mongodb.net:27017,cluster0-shard-00-01.lxjso.mongodb.net:27017,cluster0-shard-00-02.lxjso.mongodb.net:27017/test?replicaSet=atlas-e1lgp1-shard-0&ssl=true&authSource=admin";
    
    mongoose.connect(uri)



async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */


    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
 




//Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log(`Server listening on port ${port}`)