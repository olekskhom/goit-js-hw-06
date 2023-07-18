const listEl = document.querySelectorAll('.item');


const numberOfCategories = listEl.length;
console.log(`Number of categories: ${numberOfCategories}`);


listEl.forEach((category) => {
  
  const title = category.firstElementChild.textContent;
     
  const numberOfElements = category.lastElementChild.children.length;
  
  console.log(`Category: ${title}
    Elements: ${numberOfElements}`);
});

