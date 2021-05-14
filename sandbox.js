const article = document.querySelector('article').children;
for(let i =0; i<article.length;i++){
    console.log(article[i])
}
for(let i =0; i<article.length;i++){
    article[i].classList.add('article-element')
}
//finding the parent of a child
const title = document.querySelector('h2')
console.log(title.parentElement.parentElement.parentElement)
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);