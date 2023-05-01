

function loadID(id){
    var bod = document.getElementById(id).innerHTML;
    alert(""+bod);
}

function loadCLASS(classes){
    var bod = document.getElementsByClassName(classes).innerHTML;
    alert(""+bod);
}


function writeinID(ID, txt){
    document.getElementById(ID).innerHTML=txt;
}

function writeInCLASS(classes, txt){
    document.getElementsByClassName(classes).innerHTML=txt;
}