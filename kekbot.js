var kekbot = {};
kekbot.enabled = false;
kekbot.name = "kekbot";
kekbot.enable = function(){
	if(!kekbot.enabled){
		API.on(API.CHAT, kekbot.handleCommand);
		kekbot.say("["+kekbot.name+"] Enabled.");
		kekbot.enabled = true;	
	}
	else{
		console.log("KekBot is already enabled!");
	}
}
kekbot.say = function(msg){
	$("#chat-input-field").val(msg).trigger($.Event("keydown",{keyCode: 13}));
}
kekbot.disable = function(){
	if(kekbot.enabled){
		API.off(API.CHAT, kekbot.handleCommand);
		kekbot.say("["+kekbot.name+"] Disabled.");
		kekbot.enabled = false;	
	}
	else{
		console.log("KekBot is already disabled!");
	}
}
kekbot.handleCommand = function(data){
	if (data.type != "message"){
		return false;
	}

	switch(data.message){
		case "%roll":
			kekbot.handle.roll(data);
			break;
		default:
			break;
	}
}
kekbot.handle = {};
kekbot.handle.roll = function(data){
	kekbot.say("Roll: "+Math.floor(Math.random()*999999)+" @"+data.from);
}