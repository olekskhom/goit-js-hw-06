const listEl = document.querySelectorAll('.item');


const numberOfCategories = listEl.length;
console.log(`Number of categories: ${numberOfCategories}`);


listEl.forEach((category) => {
  const title = category.querySelector('h2').textContent;
    const numberOfElements = category.querySelectorAll('li').length;
    
  console.log(`Category: ${title}
    Elements: ${numberOfElements}`);
});

