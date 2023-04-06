
console.log(JSON.parse(localStorage.getItem(92652352356)))

if(JSON.parse(localStorage.getItem(92652352356)) == null)
{
	let gamestate = 
	{
		var money : 0,
		var research : 0,
		var power : 0,
		var power_cap : 200,
		var total_time : 0,
		var powerPerSecond : 12,
	};
	console.log("gamestate is null");
	console.log(gamestate.power);
} 
else {load();}

function save(gamestate){
	localStorage.setItem(92652352356, JSON.stringify(gamestate));
	console.log("boobs")
}

function load() {
	console.log("load attempt")
	if (JSON.parse(localStorage.getItem(92652352356)) != null){
		console.log("load success")
		gamestate = JSON.parse(localStorage.getItem(92652352356));
		updateGame(0, gamestate.total_time)
		console.log("ass", gamestate.total_time)
}}

function highlightOn(obj){
	obj.style = "background:grey";
}

function highlightOff(obj){
	obj.style = "background:black";
}

function getTile(){
	tile = document.querySelectorAll('[data-pos="1_34"]');
	tile.style = "background:blue";
	console.log(tile)
}

let last_time = null;
setInterval(function GameLoop(){
	const current_time = Date.now();
	if (last_time === null){
		last_time = current_time;}
	const delta_time = current_time - last_time;
	gamestate.total_time += delta_time;
	last_time = current_time;
	updateGame(delta_time, gamestate.total_time)
	updatePowerbar()
},1000/60)

function updateGame(delta_time, total_time){
	let powerPerMillisecond = gamestate.powerPerSecond/1000;
	if (gamestate.power < gamestate.power_cap){
	gamestate.power += powerPerMillisecond*delta_time;
	}
	document.getElementById("powerPossessed").innerHTML = gamestate.power.toFixed(2);
	document.getElementById("powerIncome").innerHTML = `+${gamestate.powerPerSecond}`;
	document.getElementById("maxpowerPossessed").innerHTML = gamestate.power_cap;
	document.getElementById("moneyPossessed").innerHTML = gamestate.money.toFixed(2)
}

function updatePowerbar(){
	powerBar = document.getElementById("powerbarFill")
	powerBar.style.width = `${(gamestate.power*100)/gamestate.power_cap}%`
}

function sellPower(){
	gamestate.money += gamestate.power;
	gamestate.power = 0;
	console.log("hey")
}
