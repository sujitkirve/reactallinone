
module.exports = function(app, db){

    app.post('/users/register',(req,res)=>{
        //You will create user here
        console.log(req.body);
        //res.send('Hello');
        const user = { 
            username: req.body.username,
            firstName: req.body.firstName,
            lastName: req.body.lastName, 
            email:req.body.email,
            password:req.body.password
        };

        db.collection('users').insert(user, (err, result) => {
            if (err) { 
                res.send({ 'error': 'An error has occurred' }); 
            } else {
                res.send(result.ops[0]);
            }
        });
    });

    app.post('/users/login',(req,res)=>{
        //You will create user here
        console.log(req.body);
        //res.send('Hello');
        const userdetails = { 
            username: req.body.username,
            password:req.body.password
        };

        
        db.collection('users').findOne(userdetails,(err, result)=>{
            if(err){
                res.send({'error':'An error has occured'});
            }
            else{
                if(result){
                    console.log(result);
                    res.send(result);
                }
                else{
                    const error ={
                        code:'000001',
                        message:'Username or password is incorrect'
                    };
                    res.send({'error':error});
                }
                
            }
        });

       
    });
}