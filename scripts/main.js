var outputNumber = 0;
var cacheArray = [];
var cacheOutput = 0;
var addBool = false;
var substractBool = false;
var multiplyBool = false;
var divideBool = false;
var opCache = 0;
var slider = document.getElementById("slider");
var stylesString = "";

slider.oninput = function() {
    stylesString = "styles" + this.value;
    setTheme(stylesString);
}

function setTheme(theme) {
    var themes = ["styles1", "styles2", "styles3"];
    for (var i=0; i < themes.length; i++) {
      var styleSheet = document.getElementById(themes[i]);

      if (themes[i] == theme) {
        styleSheet.removeAttribute("disabled");
      } else {
        styleSheet.setAttribute("disabled", "disabled");
      }      
    }
      
}

function enterNumber(digit) {
    // numberCache += digit;
    // outputNumber = parseInt(numberCache);
    // .push and .join 

    cacheArray.push(digit);
    cacheOutput = cacheArray.join("");
    outputNumber = parseFloat(cacheOutput);
    document.getElementById("output-screen").innerHTML = outputNumber;
}

function enterPoint() {
    cacheArray.push(".");
    cacheOutput = cacheArray.join("");
    outputNumber = parseFloat(cacheOutput);
    document.getElementById("output-screen").innerHTML = outputNumber;

}

function deleteDigit() {
     //.pop
    cacheArray.pop();
    if(cacheArray.length != 0) {
        cacheOutput = cacheArray.join("");
        outputNumber = parseFloat(cacheOutput);
    } 
    else {
        outputNumber = 0;
    }
    
    document.getElementById("output-screen").innerHTML = outputNumber;
}

function add() {
    if(addBool){
        outputNumber += opCache;
        document.getElementById("output-screen").innerHTML = outputNumber;
   
        opCache = outputNumber;
        cacheArray = [];
    } else {
        result();
        addBool = true;
        document.getElementById("output-screen").innerHTML = outputNumber;
        opCache = outputNumber;
        cacheArray = [];
    }
}

function substract() {

    if(substractBool){
        outputNumber = opCache - outputNumber;
        document.getElementById("output-screen").innerHTML = outputNumber;
   
        opCache = outputNumber;
        cacheArray = [];
    } else {
        result();
        substractBool = true;
        document.getElementById("output-screen").innerHTML = outputNumber;
        opCache = outputNumber;
        cacheArray = [];
    }
}

function multiply() {
    if(multiplyBool){
        outputNumber *= opCache;
        document.getElementById("output-screen").innerHTML = outputNumber;
    
        opCache = outputNumber;
        cacheArray = [];
    } else {
        result();
        multiplyBool = true;
        document.getElementById("output-screen").innerHTML = outputNumber;
        opCache = outputNumber;
        cacheArray = [];
    }
}

function divide() {
    if(divideBool){
        outputNumber = opCache / outputNumber;
        document.getElementById("output-screen").innerHTML = outputNumber;

        opCache = outputNumber;
        cacheArray = [];
    } else {
        result();
        divideBool = true;
        document.getElementById("output-screen").innerHTML = outputNumber;
        opCache = outputNumber;
        cacheArray = [];
    }
}

function result() {
    if(addBool){
        add();
        addBool = false
    }
    if(substractBool){
        substract();
        substractBool = false;
    }
    if(multiplyBool){
        multiply();
        multiplyBool = false;
    }
    if(divideBool){
        divide();
        divideBool = false;
    }
}

function reset() {
    cacheArray = [];
    opCache = 0;
    outputNumber = 0;
    document.getElementById("output-screen").innerHTML = outputNumber;
}

