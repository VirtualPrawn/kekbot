try{API.off(API.CHAT, kekbot.handleCommand);}catch(e){}
try{kekbotmods = JSON.parse(JSON.stringify(kekbot.mods));}catch(e){}
var kekbot = {};

kekbot.enabled = true;
kekbot.name = "SB";
kekbot.version = "2.0_SexBotEdition";

//Bot mods.
kekbot.mods = {};
kekbot.mods["99999999999999999999get"] = "admin";
kekbot.mods["Sexual_Lobster"] = "admin";
kekbot.mods["Rikka-Takanashi"] = "admin";
kekbot.mods["Tabarnak"] = "admin";

//Bot fortunes.
kekbot.stairs = [
	"You will make it to the top of the stairs",
	"You will stay at the bottom of the stairs",
	"You will make it to the 7th stair",
	"You will make it to the top, but there will be more stairs",
	"You're at the sixth stair. Can you get the seventh?",
	"Wrong way! You are going down!",
	"How did you get to this stair?",
	"You're at the sixth stair. Can you get the seventh?",
	"Somebody is stairing at you.",
	"Good good, keep em steppin",
	"You were going up the wrong side of the stairs.",
	"You tripped up to stair 1",
	"Almost at the top, keep on stepping",
	"You reached the top, type %stairs to celebrate",
	"you fell down to stair 3",
	"lil wayne pushed you down the stairs",
	"TheReem is beating you up the stairs.",
	"!SPECIAL! dog down the stairs http://i.imgur.com/7Zfko9C.gif",
	"You've reached stair 11, nice dubs.",
	"you are neither up nor down",
	"you are caught in MC Escher's stairs",
	"Only one step to go",
	"Warned you bout them stairs bro",
	"You reached the top of these stairs but theres more stairs",
	"You took a stairlift...you cheater!",
	"You started from the bottom...And you are still at the bottom",
	"you tripped down the stairs and knocked over the table, this is why we can't have nice things",
	"you were frantically searching for your new chinos when you spotted a fitty and fell down the stairs",
	"You reached stair tree fiddy and noticed the stairs are actually an 8 story tall crustacean from the paleozoic era",
	"you know what they say, stairs are always one step ahead of you.",
	"Started from the dick, now you're here"
	
];

kekbot.fortune = [
        "Godly Luck",
        "Good Luck",
        "Bad Luck",
        "Future Hazy, Try Again",
        "You Will Never Fall In Love",
        "ｷﾀ(ﾟ∀ﾟ) !!!!",
        "You Will Meet A Dark Handsome Stranger",
        "Doge Sais 'wow bad luck'",
        "No Keks 4 U",
        "Very Bad Luck",
        "Super Duper Trooper Luck",
        "Good News Will Come To You By Mail",
        "Doge Blesses You",
        "Froge Blesses You",
        "You Will Get Dubs",
        "Wow Such Luck",
        "Don't Bet On It",
        "Ebin Luck",
        "Outlook good",
        "Excellent Luck",
        "Average Luck",
        "（　´_ゝ`）ﾌｰﾝ "
        

];

