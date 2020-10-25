require('dotenv').config();

const Mongo = require("mongodb");
const MongoClient = Mongo.MongoClient;
const client = new MongoClient(process.env.ATLAS_URI, {useUnifiedTopology: true});

(async () => {
    await client.connect();
    const database = client.db("testing");
    const collection = database.collection("recipes");

// Insert Method 1
    //const result = await collection.insertOne({
    //    "name": "Chocolate Cookies",
    //    "ingredients": [
    //        "Eggs",
    //        "Flour",
    //        "Chocolate Chips"
    //    ]
    //});
    //console.log(result.insertedId);

// Always used for finding documents {filter}
    //let recipesCursor = await collection.find({});  -> blank {} returns every doc
    //let recipesCursor = await collection.find({}, {"projection":{"_id":0}});
    //let recipesCursor = await collection.find({}).project({"_id":0});
   
// Retrieval Method 1
    //let recipes = await recipesCursor.toArray();
    //console.log(recipes);

// Retrieval Method 2
    //while (await recipesCursor.hasNext()){
    //    let recipe = await recipesCursor.next();
    //    console.log(recipe);
    //}
    //console.log(recipes);

// Update Method 1
    //let updateResults = await collection.updateOne({
    //    "_id": Mongo.ObjectID("5f95ac266d74c7330895e4ef")
    //},{
    //    "$set" : {
    //        "name":"Cookies"
    //    },
    //    //Add to set will not add if it is putting in a duplicate
    //    "$addToSet" : {
    //        "ingredients": "Sprinkles"
    //    }
    //});
    //console.log("UpdateOne: ", updateResults.modifiedCount)

// Update Method 2
    // let updateResults = await collection.updateOne({
    //     "name": "Lemon Pie"
    // },{
    //     //Add to set will not add if it is putting in a duplicate
    //     "$addToSet" : {
    //         "ingredients": "Lemon"
    //     },
    //     "$setOnInsert": {
    //         "comment" :"5 stars"
    //     }
    // },{
    //     "upsert":true
    // });
    // console.log("Upserted: ", updateResults.upsertedCount)

// Delete Method 1
    //let deleteResult = await collection.deleteMany({"ingredients": "Sugar"})
    //console.log("DeleteMany", deleteResult.deletedCount);

// Collection Count
    //let count = await collection.countDocuments({"ingredients":"Lemon"});
    //console.log("Count: ", count);

// Collection Drop
    //collection.drop();


    client.close(); 
})();