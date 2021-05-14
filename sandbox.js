// const ul = document.querySelector('ul')
// ul.remove()
const items= document.querySelectorAll('li')

items.forEach(item =>{
    item.addEventListener('click', e=>{
        console.log(`${item.innerText} done`)
        //e.target.style.textDecoration = 'line-through'
        e.target.remove()
    })
})