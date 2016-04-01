
var player;
var worldMap;
var charName;
var charClass;
var gameState = "newGame";
var doneTyping = true;
var currentEvent;
var cursor;
var textArea;


function callOnLoad() {

    //attempt to read local storage
    //if no data found do regular game initialization
    //else load game data and go back to currentEvent

    cursor = document.getElementById("cursor");
    textArea = document.getElementById("textArea");
    var optionsMenu = document.getElementById("optionsMenu")

    optionsMenu.addEventListener("click",showOptionsMenu)
    optionsMenu.style.opacity = "0.8";
    var resetButton = document.getElementById("resetButton")
    resetButton.addEventListener("click",resetGame)

    if(!loadGame()){
        addListeners();
        initializeWorld();
    }else{
        skipIntroductionAnimations();
        playEvent(currentEvent)
    }



}
function resetGame(){
    localStorage.currentEvent = null
    localStorage.player = null
    localStorage.worldMap = null
    location.reload();
}

function showOptionsMenu(){
    var optionsMenu = document.getElementById("optionsMenu")
    console.log(optionsMenu.style.opacity)

    if(optionsMenu.style.opacity == "0.8"){
        //bring it to front
        optionsMenu.style.opacity = "1";
        optionsMenu.style.right = "20%";
        optionsMenu.style.top = "5%";
    }else{
        //send it back to the corner
        optionsMenu.style.opacity = "0.8";
        optionsMenu.style.right = "-40%";
        optionsMenu.style.top = "-40%";
    }
}

function initializeWorld(){

    //attempt to load game
    //initialize global game variables, location, worldMap, events,


    var startingLaboratory = new Location([new beginStoryEvent(), new firstCombatEvent(), new afterFirstCombatEvent()],"Strange Laboratory");
    var zombieField = new Location([new level2CombatOption1(),new level2CombatOption1(),new level2CombatOption2()],"Zombie Field")
    var crabField = new Location([new level1CombatOption1(),new level1CombatOption1(),new level1CombatOption2()],"Crab Field")
    var emptyBuilding = new Location([new emptyBuildingEvent()],"Empty Building")

    //var locations = [startingLaboratory,zombieField,crabField,emptyBuilding]
    var locations =
        [
            [startingLaboratory,crabField],
            [emptyBuilding,zombieField]
        ]
    worldMap = new WorldMap(2,2,locations); //2 by 2 world will have 4 locations

    console.log(worldMap);

}

function loadGame(){

    //console.log(localStorage.gameState)

    try{
        var loadedCurrentEvent = JSON.parse(localStorage.currentEvent)
        var loadedPlayer = JSON.parse(localStorage.player)
        var loadedWorldMap = JSON.parse(localStorage.worldMap)
        //var loadedGameState = JSON.parse(localStorage.gameState)

        console.log(loadedPlayer)

        player = loadedPlayer;
        worldMap = loadedWorldMap;
        currentEvent = loadedCurrentEvent;
    }catch(e){
        player = null
        worldMap = null
        currentEvent = null
    }


    //if loading worked return true else return false
    if(player != null && worldMap != null && currentEvent != null){
        return true
    }else{
        return false
    }
}

function skipIntroductionAnimations(){
    //document.getElementById("characterElements").parentNode.removeChild(document.getElementById("characterElements"))
    slideOut();
    enterGameAnimation();
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
    charName = document.getElementById("characterName").value;
    if(charName == null || charName == "" || charName == "undefined"){
        //send error that they need to name their character
    }else if(charClass == null || charClass == "" || charClass == "undefined"){
        //send error that they need to pick a class
    }else{
        //enter the game
        enterGameAnimation();
        initializePlayer();
        document.getElementById("gameMainDiv").addEventListener("transitionend",playGame);

        document.getElementById("topClassButton").removeEventListener("click",classSelect);
        document.getElementById("middleClassButton").removeEventListener("click",classSelect);
        document.getElementById("bottomClassButton").removeEventListener("click",classSelect);
        document.getElementById("goButton").removeEventListener("click",enterGame);
        document.getElementById("characterName").removeEventListener("input",nameSet);
    }

}

