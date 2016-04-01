function Player(name,maxHealth) {
    this.name = name;
    this.maxHealth = maxHealth;
    this.currentHealth = this.maxHealth;
    this.experience = 0;
    this.level = 1;
    this.armor = new BasicClothes();
    this.weapon = new Fist();
    this.attackMod = 0;
}

function Soldier(name){
    Player.call(this,name,12);
    this.jobClass = "Soldier";
    this.possibleAbilities = ["Shoot","Stimpack","Rifle Smack","Punch"];
    this.learnedAbilities = ["Punch"];
}

function Energist(name){
    Player.call(this,name,11);
    this.jobClass = "Energist";
    this.possibleAbilities = ["Saber Slash","Telekinetic Push","Force Smash","Punch"];
    this.learnedAbilities = ["Punch"];
}

function Dragoon(name){
    Player.call(this,name,10);
    this.jobClass = "Dragoon";
    this.possibleAbilities = ["Lance Throw","Lance Stab","Pet Attack","Punch"];
    this.learnedAbilities = ["Punch"];
}

function WorldMap(x,y,locations){
    this.width = x;
    this.height = y;
    this.locations = locations;
    this.playerLocationX = 0;
    this.playerLocationY = 0;
}

function Location(locationEvents,name){
    this.events = locationEvents;
    this.name = name;
    this.discovered = false;
}

function Event(eventType,enemies,experience,difficulty,description,eventName,choices){
    this.eventType = eventType;
    this.eventEnemies = enemies;
    this.experienceReward = experience;
    this.difficulty = difficulty;
    this.eventDescription = description;
    this.eventName = eventName;
    this.completed = false;
    this.choices = choices;
    this.nextEvent = false
}

function beginStoryEvent(){
    Event.call(this,"Story",null,100,0,"You find yourself in an abandoned laboratory, no sign of life anywhere, looking around you find the only way to go is down the hall","The Beginning",["Continue"])
    this.nextEvent = new firstCombatEvent();
}

function firstCombatEvent(){
    Event.call(this,"Combat",[new FaceHugger1(),new FaceHugger1()],0,1,"You see 2 small crab like creatures lurking in the hallway. As you approach they attack!","Fight 1",["Attack","Other","Status","Run"])
    this.nextEvent = new afterFirstCombatEvent();
}

function afterFirstCombatEvent(){
    Event.call(this,"Story",null,100,0,"The face huggers lie dead on the ground. You continue down the hallway and find what appears the be an armory. You find a weapon and some basic armor. The only way to go is another hallway with a door leading outside at the end of it.","The Armory",["Continue"])
}

function emptyBuildingEvent(){
    Event.call(this,"Story",null,100,0,"You enter the abandoned building, you find a new weapon!","Abandoned Building",["Continue"])
}

function level1CombatOption1(){
    Event.call(this,"Combat",[new FaceHugger1(),new FaceHugger1()],0,1,"You see 2 small Face Huggers. They attack!","Group of level 1 Face Huggers",["Attack","Other","Status","Run"])
}

function level1CombatOption2(){
    Event.call(this,"Combat",[new FaceHugger1(),new FaceHugger1(),new FaceHugger1()],0,1,"You see 3 small Face Huggers. They attack!","Big Group of level 1 Face Huggers",["Attack","Other","Status","Run"])
}

function level2CombatOption1(){
    Event.call(this,"Combat",[new FaceHugger1(),new FaceHugger1(),new SpaceZombie1()],0,2,"You see 2 small Face Huggers and a Space Zombie. They attack!","Level 2 Fight 1",["Attack","Other","Status","Run"])
}

function level2CombatOption2(){
    Event.call(this,"Combat",[new FaceHugger1(),new FaceHugger2(),new SpaceZombie1()],0,2,"You see a small Face Hugger, a Large Face Hugger and a Space Zombie. They attack!","Level 2 Fight 2",["Attack","Other","Status","Run"])
}

function Enemy(name,maxHealth,level,experience,gold,text,attackDamage){
    this.name = name;
    this.maxHealth = maxHealth;
    this.currentHealth = maxHealth;
    this.level = level;
    this.experienceReward = experience;
    this.goldReward = gold;
    this.attackText = text;
    this.attackDamage = attackDamage;
}

function FaceHugger1(){
    Enemy.call(this,"Face Hugger 1",5,1,100,10,"Face Hugger 1 Lunged Towards Your Face!",2)
}

function FaceHugger2(){
    Enemy.call(this,"Face Hugger 2",10,2,200,20,"Face Hugger 2 Lunged Towards Your Face!",3)
}

function SpaceZombie1(){
    Enemy.call(this,"Space Zombie 1",15,2,300,30,"Space Zombie 1 Tries To Eat You!",3)
}

function SpaceZombie2(){
    Enemy.call(this,"Space Zombie 2",20,3,400,40,"Space Zombie 2 Tries To Eat You!",4)
}

function SpaceAbomination1(){
    Enemy.call(this,"Space Abomination 1",15,3,500,50,"Space Abomination 1 Tries To Eat You!",5)
}

function Armor(name,armorAmount){
    this.name = name;
    this.armorAmount = armorAmount;
}

function BasicClothes(){
    Armor.call(this,"Basic Clothes",1);
}

function PaddedClothArmor(){
    Armor.call(this,"Padded Cloth Armor",2);
}

function LeatherArmor(){
    Armor.call(this,"Leather Armor",3);
}

function MetalArmor(){
    Armor.call(this,"Metal Armor",4);
}

function SyntheticArmor(){
    Armor.call(this,"Synthetic Armor",5);
}

function Weapon(name,weaponAttack,weaponType){
    this.name = name;
    this.attackAmount = weaponAttack;
    this.weaponType = weaponType;
}

function Fist(){
    Weapon.call(this,"Fist",2,"Unarmed");
}

function MetalSword(){
    Weapon.call(this,"Energy Saber",6,"Saber");
}

function EnergySaber(){
    Weapon.call(this,"Energy Saber",10,"Saber");
}

function MetalSpear(){
    Weapon.call(this,"Energy Saber",6,"Lance");
}

function MechanicLance(){
    Weapon.call(this,"Energy Saber",10,"Lance");
}

function HandGun(){
    Weapon.call(this,"Energy Saber",6,"Gun");
}

function PlasmaRifle(){
    Weapon.call(this,"Energy Saber",10,"Gun");
}


