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

  // db.collection('Todos').findOneAndUpdate({name:'Dmitri'},{$set: {name:'Roman'}},(err, res) => {
  //   if(err){
  //     return console.log(err)
  //   }
  //   console.log(res);
  // })

  db.collection('Todos').findOneAndUpdate({name:'Roman'}, {$set:{name:'Dmitri'},$inc:{age:3}}, {returnOriginal: false}).then((res)=> {
    console.log(JSON.stringify(res.value, undefined, 2));
  },(err) => {
    console.log(err);
  })


  client.close();
});
