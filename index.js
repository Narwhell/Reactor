
console.log(JSON.parse(localStorage.getItem(92652352356)))

if(JSON.parse(localStorage.getItem(92652352356)) == null)
{
	let gamestate = 
	{
		money : 0,
		research : 0,
		power : 0,
		power_cap : 200,
		total_time : 0,
		powerPerSecond : 12,
	};
	console.log("gamestate was null");
	localStorage.setItem(92652352356, JSON.stringify(gamestate));
} 
console.log(JSON.parse(localStorage.getItem(24135614623)))

if(JSON.parse(localStorage.getItem(24135614623)) == null)
{
	placed_components = {};
	console.log("placed_objects was null")
	localStorage.setItem(24135614623, JSON.stringify(placed_components));
}
load();
console.log(gamestate)

function save(gamestate){
	localStorage.setItem(92652352356, JSON.stringify(gamestate))
	localStorage.setItem(24135614623, JSON.stringify(placed_components))
	console.log("saved gamestate to localStorage")
}

function load() {
	console.log("load attempt")
	if (JSON.parse(localStorage.getItem(92652352356)) != null){
		console.log("load success")
		gamestate = JSON.parse(localStorage.getItem(92652352356));
		updateGame(0, gamestate.total_time)
		console.log("totaltime =", gamestate.total_time)
		loadPlaced();
}}

function loadPlaced(){
	console.log("loading placed - attempt")
	if (JSON.parse(localStorage.getItem(24135614623)) != null){
		console.log("load success")
		placed_components = JSON.parse(localStorage.getItem(24135614623));
		updatePlaced()
}
}
/*
function updatePlaced(){
	console.log("attempt to update placed components")
	Object.keys(placed_components).forEach(function(pos){
		let toBePlaced = getTileByDataPos(pos)
		toBePlaced = placed_components[pos]
	})
					       
	console.log("attempt completed")				   
}
*/
function updatePlaced(){
	console.log("attempt to update placed components")
	console.log(placed_components)
	if (placed_components != null){
	Object.keys(placed_components).forEach(function(pos){
		console.log(placed_components[pos]);
		console.log(pos);
 		let toBePlaced = getTileByDataPos(pos)
		console.log(toBePlaced);
    		if (toBePlaced != null) {
      			let newClassList = placed_components[pos]
			console.log(newClassList);
			console.log(typeof newClassList);
      			newClassList.forEach(function(class){
				console.log(toBePlaced, class)
				toBePlaced.classlist.add(class)
			})
    }
  })
  console.log("attempt completed")
}}

function getTileByDataPos(pos){
  let selector = '[data-pos="' + pos + '"]';
  let tile = document.querySelectorAll(selector);
  console.log('pos:', pos);
  console.log('selector:', selector);
  console.log('tile:', tile);
  return tile;
}



function highlightOn(obj){
	obj.style = "background:grey";
}

function highlightOff(obj){
	obj.style = "background:black";
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
	console.log("power sold.")
}
