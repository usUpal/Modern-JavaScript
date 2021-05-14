const link = document.querySelector('a')
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.facebook.com')
link.innerText = 'facebook'

const err = document.querySelector('p')
console.log(err.getAttribute('class'))
err.setAttribute('class', 'class1')