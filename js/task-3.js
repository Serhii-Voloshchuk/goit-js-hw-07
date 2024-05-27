const inputLogin = document.querySelector('span#name-input');


const trimmedValues = (event) => {
    const inputValueTrimmed = inputLogin.value.trim();
    const outputLogin = document.querySelector('span#name-output');
    outputLogin.textContent = inputValueTrimmed;

    if (!inputValueTrimmed) {
        outputLogin.textContent = 'Anonymous';
    }
}
inputLogin.addEventListener('input', trimmedValues);


