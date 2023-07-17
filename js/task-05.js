const textInput = document.querySelector('#name-input')
const textOutput = document.querySelector('#name-output')
let anonymus = "Anonymous"

textInput.addEventListener("input", onInput)

function onInput(event) {
    textOutput.textContent = event.target.value || anonymus
}