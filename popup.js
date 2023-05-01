// подключаем  скрипты для ДОМ откытой страницы
chrome.tabs.executeScript(null, {file: 'fromDom.js'});

 //вызываем функцию из fromDom.js для изменения элемента  ДОМе открытой страницы
 function FunctiononDOM(txt){
     //вызываем функцию из fromDom.js для изменения элемента  ДОМе открытой страницы
     chrome.tabs.executeScript(null,  {code:txt});
 }
/////////////////////////////////////////////////////
let textplan;

function selectedText() {	
	chrome.tabs.executeScript( null, {"code": "window.getSelection().toString();"}, 
     function(selection) {
          let selectedText = selection;
          textplan = selection;
		document.getElementById("output").innerHTML = ''+selectedText;
		});
}

document.addEventListener('DOMContentLoaded',  selectedText());

 
/////////////////////////////////////////////////////

snow.addEventListener("click", async () => {
     // FunctiononDOM("loadID('txtstandart');");
     // FunctiononDOM("loadCLASS('action-description-content-wrapper');");
     // FunctiononDOM("writeInCLASS('actions-quick-add-block-text', 'hellooo')");
FunctiononDOM("writeinID('txtstandart', '"+textplan+"');");
});

