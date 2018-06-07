
const userRoutes = require('./user_routes');
const questionaryRoutes = require('./questionary_routes');
const positionRoutes = require('./position_routes');
module.exports= function(app,db){
    userRoutes(app,db);
    //questionaryRoutes(app,db);
    positionRoutes(app,db);
    //Other route groups go here in future
}