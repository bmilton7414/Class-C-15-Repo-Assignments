//declare a var for my name 
let myName = "Arab";


//find the element with id nameDisplay
let displayelemnet = document.getElementById("nameDisplay");

//change the content of the element to the value of myname
displayelemnet.innerHTML = myName;


/*displayelemnet.style.color = "green";
displayelemnet.style.textshadow = "2px 2px 5px red";
displayelemnet.style.transition = "all 0.5s";

setTimeout(() => {
    displayelemnet.style.color = "red";
    displayelemnet.style.textshadow = "2px 2px 5px green";
}