define( ["jquery", "jquery-migrate", "turn"], function() {

	$("#memories").turn({
		width: 1280,
		height: 720,
		autoCenter: true,
		duration: 1000,
		gradients: true,
		acceleration: true
	});
} );