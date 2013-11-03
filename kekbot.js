try{API.off(API.CHAT, kekbot.handleCommand);}catch(e){}
var kekbot = {};

kekbot.enabled = false;
kekbot.name = "kekbot";

kekbot.mods = {};
kekbot.mods["KekBot"] = "admin";

kekbot.handleCommand = function(data){
	if (data.type != "message"){
		return false;
	}
	data.message = data.message.split(" ");
	switch(data.message[0]){
		case "%enable":
			kekbot.test.ifMod(data, kekbot.handle.enable, true);
			break;
		case "%disable":
			kekbot.test.ifMod(data, kekbot.handle.disable, true);
			break;
		case "%roll":
			kekbot.test.ifEnabled(data, kekbot.handle.roll);
			break;
		case "%addmod":
			kekbot.test.ifEnabled(data, function(data){kekbot.test.ifMod(data, kekbot.handle.addmod, true)});
			break;
		default:
			break;
	}
}

kekbot.say = function(msg){
	$("#chat-input-field").val(msg).trigger($.Event("keydown",{keyCode: 13}));
}

kekbot.test = {};
kekbot.test.ifEnabled = function(data, func){
	if (kekbot.enabled){
		func(data);
	}
}
kekbot.test.ifMod = function(data, func, admin){
	if (admin){
		if (kekbot.mods[data.from] && kekbot.mods[data.from] == "admin"){
			func(data);
		}
	}
	else{
		if (kekbot.mods[data.from]){
			func(data);
		}
		else{
			kekbot.say("You're not privileged! @"+data.from);
		}	
	}
}


kekbot.handle = {};
kekbot.handle.enable = function(){
	if(!kekbot.enabled){
		kekbot.say("["+kekbot.name+"] Enabled.");
		kekbot.enabled = true;
	}
	else{
		kekbot.say("KekBot is already enabled!");
	}
}
kekbot.handle.disable = function(){
	if(kekbot.enabled){
		kekbot.say("["+kekbot.name+"] Disabled.");
		kekbot.enabled = false;	
	}
	else{
		kekbot.say("KekBot is already disabled!");
	}
}
kekbot.handle.roll = function(data){
	kekbot.say("Roll: "+Math.floor(Math.random()*999999)+" @"+data.from);
}
kekbot.handle.addmod = function(data){
	data.message[1] = data.message[1].split('"')[0];
	kekbot.mods[data.message[1]] = true;
	kekbot.say("@"+data.from+": Added "+data.message[1]+" to the modlist.");
}
API.on(API.CHAT, kekbot.handleCommand);