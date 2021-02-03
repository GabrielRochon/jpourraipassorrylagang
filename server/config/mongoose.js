const util = require('util');

const config = require('./config');
const dotenv = require('dotenv');
dotenv.config();

// connect to mongo db
const MongoClient = require('mongodb').MongoClient;
const mongoUri = "mongodb+srv://user:" + process.env.MONGODB_PASSWORD + "@cluster0.nschy.azure.mongodb.net/<dbname>?retryWrites=true&w=majority;"
const client = new MongoClient(mongoUri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
