const { MongoClient } = require('mongodb')

async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb://jarodAdmin:oT1gi5ai@cluster0-shard-00-00.lxjso.mongodb.net:27017,cluster0-shard-00-01.lxjso.mongodb.net:27017,cluster0-shard-00-02.lxjso.mongodb.net:27017/test?replicaSet=atlas-e1lgp1-shard-0&ssl=true&authSource=admin";
 

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
 
