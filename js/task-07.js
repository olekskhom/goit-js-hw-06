
const fontSizeControl = document.getElementById('font-size-control');
const spanEl = document.getElementById('text')

fontSizeControl.addEventListener('input', eventFunction)

function eventFunction() {
    const fontSizeEl = fontSizeControl.value;
    spanEl.style.fontSize = fontSizeEl + 'px'
}







