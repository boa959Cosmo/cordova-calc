function writeInput(char) {
    let inputField = document.getElementById('inputField');
    let inputFieldPosition = inputField.addEventListener('touchend', e => {
        console.log(e.target.selectionStart);
        return e.target.selectionStart
    })
    let x = inputField.target.selectionStart
    console.log(x);
    inputField.value = inputField.value + char;
}
