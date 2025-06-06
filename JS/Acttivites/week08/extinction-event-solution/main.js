let strikeThroughList = document.querySelectorAll('ol li');
let eraseList = document.querySelectorAll('ul li');
let dinos = document.querySelectorAll('img');

for(let element of strikeThroughList){
    element.addEventListener('click', function(){
        element.style.textDecoration = 'line-through'
    })
}

for(let element of eraseList){
    element.addEventListener('click', function(){
        element.style.opacity = 0
    })
}

for(let element of dinos){
    element.addEventListener('click', function(){
        element.style.width = '0px'
    })
}

document.querySelector('#destroy-all').addEventListener('click', function(){
    strikeThroughList.forEach(element => element.style.textDecoration = 'line-through')
    eraseList.forEach(element => element.style.opacity = 0)
    dinos.forEach(element => element.style.width = '0')
})