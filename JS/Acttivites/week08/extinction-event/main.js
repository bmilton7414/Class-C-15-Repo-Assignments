const strikeThrough = document.querySelectorAll('ol li')
const eraseList = document.querySelectorAll('ul li')
const dinos = document.querySelectorAll('img')

for(let listItem of strikeThrough){
    listItem.addEventListener('click', function (){
        listItem.style.textDecoration = 'line-through'
    })
}

for(let listItem of eraseList){
    listItem.addEventListener('click', function(){
        listItem.style.opacity = 0
    })
}

for(let listItem of dinos){
    listItem.addEventListener('click', function(){
        listItem.style.width = "0px"
    })
}

document.getElementById('destroy-all').addEventListener('click', function (){
    strikeThrough.forEach(listItem => listItem.style.textDecoration = 'line-through')
    eraseList.forEach(listItem => listItem.style.opacity = 0)
    dinos.forEach(listItem => listItem.style.width = '0px')
})