kekbot.john = [
	"John John",
	"Frank",
	"Its Gin.............AND PISS",
        "John John Decides When John John John Johns",
        "THE HECK?",
        "Good God Frank Its Good To See You",
        "Listen, You Look Like You Could Use A Drink",
        "You Wanna Take A Seat? Would You Like A Drink?",
        "First Take A Seat",
        "HHHMMMMMMMMM",
        "GOOD GOD Frank Its Been A Long Time",
        "Business or Business?",
        "Would You Like A Drink?",
        "A Drink Frank, Ill Get You One At The Bar",
        "The Russians Are Dumb, Dumber Than Fags",
        "These Things Take Time, They Take Preperation, They Take Champagne And They Take Something In My Hand",
        "It's Cold And Hard",
        "There's Nothing Cold And Hard In My Hand, There's Nothing, Not Even My Dick",
        "I Need Something In My Hand",
        "Not My Dick",
        "Do You Mind Frank?",
        "Lets Not Talk Business Till You've Had A Drink",
        "I Need To Get You A Drink",
        "Let Me Get You A Bar At The Drink",
        "You Want Gin?",
        "Business, Business, Not Until You've Had Your Drink",
        "It'l Get To You Once I Get It At The Bar",
        "Ill Mix You A Drink. Gin?",
        "Hah, Great",
        "Things Might Be Ok Now But They Might Not Be Okay For Much Longer",
        "You Know John, You Know Frank Its Not About The Money",
        "John, Frank",
        "We're Gonna Make A Drink",
        "Good Night, SWEET PRINCE",
        "Taste Your Drink Frank",
        "Down The Hatch",
        "TASTE IT",
        "How's Your Drink? Does It Burn?",
        "You Know I dont Usually Play Games Unless Im Dealing With A Fool Or Perhaps A Fag But You Might Qualify, As Both, At The Same Time, Together",
        "I'm John John Who Are You?"

];


kekbot.animal = [
        ":cat:",
        ":mouse:",
        ":rabbit:",
        ":frog:",
        ":koala:",
        ":pig:",
        ":cow:",
        ":monkey_face:",
        ":horse:",
        ":camel:",
        ":elephant:",
        ":snake:",
        ":baby_chick:",
        ":hatching_chick:",
        ":penguin:",
        ":bug:",
        ":ant:",
        ":snail:",
        ":tropical_fish:",
        ":whale:",
        ":dolphin:",
        ":ram:",
        ":water_buffalo:",
        ":rabbit2:",
        ":goat:",
        ":dog2:",
        ":mouse2:",
        ":dragon_face:",
        ":dragon_face:",
        ":leopard:",
        ":poodle:",
        ":cat2:",
        ":dromedary_camel:",
        ":blowfish:",
        ":ox:",
        ":pig2:",
        ":rooster:",
        ":dragon:",
        ":tiger2:",
        ":rat:",
        ":cow2:",
        ":whale2:",
        ":fish:",
        ":octopus:",
        ":beetle:",
        ":honeybee:",
        ":turtle:",
        ":chicken:",
        ":hatched_chick:",
        ":bird:",
        ":panda_face:",
        ":sheep:",
        ":racehorse:",
        ":monkey:",
        ":boar:",
        ":pig_nose:",
        ":bear:",
        ":tiger:",
        ":wolf:",
        ":hamster:",
        ":dog:",
        ":squirrel:",
        ":octocat:",
        ":smiley_cat:e"
];

kekbot.llor = [
	"You're doing it wrong because your a massive FAGGOT"

        

];

kekbot.genitalwarts = [
	"You should probably stop sleeping with me"

        

];



kekbot.say = function(msg){
	var lastmsg = $("#chat-input-field").val();
	$("#chat-input-field").val("/me | "+msg).trigger($.Event("keydown",{keyCode: 13}));
	$("#chat-input-field").val(lastmsg);
}
kekbot.say_raw = function(msg){
	$("#chat-input-field").val(msg).trigger($.Event("keydown",{keyCode: 13}));
}

//Bot tests.
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

