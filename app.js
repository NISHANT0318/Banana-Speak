var btnTranslate = document.querySelector("#btn-Translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");



function clickEventHandler(){
    
    outputDiv.innerText= "axcjvyhgcajubjy" + txtInput.value;
};


btnTranslate.addEventListener("click",clickEventHandler) 