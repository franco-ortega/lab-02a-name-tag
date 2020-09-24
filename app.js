const myInput = document.getElementById("my-new-name")

const myName = document.getElementById('my-name')

const myButton = document.getElementById('my-button')

myButton.addEventListener('click', () => {
    const value = myInput.value;

    myName.textContent = value;

    myInput.value = '';

})

const myNameTag = document.getElementById('nametag')

const myPinkButton = document.getElementById('my-pink-button')

myPinkButton.addEventListener('click', () => {
    myNameTag.style.backgroundColor = 'pink';
})

const myLightGreenButton = document.getElementById('my-lightgreen-button')

myLightGreenButton.addEventListener('click', () => {
    myNameTag.style.backgroundColor = 'lightgreen';
})

const myLightBlueButton = document.getElementById('my-lightblue-button')

myLightBlueButton.addEventListener('click', () => {
    myNameTag.style.backgroundColor = 'lightblue';
})
