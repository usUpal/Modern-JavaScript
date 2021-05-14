//get element by id
const title = document.getElementById('title')
console.log(title);

// get element by class
const errors = document.getElementsByClassName('error')
console.log(errors);
for(let i = 0; i< errors.length; i++){
    console.log(errors[i]);
}

// get element by TAG

const paras = document.getElementsByTagName('p')
console.log(paras);
for(let i = 0; i< paras.length; i++){
    console.log(paras[i]);
}