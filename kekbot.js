try{API.off(API.CHAT, kekbot.handleCommand);}catch(e){}
try{kekbotmods = JSON.parse(JSON.stringify(kekbot.mods));}catch(e){}
var kekbot = {};

kekbot.enabled = false;
kekbot.name = "kekbot";

kekbot.mods = {};
kekbot.mods["KekBot"] = "admin";

kekbot.fortunes = [
	"Godly luck",
	"Good luck",
	"Bad luck",
	"Future hazy, try again",
	"You will never fall in love",
	"ｷﾀ(ﾟ∀ﾟ) !!!!",
	"You will meet a dark handsome stranger",
	"doge sais wow bad luck",
	"no keks 4 u",
	"Very bad luck",
	"super duper trooper luck",
	"Good news will come to you by mail"	
];

kekbot.handleCommand = function(data){
	if (data.type != "message"){
		return false;
	}
	msgsplit = data.message.split(" ");
	msg0 = msgsplit[0];
	msgsplit.shift();
	data.message = [msg0, msgsplit.join(" ")];
	switch(data.message[0]){
		case "%loadmods":
			kekbot.test.ifMod(data.from, true)&&
			kekbot.handle.loadmods(data);
			break;
		case "%enable":
			kekbot.test.ifMod(data.from, true)&&
			kekbot.handle.enable(data);
			break;
		case "%disable":
			kekbot.test.ifMod(data.from, true)&&
			kekbot.handle.disable(data);
			break;
		case "%roll":
			kekbot.enabled&&
			kekbot.handle.roll(data);
			break;
		case "%addmod":
			kekbot.enabled&&
			kekbot.test.ifMod(data.from, true)&&
			kekbot.handle.addmod(data);
			break;
		case "%modtest":
			kekbot.enabled&&
			kekbot.handle.modtest(data);
			break;
		case "%modlist":
			kekbot.enabled&&
			kekbot.test.ifMod(data.from)&&
			kekbot.handle.modlist(data);
			break;
		case "%downboats":
			kekbot.test.ifMod(data.from)&&
			kekbot.handle.downboats(data);
			break;
		case "%fortune":
			kekbot.enabled&&
			kekbot.handle.fortune(data);
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
kekbot.test.ifMod = function(who, admin){
	if (admin && kekbot.mods[who] == "admin"){
			return true;
	}
	else if(!admin && kekbot.mods[who]){
			return true;
	}
	else{
		return false;	
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
	var kbs = "KEKBOT MODLIST: ";
	for (mod in kekbot.mods){
		kbs += mod+"; ";
	}
	kekbot.say(kbs);
}
kekbot.handle.downboats = function(data){
	var kbs = "DOWNBOATS: ";
	var list = API.getUsers();
	for (user in list){
		if(list[user].vote == -1){
			kbs += list[user].username+"; ";
		}
	}
	kekbot.say(kbs);
}
kekbot.handle.loadmods = function(data){
	if(kekbotmods){
		kekbot.mods = kekbotmods;
		kekbotmods = null;
		kekbot.say("["+kekbot.name+"]: Loaded mods.");
	}
	else{
		kekbot.say("["+kekbot.name+"]: No mods to load!");
	}
}
kekbot.handle.fortune = function(data){
	kekbot.say("Fortune: "+kekbot.fortunes[Math.floor(Math.random()*kekbot.fortunes.length)]+" @"+data.from);
}

API.on(API.CHAT, kekbot.handleCommand);
kekbot.say("["+kekbot.name+"]: UPDATED.");