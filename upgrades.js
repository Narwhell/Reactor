let ReactorTab = document.getElementById("ReactorTab")
let ResearchTab = document.getElementById("ResearchTab")
let OverviewTab = document.getElementById("OverviewTab")
let SellButton = document.getElementById("sellButton")
let SaveButton = document.getElementById("saveButton")
let LoadButton = document.getElementById("loadButton")
ReactorTab.addEventListener("mouseover",function(){highlightOn(ReactorTab);});
ReactorTab.addEventListener("mouseout",function(){highlightOff(ReactorTab);});
ResearchTab.addEventListener("mouseover",function(){highlightOn(ResearchTab);});
ResearchTab.addEventListener("mouseout",function(){highlightOff(ResearchTab);});
OverviewTab.addEventListener("mouseover",function(){highlightOn(OverviewTab);});
OverviewTab.addEventListener("mouseout",function(){highlightOff(OverviewTab);});
SellButton.addEventListener("click",function(){sellPower();});
