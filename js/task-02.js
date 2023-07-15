const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients')
console.log(ulEl)


const elementOfIngredients = ingredients.map(el => {
  const liEl = document.createElement(`li`);
  liEl.textContent = el;
  liEl.classList.add('item')
  console.log(liEl)
  ulEl.append(liEl)
})




