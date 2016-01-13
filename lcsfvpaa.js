function loop() {
    var text = "";
    for(var i = 1; i <= 10; i++ ){
        text += i + "<br>";   
    }
    display(text);
}

function wLoop(){
    var num = 1;
    var i = 0;
    while(i < 1000000){
        document.getElementById("wLoopView").innerHTML = num.toString();
        num++
        i++;
    }
}

function display(text){
    document.getElementById("loopView").innerHTML = text;
}

function condition(){
    var cond = document.getElementById("ifCon").value;
    if(cond == "true"){
        document.getElementById("showCondition").innerHTML = "True";
    }
    else if(cond == "false"){
        document.getElementById("showCondition").innerHTML = "False";
    }
    else{
        document.getElementById("showCondition").innerHTML = "No Bool";
    }
}

function switchCon(){
    var cond = document.getElementById("ifCon").value;
    switch(cond){
        case "true":
            document.getElementById("showCondition").innerHTML = "True";
            break;
        case "false":
            document.getElementById("showCondition").innerHTML = "False";
            break;
        default:
            document.getElementById("showCondition").innerHTML = "No Bool";
            break;
    }
}

var words = [];
function add(){
    words.push(document.getElementById("wordField").value);
}

function clearArray(){
    words = [];
    var value = document.getElementById("arrayDisplay").value;
    console.log(value);
    document.getElementById("arrayDisplay").innerHTML = '';
    document.getElementById("arrayDisplayToString").innerHTML = '';
}

function showArray(){
    if(words.length == 0){
        document.getElementById("arrayDisplay").innerHTML = "Array is empty";
        document.getElementById("arrayDisplayToString").innerHTML = '';
    }
    else{
        var text = "";
        //Bad path
        // for(i = 0; i <= words.length; i++)
        for(var i = 0; i < words.length; i++ ){
            text += words[i] + "<br>";   
        }
        document.getElementById("arrayDisplay").innerHTML = text;
        document.getElementById("arrayDisplayToString").innerHTML = words.toString();
    }
}

function popout(){
    words.pop();   
}

function associative(){
    var array=[
        {key: 'cardK', val: '13'},
        {key: 'cardQ', val: '12'},
        {key: 'cardAJ', val: '11'}
    ];   
}