function playGame(){
    //main game controller, send all game events here for processing

    console.log("playGame")
    switch (gameState){
        case "newGame":
            console.log("newGame")
            //play first event
            playEvent(new beginStoryEvent())
            break;
        case "worldMap":
            console.log("worldMap")
            showWorldMap()
            break;
        default:
            console.log("default")
            break;
    }

}

function showWorldMap(){
    // replace textArea with grid for world

    textArea.parentNode.removeChild(textArea)

    var topArea = document.getElementById("topArea")
    var worldArea = document.createElement("div")
    worldArea.id = "worldArea"
    topArea.appendChild(worldArea)
    document.getElementById("innerOptionsArea").innerHTML = ""
    //create a table with all world locations
    var table = document.createElement("table")
    worldArea.appendChild(table)
    for(var i = 0; i<worldMap.locations.length;i++){
        var row = document.createElement("tr")
        table.appendChild(row)
        //console.log(i)
        for(var j = 0; j<worldMap.locations[i].length;j++){
           // console.log(j)
            var column = document.createElement("td")
            row.appendChild(column)
            column.addEventListener("click",locationSelect)
            column.location = worldMap.locations[i][j]
            // picking a grid should show details about that area and change the options area to have options like "Explore"
        }
    }


}

function locationSelect(event){

    var selectedLocation = event.target.location
    var selectedDiv = event.target;

    //unselect the other divs


    var locationDivs = document.getElementsByTagName("td")
    //console.log(enemyDivs)

    for(var i =0;i<locationDivs.length;i++){
        locationDivs[i].style.backgroundColor = ""
    }

        //select the selected enemyDiv,
    selectedDiv.style.backgroundColor = "lime";

        //create the attack / ability buttons
    var optionsArea = document.getElementById("innerOptionsArea")
    optionsArea.innerHTML = "";

    var exploreButton = document.createElement("button")
    exploreButton.innerHTML="Explore"
    //exploreButton.addEventListener("click",combat);
    exploreButton.style.width = "100%"
    optionsArea.appendChild(exploreButton)




}

function playEvent(gameEvent){
            var eventType = gameEvent.eventType


            console.log(eventType)
            //var textArea = document.getElementById("textArea")
            //textArea.innerHTML = "";
            var text = document.createElement("p")
            textArea.appendChild(text)
            text.innerHTML = "";
            var parentDiv = cursor.parentNode
            if(parentDiv != null){
                parentDiv.removeChild(cursor)
            }

            doneTyping = false;
            slowTypeText(text,gameEvent.eventDescription,0,20,true)

            textArea.scrollTop = textArea.scrollHeight;
            var fontSize = "4vh"
            cursor.style.fontSize = fontSize;


              //display choices
            console.log(gameEvent.choices)
            var optionsArea = document.getElementById("innerOptionsArea")
            optionsArea.innerHTML = "";
            for(var i = 0;i<gameEvent.choices.length;i++){
                var button = document.createElement("button")
                button.innerHTML=gameEvent.choices[i]
                optionsArea.appendChild(button)

                currentEvent = gameEvent;
                saveGame()

                if(gameEvent.choices[i] == "Continue"){
                    button.addEventListener("click",continueOption)
                }else if(gameEvent.choices[i] == "Attack"){
                    button.addEventListener("click",attackOption)
                }else if(gameEvent.choices[i] == "Abilities"){
                    button.addEventListener("click",abilitiesOption)
                }else if(gameEvent.choices[i] == "Status"){
                    button.addEventListener("click",statusOption)
                }else if(gameEvent.choices[i] == "Run"){
                    button.addEventListener("click",runOption)
                }else if(gameEvent.choices[i] == "Other"){
                    button.addEventListener("click",otherOption)
                }

                if(gameEvent.choices.length == 1){
                    button.style.width = "100%"
                }else{
                    button.style.width = "50%"
                }
            }

}


