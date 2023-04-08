let ReactorTab = document.getElementById("ReactorTab")
let ResearchTab = document.getElementById("ResearchTab")
let UpgradesTab = document.getElementById("UpgradesTab")
let SellButton = document.getElementById("sellButton")
let SaveButton = document.getElementById("saveButton")
let LoadButton = document.getElementById("loadButton")
ReactorTab.addEventListener("mouseover",function(){highlightOn(ReactorTab);});
ReactorTab.addEventListener("mouseout",function(){highlightOff(ReactorTab);});
ResearchTab.addEventListener("mouseover",function(){highlightOn(ResearchTab);});
ResearchTab.addEventListener("mouseout",function(){highlightOff(ResearchTab);});
UpgradesTab.addEventListener("mouseover",function(){highlightOn(UpgradesTab);});
UpgradesTab.addEventListener("mouseout",function(){highlightOff(UpgradesTab);});
SellButton.addEventListener("click",function(){sellPower();});
SaveButton.addEventListener("click",function(){save(gamestate);});
LoadButton.addEventListener("click",function(){load();});
let SolarBuyer = document.getElementById("solar-panel")

let PlaceableTiles = document.getElementsByClassName("placeable")
console.log(PlaceableTiles)

SolarBuyer.addEventListener("click",function(e){shopInteract(e)})

let thistilegrid = {}
for (var i = 0; i < PlaceableTiles.length; i++) {
    thistilegrid[`thistile${i+1}`] = PlaceableTiles[i]
    thistilegrid[`thistile${i+1}`].addEventListener('click', function(e){interact(e)});
    console.log(`placeable tile ${i+1} added`)
}
console.log(thistilegrid)
console.log(thistilegrid[`thistile${1}`])

function shopInteract(tile){
    console.log("shop interaction logged")
    console.log(tile)
}

function interact(tile){
    console.log("Read interaction")  
    console.log(tile)
}
