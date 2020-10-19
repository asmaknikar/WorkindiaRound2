const conn=require("./database.js");

const User = function(user) {
    this.agent_id = user.agent_id;
    this.password = user.password;
}

User.create = (u,result)=>{
    conn.query("insert into users SET ?",u,(err,res)=>{
        if(err)
            throw err;
        else
            result(null,{
                status: "account created",
                status_code: 200
            })
    })
}

module.exports=User;