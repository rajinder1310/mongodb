var { MongoClient,ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=> {
    if(err) {
        return console.log(err,'Unable to connect  with MongoDB');
    }
    console.log('Connected To MongoDB');

    db.collection('Todos').find({completed : 'false'}).toArray().then((docs)=> {
        console.log(JSON.stringify(docs,undefined,2));
    },
    (err)=> {
        console.log('Error in fetching data from database');
    });
    db.collection('Users').count().then((docs)=> {
        console.log('Count is :',docs);
    },
    (err)=> {
        console.log('Error in fetching data from database');
    });
    db.collection('Users').find({name : 'andrew'}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs,undefined,2));
    },(err)=> {
        console.log('Unable to fetch specific name from database',err);
    });
})