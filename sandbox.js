document.querySelector('.name').innerText = 'Steve Jobs'
document.querySelector('.details').innerText = 'sjldfgb sdjhfkjhasdgf kjasdhfgjklhs askdjghfklja sd'


const paras = document.querySelectorAll('.error')
paras.forEach(element => {
    element.innerText += ' **remove err pls'
})

const content = document.querySelector('.content')
  
content.innerHTML = '<p><b>this is content</b></p>'
const people = ['upal', 'elon', 'steve']
people.forEach(element => {
    content.innerHTML += `<p>${element}</p>`
})