window.mobileObj = function MobileClass(){};

var textContainer = document.createElement("p");
var nativeText = document.createTextNode("Mobile Text");
textContainer.appendChild(nativeText);

var inputContainer = document.createElement("p");
var input = document.createElement("INPUT");
input.setAttribute("type", "text");
inputContainer.appendChild(input);

var buttonContainer = document.createElement("p");
var button = document.createElement("button");
button.innerHTML = "Send to Mobile";
button.style.width = "150px";
button.style.height = "30px";
button.addEventListener ("click", function() {
  window.mobileObj.textToMobile(input.value);
});
buttonContainer.appendChild(button);

document.body.appendChild(textContainer);
document.body.appendChild(inputContainer);
document.body.appendChild(buttonContainer);

function updateFromMobile(message){
    nativeText.nodeValue = message;
}
