
module.exports = function(app, db){

    app.post('/users',(req,res)=>{
        //You will create user here
        console.log(req.body);
        //res.send('Hello');
        const user = { 
            text: req.body.username,
            name: req.body.name, 
            empid:req.body.empid,
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
}