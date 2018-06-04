var { MongoClient,ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=> {
    if(err) {
        return console.log(err,'Unable to connect  with MongoDB');
    }
    console.log('Connected To MongoDB');
     db.collection('Todos').findOneAndUpdate(
         {_id : new ObjectID('5b0e418d2c1d331e8406edf1')},
         {$set : {
             completed : 'true'
         }},
         {returnOriginal : false}).then((result)=> {
            console.log(result);
         },(err)=> {
             console.log('Error In Updating Document',err);
         });
    db.collection('Users').findOneAndUpdate(
        {_id : new ObjectID('5b102e9324ccb31b80794d4f')},
        {$set : {
                    name : 'rajinder'
                },
         $inc : {
             age : 1
         }
        },
        {returnOriginal : false}).then((result)=> {
           console.log(result);
        },(err)=> {
            console.log('Error In Updating Document',err);
        });
});