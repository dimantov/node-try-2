const {MongoClient, ObjectID} = require('mongodb');
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  db.collection('Todos').findOneAndDelete({_id: new ObjectID("5bf30c1bd50e683138595e8f")}, (err, res)=>{
    if(err){
      return console.log(`Unable to delete todo ${err}`)
    }
    console.log(res);
  })


  client.close();
});