function slowTypeText(textDiv,stringValue,currentIndex,speed,resetCursor){
    setTimeout(function(){
        console.log("slowTypeCalled")
        textDiv.innerHTML += stringValue[currentIndex];
        //var textArea = document.getElementById("textArea")
        textArea.scrollTop = textArea.scrollHeight;
        if(currentIndex < stringValue.length-1){
            slowTypeText(textDiv,stringValue,currentIndex+1,speed,resetCursor)
        }else{
            doneTyping = true;
            if(resetCursor == true){
                textDiv.appendChild(cursor)
            }
        }

    },speed)
}

function slowTypeArrayOfText(textDivArray,stringValueArray,currentStringIndex,speed,currentArrayIndex){
    setTimeout(function(){
        //console.log(stringValueArray[currentArrayIndex][currentStringIndex])
        textDivArray[currentArrayIndex].innerHTML += stringValueArray[currentArrayIndex][currentStringIndex];
        //var textArea = document.getElementById("textArea")
        textArea.scrollTop = textArea.scrollHeight;
        if(currentStringIndex < stringValueArray[currentArrayIndex].length-1){
            slowTypeArrayOfText(textDivArray,stringValueArray,currentStringIndex+1,speed,currentArrayIndex)
        }else if(currentArrayIndex < textDivArray.length-1){
            slowTypeArrayOfText(textDivArray,stringValueArray,0,speed,currentArrayIndex+1)
        }else{
            doneTyping = true;
            textDivArray[currentArrayIndex].appendChild(cursor)
        }
    },speed)
}

function continueOption(){
    if(doneTyping){
        console.log("continueOption")
        currentEvent.completed = true
        saveGame()
        console.log(currentEvent)
        if(currentEvent.nextEvent != false) {
            currentEvent = currentEvent.nextEvent
            console.log(currentEvent)
            playEvent(currentEvent)
        }else{
            gameState = "worldMap"
            playGame();
        }
    }
}

function saveGame(){
    localStorage.currentEvent = JSON.stringify(currentEvent);
    localStorage.player = JSON.stringify(player);
    localStorage.worldMap = JSON.stringify(worldMap);
    //localStorage.gameState = JSON.stringify(gameState)

    //console.log(localStorage.currentEvent)
    //console.log(localStorage.player)
    //console.log(localStorage.worldMap)

}

function attackOption(){
    console.log("attackOption")

    //var textArea = document.getElementById("textArea")
    textArea.parentNode.removeChild(textArea)
    //console.log(textArea.childNodes)

    var topArea = document.getElementById("topArea")
    var battleArea = document.createElement("div")
    battleArea.id = "battleArea"
    topArea.appendChild(battleArea)
    var p = document.createElement("p")
    p.innerHTML = "You see these enemies before you!";
    battleArea.appendChild(p)

    for(var i = 0;i<currentEvent.eventEnemies.length;i++){
        var enemyDiv = document.createElement("div")
        enemyDiv.innerHTML = currentEvent.eventEnemies[i].name + " #"+i+ " hp: " + currentEvent.eventEnemies[i].currentHealth + "/" + currentEvent.eventEnemies[i].maxHealth;
        battleArea.appendChild(enemyDiv)
        enemyDiv.dataset.index= i;
        enemyDiv.className = "enemyDiv";
        enemyDiv.addEventListener("click",enemySelect)
    }

    //display back button
    var optionsArea = document.getElementById("innerOptionsArea")
    optionsArea.innerHTML = "";
    var button = document.createElement("button")
    button.innerHTML="Back"
    optionsArea.appendChild(button)
    button.addEventListener("click",backOption);
    button.style.width = "100%"


}

