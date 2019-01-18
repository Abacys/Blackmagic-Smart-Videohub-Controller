/**
 * Multiview Class
 */


class Multiview{
	
	var MV = {};
	
	constructor(port, ip){
		MV = net.createConnection(port, '192.168.2.153',function() {
			console.log('Connected to server!');
		});
		
	}
	
	MV.on('data', function (data) {
	    broadcast(socket.name + "> " + data, socket);
	});
}