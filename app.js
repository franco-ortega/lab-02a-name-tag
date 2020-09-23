const myInput = document.getElementById("my-new-name")
myInput.value

const myName = document.getElementById('my-name')
myName.textContent

const myButton = document.getElementById('my-button')

myButton.addEventListener('click', () => {
    const value = myInput.value;

    myName.textContent = value;

    myInput.value = '';

})