console.log("hello, script is here!")

// alert and prompt


// var userName = prompt("whatr is your name?")
// alert("welcome " + userName)
// console.log(userName + " is here!")


// var buttontranslate = document.querySelector("#btntranslate");

// buttontranslate.addEventListener("click", function clickEvent(){
//     console.log("clicked")
// })


var buttontranslate = document.querySelector("#btntranslate");
console.log(buttontranslate)
function clickEventHandler(){
    console.log("clicked")
    console.log("input", inputt.value)
  
}


buttontranslate.addEventListener("click", clickEventHandler)


// input

var inputt = document.querySelector("#text-area-class");
console.log(inputt)