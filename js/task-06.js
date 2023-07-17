const checkInput = document.querySelector("#validation-input")

checkInput.addEventListener("blur", onBlurBorder)

function onBlurBorder(event) {
    const inputDataLength = Number(checkInput.dataset.length);
    console.log(inputDataLength)

    const inputValueLength = Number(checkInput.value.trim().length);
    console.log(inputValueLength)

    if (inputValueLength === inputDataLength) {
checkInput.classList.add('valid')
checkInput.classList.remove('invalid')
       
    } else {
checkInput.classList.remove('valid')
checkInput.classList.add('invalid')
      
    }
}
