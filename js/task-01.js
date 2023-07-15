const listEl = document.querySelectorAll('.item');

console.log(`Number of categories: ${listEl.length}`)



// const title = document.querySelector('h2').textContent
// console.log(`Category: ${title}`)

const categoryList = document.querySelector('.item ')
console.log(categoryList)


const categoryListArray = []

categoryList.forEach(element => {
    categoryListArray.push(
        `Category: ${title} Elements: ${element.children.length}`
        )
})
console.log(categoryListArray)



