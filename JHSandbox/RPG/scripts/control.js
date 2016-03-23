
var player;
var worldMap;
var charName;
var charClass;


function callOnLoad() {

    addListeners();
    initializeWorld();

}

function initializeWorld(){

    //attempt to load game
    //initialize global game variables, location, worldMap, events,
    worldMap = new WorldMap()

}

function addListeners(){

    window.addEventListener("click",slideOut);
    console.log("events added");

    document.getElementById("topClassButton").addEventListener("click",classSelect);
    document.getElementById("middleClassButton").addEventListener("click",classSelect);
    document.getElementById("bottomClassButton").addEventListener("click",classSelect);
    document.getElementById("goButton").addEventListener("click",enterGame);
    document.getElementById("characterName").addEventListener("input",nameSet);

}

function classSelect(event){
    classSelectAnimation(event);
    //console.log(event.target.id);
    if(event.target.id == "topClassButton"){
        charClass = "dragoon";
    }else if(event.target.id == "middleClassButton"){
        charClass = "energist";
    }else{
        charClass = "soldier";
    }
    console.log(charClass);

}

function nameSet(event){
    charName = document.getElementById("characterName").value;
    console.log(charName);
}

function initializePlayer(){

    charName = document.getElementById("characterName").value;

    if(charClass == "dragoon"){
        player = new Dragoon(charName)
    }else if(charClass == "energist"){
        player = new Energist(charName)
    }else if(charClass == "soldier"){
        player = new Soldier(charName)
    }

    console.log(player);
}

function enterGame(){
    if(charName == null || charName == "" || charName == "undefined"){
        //send error that they need to name their character
    }else if(charClass == null || charClass == "" || charClass == "undefined"){
        //send error that they need to pick a class
    }else{
        //enter the game
        enterGameAnimation();
        initializePlayer();
        document.getElementById("topClassButton").removeEventListener("click",classSelect);
        document.getElementById("middleClassButton").removeEventListener("click",classSelect);
        document.getElementById("bottomClassButton").removeEventListener("click",classSelect);
        document.getElementById("goButton").removeEventListener("click",enterGame);
        document.getElementById("characterName").removeEventListener("input",nameSet);
    }

}





