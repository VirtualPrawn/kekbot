var kekbot = {};
kekbot.enable = function(){
	API.on(API.CHAT, kekbot.handleCommand);
	kekbot.say("[bot] Enabled.");
}
kekbot.say = function(msg){
	$("#chat-input-field").val(msg).trigger($.Event("keydown",{keyCode: 13}));
}
kekbot.disable = function(){
	API.off(API.CHAT, kekbot.handleCommand);
	kekbot.say("[bot] Disabled.");
}
kekbot.handleCommand = function(data){
	if (data.type != "message"){
		return false;
	}
	if (data.message == "%roll"){
		kekbot.say("Roll: "+Math.floor(Math.random()*999999)+" @"+data.from);
	}
}
