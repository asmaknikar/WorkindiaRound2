const { clearScreenDown } = require("readline");
const User = require("./model.js");

exports.addUser=(req,res) =>{
    if(!req.body)
        res.send("empty data");
        
    const u=new User({
    name:req.body.agent_id,
    password:req.body.password
    });

    User.create(u,(err,data)=>{
        if(err)
            res.send(err);
        else
            res.send(data);
    });
}