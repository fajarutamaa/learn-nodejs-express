const { ResponseTemplate } = require('')

function TestUser(req, res){
    res.json({
        "data":null,
        "message":"Berhasil Masuk User",
        "status":200
       })
}

function TestUserPost(req, res){
    res.json({
        "data":null,
        "message":"Berhasil Masuk User",
        "status":200
       })
}



module.exports ={
    TestUser,
}