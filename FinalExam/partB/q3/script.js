const ul = document.querySelector('ul')

function display(){
    const li = document.createElement('li')
    ul.appendChild(li)
    li.innerHTML = '&#128540;'
}

display()
display()
display()