function enemySelect(event){
    console.log(event.target.dataset.index)
    var selectedEnemy = currentEvent.eventEnemies[event.target.dataset.index];
    var selectedDiv = event.target;

    //unselect the other divs

    if(selectedEnemy.currentHealth > 0){
    var enemyDivs = document.getElementsByClassName("enemyDiv")
    console.log(enemyDivs)

    for(var i =0;i<enemyDivs.length;i++){
        enemyDivs[i].style.backgroundColor = ""
    }

    //select the selected enemyDiv,
    selectedDiv.style.backgroundColor = "lime";

    //create the attack / ability buttons
    var optionsArea = document.getElementById("innerOptionsArea")
    optionsArea.innerHTML = "";

    var attackButton = document.createElement("button")
    attackButton.innerHTML="Attack"
    attackButton.addEventListener("click",combat);
    attackButton.enemy = selectedEnemy;
    attackButton.index = event.target.dataset.index;
    attackButton.style.width = "100%"
    optionsArea.appendChild(attackButton)

    var abilityButton = document.createElement("button")
    abilityButton.innerHTML="Abilities"
    abilityButton.addEventListener("click",abilitiesOption);
    abilityButton.style.width = "100%"
    optionsArea.appendChild(abilityButton)

    var backButton = document.createElement("button")
    backButton.innerHTML="Back"
    backButton.addEventListener("click",backOption);
    backButton.style.width = "100%"
    optionsArea.appendChild(backButton)
    }

}

function combat(event){
    console.log("combat")
    targetedEnemyIndex = event.target.index
    targetedEnemy = event.target.enemy

    var pArray = []
    var textArray = []

    //attack enemies
    var attackText =  "You attack "+ targetedEnemy.name +" #"+targetedEnemyIndex+" with your "+player.weapon.name + " for " + (player.weapon.attackAmount+player.attackMod)+ " damage!"
    var attackTextP = document.createElement("p")
    textArray.push(attackText);
    pArray.push(attackTextP)

    //evaluate damage
    targetedEnemy.currentHealth -= (player.weapon.attackAmount+player.attackMod)
    console.log(targetedEnemy.currentHealth)

    if(targetedEnemy.currentHealth <= 0){
        targetedEnemy.currentHealth = 0;
        var deathText =  targetedEnemy.name +" #"+targetedEnemyIndex+" was killed!"
        var deathTextP = document.createElement("p")
        textArray.push(deathText);
        pArray.push(deathTextP)
    }

    //surviving enemies attack

    var allEnemiesDead = true;

    for(var i = 0;i<currentEvent.eventEnemies.length;i++){
        if(currentEvent.eventEnemies[i].currentHealth <= 0){
            console.log(currentEvent.eventEnemies[i]+" is dead")
        }else{
            player.currentHealth -= (currentEvent.eventEnemies[i].attackDamage - player.armor.armorAmount)
            var enemyAttackText =  currentEvent.eventEnemies[i].name+ " attacked you for " +(currentEvent.eventEnemies[i].attackDamage - player.armor.armorAmount) + " damage"
            var enemyAttackTextP = document.createElement("p")
            textArray.push(enemyAttackText);
            pArray.push(enemyAttackTextP)
            allEnemiesDead = false;
        }

    }

    if(player.currentHealth <= 0){
        player.currentHealth = 0;
        var playerDeathText =  "you have died..."
        var playerDeathTextP = document.createElement("p")
        textArray.push(playerDeathText);
        pArray.push(playerDeathTextP)
    }



    //do something else if player died

    //if all enemies are dead
    if(allEnemiesDead){
        //show a victory message
        var victoryText =  "All monsters have been defeated!"
        var victoryTextP = document.createElement("p")
        textArray.push(victoryText);
        pArray.push(victoryTextP)
        //show a continue button

        backOption()

        var optionsArea = document.getElementById("innerOptionsArea")
        optionsArea.innerHTML = "";

        var button = document.createElement("button")
        button.innerHTML = "Continue"
        button.addEventListener("click",continueOption)
        button.style.width = "100%"

        var topArea = document.getElementById("topArea")
        topArea.innerHTML = ""
        //console.log(textArea)
        topArea.appendChild(textArea)

        optionsArea.appendChild(button)

    }else{
        backOption()
    }


    //all messages get added to log
    var parentDiv = cursor.parentNode
    if(parentDiv != null){
        parentDiv.removeChild(cursor)
    }

    var fontSize = "2.5vh"
    for(var i = 0;i<pArray.length;i++){
        pArray[i].style.fontSize = fontSize
        textArea.appendChild(pArray[i])
    }
    cursor.style.fontSize = fontSize;
    slowTypeArrayOfText(pArray,textArray,0,20,0)

}

