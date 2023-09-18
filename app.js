var btnTranslate = document.querySelector("#btn-Translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input) {
    return `${serverURL}?text=${input}`;

}

function errorHandler(error){
    console.error("Error occurred:", error);

    alert("something wrong with the server! try again after sometime")
}



function clickEventHandler(){
    
   // outputDiv.innerText= "axcjvyhgcajubjy" + txtInput.value;
   var inputText = txtInput.value; // taking input

   //calling server processing
   fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; //output
        })
        .catch(errorHandler)
};


btnTranslate.addEventListener("click",clickEventHandler) ;