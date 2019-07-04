module.exports.getUsuarios = function(application, req, res){ 

    const usuarios = [
        {nome: "usuario1", email: "usuario1@mail.com"},
        {nome: "usuario2", email: "usuario2@mail.com"},
        {nome: "usuario3", email: "usuario3@mail.com"},
        {nome: "usuario4", email: "usuario4@mail.com"},        
    ]
    
    res.send(usuarios);
}

module.exports.mostraPaths = function(application, req, res){     
    res.send({
        usuario:[
            {get: "/usuarios"},
            {get: "/usuarios/{id}"}
        ]
    });
}