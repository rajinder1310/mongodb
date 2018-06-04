var { MongoClient,ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=> {
    if(err) {
        return console.log(err,'Unable to connect  with MongoDB');
    }
    console.log('Connected To MongoDB');

    db.collection('Users').findOneAndDelete({name : 'vicky'}).then((docs)=>{
        console.log(docs);
    },(err)=> {
        console.log('Unable to fetch specific name from database',err);
    });
})