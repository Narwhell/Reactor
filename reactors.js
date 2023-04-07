let OverviewTab = document.getElementById("OverviewTab")
let ResearchTab = document.getElementById("ResearchTab")
let UpgradesTab = document.getElementById("UpgradesTab")
let SellButton = document.getElementById("sellButton")
let SaveButton = document.getElementById("saveButton")
let LoadButton = document.getElementById("loadButton")
OverviewTab.addEventListener("mouseover",function(){highlightOn(OverviewTab);});
OverviewTab.addEventListener("mouseout",function(){highlightOff(OverviewTab);});
ResearchTab.addEventListener("mouseover",function(){highlightOn(ResearchTab);});
ResearchTab.addEventListener("mouseout",function(){highlightOff(ResearchTab);});
UpgradesTab.addEventListener("mouseover",function(){highlightOn(UpgradesTab);});
UpgradesTab.addEventListener("mouseout",function(){highlightOff(UpgradesTab);});
SellButton.addEventListener("click",function(){sellPower();});
