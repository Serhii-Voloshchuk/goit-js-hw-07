const inputLogin = document.querySelector('input#name-input'); // исправленно обращение к input


const trimmedValues = () => {
    const inputValueTrimmed = inputLogin.value.trim();
    const outputLogin = document.querySelector('span#name-output');
    outputLogin.textContent = inputValueTrimmed || 'Anonymous'; // перенастроена логика

   
}
inputLogin.addEventListener('input', trimmedValues);


