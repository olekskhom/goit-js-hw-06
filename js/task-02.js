const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients')

const elementOfIngredients = ingredients.map(el => {
  const liEl = document.createElement(`li`);
  
  liEl.textContent = el;
  liEl.classList.add('item')
 
  return liEl;
})

ulEl.append(...elementOfIngredients);



  
