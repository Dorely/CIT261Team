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

}

function Location(locationEvents,terrain){
    this.events = locationEvents;
    this.terrainType = terrain;
    this.discovered = false;
}

function Event(eventType,enemies,experience,difficulty,description,eventName){
    this.eventType = eventType;
    this.eventEnemies = enemies;
    this.experienceReward = experience;
    this.difficulty = difficulty;
    this.eventDescription = description;
    this.eventName = eventName;
    this.completed = false;
}

function Enemy(name,maxHealth,level,experience,gold,text,attackDamage){
    this.name = name;
    this.maxHealth = maxHealth;
    this.currentHealth = maxHealth;
    this.level = level;
    this.experienceReward = experience;
    this.goldReward = gold;
    this.attackText = text;
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
    this.armorAmount = weaponAttack;
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


