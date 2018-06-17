var objectID = require('mongodb').ObjectID

module.exports = function(app, db){
    // GET
    app.get('/positions',(req,res)=>{
        //You will create user here
        
        db.collection('positions').find({},{ "_id": 0, "jobcode": 1,"jrss":1}).toArray((err, item)=>{
            if(err){
                res.send({'error':'An error has occured'});
            }
            else{
                res.send(item);
            }
        });
        
    });
    // GET
    app.get('/positions/:jobcode',(req,res)=>{
        //You will create user here
        console.log(req.body);
        const jobcode = req.params.jobcode;
        const details = {'jobcode':jobcode};

        db.collection('positions').findOne(details,(err, item)=>{
            if(err){
                res.send({'error':'An error has occured'});
            }
            else{

                db.collection('skills').find().toArray();

                res.send(item);
            }
        });
        
    });

    //DELETE
    app.delete('/positions',(req,res)=>{

        const id = req.params.id;
        const details = {'_id':new objectID(id)};

        db.collection('positions').remove(details, (err,item)=>{
            if (err) { 
                res.send({ 'error': 'An error has occurred' }); 
            } else {
                res.send(result.ops[0]);
            }
        });

    });
}