//Bot oncommand handler.
kekbot.handleCommand = function(data){
//	 kekbot.say_raw("/clear");
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
			kekbot.test.ifMod(data.from, true)&&
			kekbot.handle.downboats(data);
			break;
		case "%stairs":
			kekbot.enabled&&
			kekbot.handle.stairs(data);
			break;
		case "%john":
			kekbot.enabled&&
			kekbot.handle.john(data);
			break;
		case "%llor":
			kekbot.enabled&&
			kekbot.handle.llor(data);
			break;
		case "%genitalwarts":
			kekbot.enabled&&
			kekbot.handle.genitalwarts(data);
			break;
		case "%fortune":
			kekbot.enabled&&
			kekbot.handle.fortune(data);
			break;
		case "%animal":
			kekbot.enabled&&
			kekbot.handle.animal(data);
			break;
		case "%removemod":
			kekbot.enabled&&
			kekbot.test.ifMod(data.from, true)&&
			kekbot.handle.removemod(data);
			break;
		case "%modtojson":
			kekbot.test.ifMod(data.from, true)&&
			kekbot.handle.modtojson(data);
			break;
		case "%jsontomod":
			kekbot.test.ifMod(data.from, true)&&
			kekbot.handle.jsontomod(data);
			break;
		case "%skip":
			kekbot.handle.skip(data);
			break;
		case "%coinflip":
			kekbot.enabled&&
			kekbot.handle.coinflip(data);
			break;
		case "%update":
			kekbot.test.ifMod(data.from, true)&&
			kekbot.handle.update(data);
			break;
		case "%upboat":
			kekbot.test.ifMod(data.from, true)&&
			kekbot.handle.upboat(data);
			break;
		case "%downboat":
			kekbot.test.ifMod(data.from, true)&&
			kekbot.handle.downboat(data);
			break;
		case "%djjoin":
			kekbot.enabled&&
			kekbot.test.ifMod(data.from)&&
			kekbot.handle.djjoin(data);
			break;
		case "%djleave":
			kekbot.enabled&&
			kekbot.test.ifMod(data.from)&&
			kekbot.handle.djleave(data);
			break;
		case "%listplaylists":
			kekbot.enabled&&
			kekbot.test.ifMod(data.from)&&
			kekbot.handle.listplaylists(data);
			break;
		case "%chooseplaylist":
			kekbot.enabled&&
			kekbot.test.ifMod(data.from)&&
			kekbot.handle.chooseplaylist(data);
			break;
		case "%nextup":
			kekbot.enabled&&
			kekbot.handle.nextup(data);
			break;
		case "%spam":
			kekbot.enabled&&
			kekbot.test.ifMod(data.from, true)&&
			kekbot.handle.spam(data);
			break;
		case "%help":
			kekbot.enabled&&
			kekbot.handle.help(data);
			break;
		case "%version":
			kekbot.enabled&&
			kekbot.handle.version(data);
		default:
			kekbot.readmsg(data);
			break;
	}
}

kekbot.readmsg = function(data){
	data.message = data.message.join(" ");
	if (data.message == "Does she love me?"){
		kekbot.enabled&&
		kekbot.say_raw("@"+data.from+": Yes.");
		
			if (data.from == "child porn star"){
			kekbot.say("Thank you #based Aya.");
		
		}
	}
	
//	else if (data.from == "Tabarnak"){
//	kekbot.say("Yes she does. Too bad you aren't a lezzo.");
//	}
	
	else if (data.message == "Does he love me?"){
		kekbot.enabled&&
		kekbot.say_raw("@"+data.from+": ew r u gay or something");		
	}
	else if (data.message == "Does RikkaTakanashi love me?"){
		kekbot.enabled&&
		kekbot.say_raw("@"+data.from+": she only loves @Tumithak");		
	}
	else if (data.message == "Does Sexual_Lobster love me?"){
		kekbot.enabled&&
		kekbot.say_raw("@"+data.from+": Of course i do :heart:");		
	}
		else if (data.message == "Where am i on the stairs?"){
		kekbot.enabled&&
		kekbot.say_raw("@"+data.from+": You're almost at the top!");		
	}
	else if (data.message == "BAGGER 288"){
		kekbot.enabled&&
		kekbot.say_raw("/me | BAGGER:two::eight::eight:");		
	}
	else if (data.message == "bake me a cake"){
		kekbot.enabled&&
		kekbot.say_raw("/me | bakes you a :cake:");		
	}
	else if (data.message == "BAKE ME A CAKE"){
		kekbot.enabled&&
		kekbot.say_raw("/me | BAKES YOU A :cake:");		
	}
	else if (data.message == "read me a book"){
		kekbot.enabled&&
		kekbot.say_raw("/me | reads you a :book:");		
	}
	else if (data.message == "ranch or cool ranch"){
		kekbot.enabled&&
		kekbot.say_raw("/me | cool ranch or get ded ");		
	}
	else if (data.message == "Jason Brazil"){
		kekbot.enabled&&
		kekbot.say_raw("/me | We'll I live the Beatles, for she reason I'm obsessed with Jason Brazil");		
	}
	else if (data.message == "How was dinner?"){
		kekbot.enabled&&
		kekbot.say_raw("just thinking back to my dinner today, I was yummy, Grated potato, onion and egg, all mixed up and then i put it around smoked salmon and baked it, I know, you dont need to cook smoked salmon, but it tastes even better, I think I've found my new favourite");		
	}
	
	
}



