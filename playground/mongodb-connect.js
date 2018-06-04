var { MongoClient,ObjectID } = require('mongodb');
var newid = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=> {
    if(err) {
        return console.log(err, 'Unable to connect with Database MongoDB');
    }
    console.log('Connected to MongoDB');
    //To create a collection 
    db.collection('Todos').insertOne({
        text : ' Something To Do',
        completed : false
    },(err,result)=> {
        if(err) {
            return console.log(err,'Unable to insert in Todos');
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });
    db.close();
    //To create Document Users with name , age and location
    db.collection('Users').insertOne({
        name : 'vicky',
        age : 23,
        location : 'Rajpura'
    },(err,result)=> {
        if(err) {
            return console.log(err,'Error in insert in to Users');
        }
        console.log(newid);
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
    });
        db.collection('Users').insertOne({
        name : 'vicky',
        age : 23,
        location : 'Rajpura'
    },(err,result)=> {
        if(err) {
            return console.log(err,'Error in insert in to Users');
        }
        console.log(newid);
        console.log('Document Inserted Successfullly');
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
    });
  
});