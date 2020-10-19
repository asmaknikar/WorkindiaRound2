module.exports=app=>{
    const users = require("./controller.js");
    app.post("/app/agent",users.addUser);
}