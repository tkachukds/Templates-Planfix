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

inID.addEventListener("click", async () => {
     // FunctiononDOM("loadID('txtstandart');");
     // FunctiononDOM("loadCLASS('action-description-content-wrapper');");
     // FunctiononDOM("writeInCLASS('actions-quick-add-block-text', 'hellooo')");
let textIN = 'любой текст шаблона';
let idd = 'txtstandart'
FunctiononDOM("writeinID('"+idd+"', '"+textIN+"');");
});

inClass.addEventListener("click", async () => {
     // FunctiononDOM("loadID('txtstandart');");
     // FunctiononDOM("loadCLASS('action-description-content-wrapper');");
     // FunctiononDOM("writeInCLASS('actions-quick-add-block-text', 'hellooo')");
let textIN = 'любой текст шаблона';
let clas = 'cke_editable cke_editable_themed cke_contents_ltr';
FunctiononDOM("writeInCLASS('"+clas+"', '"+textIN+"');");
});

inSelector.addEventListener("click", async () => {
let textIN = 'любой текст шаблона';
let select = 'body';
FunctiononDOM("writeInSELECTOR('"+select+"', '"+textIN+"');");
});
loadSelector.addEventListener("click", async () => {
     let select = '#GreenText > div > div.title-and-active-users > div > div.b-task-title-wrapper';
     FunctiononDOM("loadSELECTOR('"+select+"');");
     });
////////////////////

loadNameTask.addEventListener("click", async () => {
     let select = '#GreenText > div > div.title-and-active-users > div > div.b-task-title-wrapper';
     FunctiononDOM("loadSELECTOR('"+select+"');");
     });

function viewURL(){
     FunctiononDOM("viewURL();");
}

loadURL.addEventListener("click", async () => {
     viewURL();
});