var inputTxt=document.querySelector("#input");
var outputTxt=document.querySelector("#output");
var button=document.querySelector("#translate");

var serverURL="https://api.funtranslations.com/translate/groot.json";

//generating URLs
function getURL(text){
    return serverURL + "?" +"text="+ text;
}

function eventHandler(){
    //taking user input
    var input=inputTxt.value;
    //processing from server
    fetch(getURL(input))
    .then(response => response.json())
    .then(json=> {
        var transText=json.contents.translated;
        //output
        outputTxt.innerText= transText;
    })

}

button.addEventListener("click", eventHandler);