function backOption(){
    console.log("backOption")
    //console.log(eventType)

    var topArea = document.getElementById("topArea")
    topArea.innerHTML = ""
    //console.log(textArea)
    topArea.appendChild(textArea)


    textArea.scrollTop = textArea.scrollHeight;


    //display choices
    //console.log(gameEvent.choices)

    gameEvent = currentEvent;
    var optionsArea = document.getElementById("innerOptionsArea")
    optionsArea.innerHTML = "";
    for(var i = 0;i<gameEvent.choices.length;i++){
        var button = document.createElement("button")
        button.innerHTML=gameEvent.choices[i]
        optionsArea.appendChild(button)

        currentEvent = gameEvent;

        if(gameEvent.choices[i] == "Continue"){
            button.addEventListener("click",continueOption)
        }else if(gameEvent.choices[i] == "Attack"){
            button.addEventListener("click",attackOption)
        }else if(gameEvent.choices[i] == "Abilities"){
            button.addEventListener("click",abilitiesOption)
        }else if(gameEvent.choices[i] == "Status"){
            button.addEventListener("click",statusOption)
        }else if(gameEvent.choices[i] == "Run"){
            button.addEventListener("click",runOption)
        }else if(gameEvent.choices[i] == "Other"){
            button.addEventListener("click",otherOption)
        }

        if(gameEvent.choices.length == 1){
            button.style.width = "100%"
        }else{
            button.style.width = "50%"
        }
    }
}

function abilitiesOption(){
    console.log("abilitiesOption")
}

function statusOption(){
    console.log("statusOption")

    var line0 = player.name + " " + player.jobClass
    var line1 = "hp: "+player.currentHealth +" / "+ player.maxHealth;
    var line2 = "Level " + player.level + " Experience: "+ player.experience +" / " + (player.level * 1000);
    var line3 = "Weapon: "+ player.weapon.name +" Damage: "+ player.weapon.attackAmount + " Type: " +player.weapon.weaponType;
    var line4 = "Armor: " + player.armor.name + " Defense: "+ player.armor.armorAmount;

    console.log(line1)
    console.log(line2)
    console.log(line3)
    console.log(line4)

    var fontSize = "2.5vh"


    var line0p = document.createElement("p")
    line0p.style.fontSize = fontSize
    var line1p = document.createElement("p")
    line1p.style.fontSize = fontSize
    var line2p = document.createElement("p")
    line2p.style.fontSize = fontSize
    var line3p = document.createElement("p")
    line3p.style.fontSize = fontSize
    var line4p = document.createElement("p")
    line4p.style.fontSize = fontSize

    //var textArea = document.getElementById("textArea")
    textArea.appendChild(line0p)
    textArea.appendChild(line1p)
    textArea.appendChild(line2p)
    textArea.appendChild(line3p)
    textArea.appendChild(line4p)

    slowTypeText(line0p,line0,0,40,false)
    slowTypeText(line1p,line1,0,40,false)
    slowTypeText(line2p,line2,0,40,false)
    slowTypeText(line3p,line3,0,40,false)
    slowTypeText(line4p,line4,0,40,true)
    cursor.style.fontSize = fontSize;

    textArea.scrollTop = textArea.scrollHeight;


}

function runOption(){
    console.log("runOption")
}

function otherOption(){
    console.log("otherOption")
}