// const para0 = document.querySelector('.hello')
// const para1 = document.querySelector('.lorem')
// const para2 = document.querySelector('.error')
// const para3 = document.querySelector('div.error')
// console.log(para0)
// console.log(para1)
// console.log(para2)     
// console.log(para3)     
const paras = document.querySelectorAll('p')
const errors = document.querySelectorAll('.error')
paras.forEach((para) => {
    console.log(para);
})
errors.forEach((error) =>{
    console.log(error);
})