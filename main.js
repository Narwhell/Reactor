let ReactorTab = document.getElementById("ReactorTab")
let ResearchTab = document.getElementById("ResearchTab")
let UpgradesTab = document.getElementById("UpgradesTab")
let SellButton = document.getElementById("sellButton")
ReactorTab.addEventListener("mouseover",function(){highlightOn(ReactorTab);});
ReactorTab.addEventListener("mouseout",function(){highlightOff(ReactorTab);});
ResearchTab.addEventListener("mouseover",function(){highlightOn(ResearchTab);});
ResearchTab.addEventListener("mouseout",function(){highlightOff(ResearchTab);});
UpgradesTab.addEventListener("mouseover",function(){highlightOn(UpgradesTab);});
UpgradesTab.addEventListener("mouseout",function(){highlightOff(UpgradesTab);});
SellButton.addEventListener("click",function(){sellPower();});


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

let money = 0
let research = 0
let power = 0
let power_cap = 200

let last_time = null;
let total_time = 0;
setInterval(function GameLoop(){
	const current_time = Date.now();
	if (last_time === null){
		last_time = current_time;}
	const delta_time = current_time - last_time;
	total_time += delta_time;
	last_time = current_time;
	updateGame(delta_time, total_time)
	updatePowerbar()
},1000/60)

const powerPerSecond = 12;
const powerPerMillisecond = powerPerSecond/1000;

function updateGame(delta_time, total_time){
	if (power < power_cap){
	power += powerPerMillisecond*delta_time;
	}
	document.getElementById("powerPossessed").innerHTML = power.toFixed(2);
	document.getElementById("powerIncome").innerHTML = `+${powerPerSecond}`;
	document.getElementById("maxpowerPossessed").innerHTML = power_cap;
	document.getElementById("moneyPossessed").innerHTML = money.toFixed(2)
}

function updatePowerbar(){
	powerBar = document.getElementById("powerbarFill")
	powerBar.style.width = `${(power*100)/power_cap}%`
}

function sellPower(){
	money += power;
	power = 0;
	console.log("hey")
}