//Bot handlers.
kekbot.handle = {};
kekbot.handle.enable = function(){
	if(!kekbot.enabled){
		kekbot.say //("["+kekbot.name+"] Enabled.");
		kekbot.enabled = true;
	}
	else{
		kekbot.say("KekBot is already enabled!");
	}
}
kekbot.handle.disable = function(){
	if(kekbot.enabled){
		kekbot.say //("["+kekbot.name+"] Disabled.");
		kekbot.enabled = false;	
	}
	else{
		kekbot.say("KekBot is already disabled!");
	}
}
kekbot.handle.roll = function(data){
	kekbot.say("Roll: "+Math.floor(Math.random()*1000000)+" @"+data.from);
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
	var kbs = "MODLIST: ";
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
	var kbs = "DOWNBOATS: ur mom";
	kekbot.say(kbs);
}
kekbot.handle.loadmods = function(data){
	if(kekbotmods){
		kekbot.mods = kekbotmods;
		kekbotmods = null;
		kekbot.say("["+kekbot.name+"] Loaded mods.");
	}
	else{
		kekbot.say("["+kekbot.name+"] No mods to load!");
	}
}
kekbot.handle.stairs = function(data){
	kekbot.say(kekbot.stairs[Math.floor(Math.random()*kekbot.stairs.length)]+" @"+data.from);
}

kekbot.handle.john = function(data){
	kekbot.say(kekbot.john[Math.floor(Math.random()*kekbot.john.length)]+" @"+data.from);
}


kekbot.handle.fortune = function(data){
	kekbot.say(kekbot.fortune[Math.floor(Math.random()*kekbot.fortune.length)]+" @"+data.from);
}

kekbot.handle.animal = function(data){
	kekbot.say(kekbot.animal[Math.floor(Math.random()*kekbot.animal.length)]+" @"+data.from);
}

kekbot.handle.llor = function(data){
	kekbot.say(kekbot.llor[Math.floor(Math.random()*kekbot.llor.length)]+" @"+data.from);
}

kekbot.handle.genitalwarts = function(data){
	kekbot.say(kekbot.genitalwarts[Math.floor(Math.random()*kekbot.genitalwarts.length)]+" @"+data.from);
}


