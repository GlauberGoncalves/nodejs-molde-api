module.exports = function(application){
	application.get('/', function(req, res){
		application.app.controllers.usuarioCtrl.mostraPaths(application, req, res);
	});


	application.get('/usuarios', function(req, res){
		application.app.controllers.usuarioCtrl.getUsuarios(application, req, res);
	});

}