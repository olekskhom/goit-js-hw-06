const bodyEl = document.querySelector('body')
const spanEl = document.querySelector('span')

function eventFunction() {
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  spanEl.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

bodyEl.addEventListener('click', eventFunction)


