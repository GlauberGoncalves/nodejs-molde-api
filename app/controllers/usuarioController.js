const usuarioService = require('../services/usuarioService')


module.exports = app => { 

	app.get('/usuarios', async (req, res) => {
        usuarios = await usuarioService.findUsuarios();
        res.send(usuarios);
    }); 
    
}