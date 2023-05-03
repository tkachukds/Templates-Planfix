

function loadID(id){
    var bod = document.getElementById(id).innerHTML;
    alert(""+bod);
}

function loadCLASS(classes){
    var bod = document.getElementsByClassName(classes).innerHTML;
    alert(""+bod);
}

function loadSELECTOR(s){
    var bod = document.querySelector(s).innerHTML;
    alert(""+bod);
}


function writeinID(ID, txt){
    document.getElementById(ID).innerHTML=txt;
}

function writeInCLASS(classes, txt){
    // alert(txt+' '+classes)
   // document.getElementsByClassName(classes).innerHTML=txt;
 document.getElementsByClassName(classes).textContent=txt;
}


function writeInSELECTOR(selector, txt){
    // alert(txt+' '+classes)
    document.querySelector(selector).textContent=txt;
}
function viewURL(){
    var url = document.location.search;
    alert(url)
}