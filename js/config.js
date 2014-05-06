requirejs.config( {
	"baseUrl":	"libs",
	"paths":	{
		"jquery":			"jquery/jquery-2.0.3",
		"jquery-migrate":	"jquery/jquery-migrate-1.2.1",
		"turn":             "turn/turn.min"
	},
	"shim":	{
		"jquery-migrate":	["jquery"],
		"turn":             ["jquery"]
	}
} );