kekbot.handle.removemod = function(data){
	if (data.message[1][0] != "@"){
		kekbot.say("@"+data.from+": Remove who?");
		return false;
	}
	data.message[1] = data.message[1].substr(1);
	if(!kekbot.mods[data.message[1]]){
		kekbot.say("@"+data.from+": There is no mod with that username!");
	}
	else if(kekbot.mods[data.message[1]] == "admin"){
		kekbot.say("@"+data.from+": You can't remove admins from the throne, only the bot itself can!");
	}
	else{
		delete kekbot.mods[data.message[1]];
		kekbot.say("@"+data.from+": Removed "+data.message[1]+" from the modlist.");
	}
}
kekbot.handle.modtojson = function(data){
	kekbot.say(JSON.stringify(kekbot.mods));
}
kekbot.handle.jsontomod = function(data){
	console.log($("<div/>").html(data.message[1]).text());
	try{
		kekbot.mods = JSON.parse($("<div/>").html(data.message[1]).text());
		kekbot.say("Success!");
	}
	catch(e){
		kekbot.say("Error loading modlist from JSON.");
		kekbot.say(e);
	}
}
kekbot.handle.skip = function(data){
	$("#button-skip-this").click();
}
kekbot.handle.coinflip = function(data){
	var outcome = (Math.floor(Math.random()*2))?"TAILS":"HEADS";
	kekbot.say("Coinflip: "+outcome+" @"+data.from);
}
kekbot.handle.update = function(data){
//	kekbot.say_raw("/clear");
	kekbot.say_raw("/stream off");
	kekbot.say_raw("/cap 1");
	$("#playback-container").hide();
	$("#chat-messages").hide();
	$("#audience").hide();
	$("#booth-canvas").hide();
	$("#dj-canvas").hide();
	kekbot.say("Optimized.");
	kekbot.handle.loadmods();
	kekbot.handle.enable();
}
kekbot.handle.downboat = function(data){
	$("#button-vote-negative").click();
}
kekbot.handle.upboat = function(data){
	$("#button-vote-positive").click();
}
kekbot.handle.djjoin = function(data){
	if($("#button-dj-locked").css("display") == "block"){
			kekbot.say("Can't join DJ list, it's locked.");
			return false;
		}
		else if($("#button-dj-play").css("display") == "block" && API.getDJs().length == 5){
			kekbot.say("Can't join DJ list, it's full (waitlist is disabled).");
			return false;
		}
		API.djJoin();
		kekbot.say("Joined DJ.");
}
kekbot.handle.djleave = function(data){
	API.djLeave();
	kekbot.say("Left DJ.");
	kekbot.joineddj = false;
}
kekbot.handle.listplaylists = function(data){
	$("#button-my-playlists").click();
	kekbot.say("Reading playlists.");
	setTimeout(function(){
		var q = $("#playlist-menu-container > ul > li").get();
		for (i in q){
			var info = $(q[i]).children("span.playlist-row-label").get();
			kekbot.say("Playlist "+i+": "+$(info[0]).text()+" -- "+$(info[1]).text());
		}
		$("#media-overlay-header .overlay-close-button").click();
	}, 2000);
}

kekbot.handle.chooseplaylist = function(data){
	var message = data.message;
	$("#button-my-playlists").click();
	kekbot.say("Reading playlists.");
	setTimeout(function(){
		var selecteditem = $($("#playlist-menu-container > ul > li").get()[parseInt(message[1])]);
		try{
			$(selecteditem).mouseover().click().mouseup();
			setTimeout(function(){
				$("#playlist-activate-button").click();
				var info = $(selecteditem).children("span.playlist-row-label").get();
				kekbot.say("Playlist "+message[1]+": "+$(info[0]).text()+" selected.");
			},500)
		}catch(e){
			kekbot.say("Could not select playlist.");
			kekbot.say(e);
		}
		$("#media-overlay-header .overlay-close-button").click();
	}, 2000);
}
kekbot.handle.nextup = function(data){
	kekbot.say("Next up: "+$("#up-next").text());
}
kekbot.handle.spam = function(data){
	var arr = data.message[1].split(" ");
	var time = parseInt(arr[0]);
	var amt = parseInt(arr[1]);
	arr.shift();
	arr.shift();
	var msg = arr.join(" ");
	var amtspammed = 0;
	function runspam(){
		if (amtspammed >= amt){
			return false;
		}
		kekbot.say_raw(msg);
		amtspammed++;
		setTimeout(runspam, time);
	}
	runspam();
}
kekbot.handle.help = function(data){
	kekbot.say("@"+data.from+": See https://github.com/VirtualPrawn/kekbot thanks to https://github.com/Strategetical ");
}
kekbot.handle.version = function(data){
	kekbot.say("@"+data.from+": SexBot v"+kekbot.version+". Created by VirtualPrawn original by Strategetical (https://github.com/Strategetical/)");
}

//Bot users.
kekbot.users = {};


//Load the bot.
API.on(API.CHAT, kekbot.handleCommand);
kekbot.say("["+kekbot.name+"]: Updated code.");
