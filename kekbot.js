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
	msgsplit = data.message.split(" ");
	msg0 = msgsplit[0];
	msgsplit.shift();
	data.message = [msg0, msgsplit.join(" ")];
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
		case "%modtest":
			kekbot.test.ifEnabled(data, kekbot.handle.modtest);
			break;
		case "%modlist":
			kekbot.test.ifMod(data, kekbot.handle.modlist);
			break;
		case "%downboats":
			kekbot.test.ifMod(data, kekbot.handle.downboats);
			break;
		default:
			break;
	}
}

kekbot.say = function(msg){
	var lastmsg = $("#chat-input-field").val();
	$("#chat-input-field").val(msg).trigger($.Event("keydown",{keyCode: 13}));
	$("#chat-input-field").val(lastmsg);
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
	if (data.message[1][0] != "@"){
		kekbot.say("@"+data.from+": Add who?");
		return false;
	}
	data.message[1] = data.message[1].substr(1);
	kekbot.mods[data.message[1]] = true;
	kekbot.say("@"+data.from+": Added "+data.message[1]+" to the modlist.");
}
kekbot.handle.modtest = function(data){
	if (kekbot.mods[data.from]){
		kekbot.say("@"+data.from+": You are privileged!");
	}
	else{
		kekbot.say("@"+data.from+": You're not privileged!");
	}
}
kekbot.handle.modlist = function(data){
	kekbot.say("!==KEKBOT MODLIST==!");
	for (mod in kekbot.mods){
		kekbot.say(mod);
	}
	kekbot.say("!==END MODLIST==!");
}
kekbot.handle.downboats = function(data){
	kekbot.say("!===DOWNBOATS===!");
	var list = API.getUsers();
	for (user in list){
		if(list[user].vote == -1){
			kekbot.say(list[user].username);
		}
	}
	kekbot.say("!===END LIST===!");
}
API.on(API.CHAT, kekbot.handleCommand);
kekbot.say("["+kekbot.name+"]: UPDATED.");