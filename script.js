let input = document.getElementById('input');
let baseDropDown = document.getElementById('base');
let btnConverter = document.getElementById('btnConvert');
let convertedValue = document.getElementById('convertedValue');


btnConverter.addEventListener('click', () => {
    let num = +input.value;
    let dropDownValue = +baseDropDown.value;

    if(isNaN(num)) {
        convertedValue.textContent = 'Please enter a valid number';
        convertedValue.style.color = 'red';
        convertedValue.style.fontWeight= 'bold';

    } else {
        convertedValue.textContent = num.toString(dropDownValue).toUpperCase();
        convertedValue.style.color = 'green';
        convertedValue.style.fontWeight = 'bold';
    }




})