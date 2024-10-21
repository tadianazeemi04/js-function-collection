// For Leap Year

function leapYear() {

    let Useryear = parseInt(document.getElementById('year').value);
    let yearResult = document.getElementById('result');
    let wrongresult = document.getElementById('Wrongresult');

    yearResult.innerHTML = "";
    wrongresult.innerHTML = "";

    if (Useryear % 4 === 0 && Useryear % 100 !== 0) {
        yearResult.innerHTML = "The provided year is a Leap Year.";
        yearResult.style.display = "block"
    }
    else if (Useryear % 4 !== 0 || Useryear % 100 == 0) {
        wrongresult.innerHTML = "The provided year is Not a Leap Year. Try Another...!";
        wrongresult.style.display = "block"
    }
    return 0;
}

// For Multiple of 7 & 14

function multiple() {

    let num = parseInt(document.getElementById('multiple').value);
    let result = document.getElementById('m-result');

    result.innerHTML = "";
    result.style.color = ""

    if (num % 7 === 0 && num % 14 === 0) {
        result.innerHTML = "The provided Number is multiple of 7 and 14.";
        result.style.display = "block";
    }
    else if (num % 7 === 0 && num % 14 !== 0) {
        result.innerHTML = "The provided Number is multiple of 7 only.";
        result.style.display = "block";
        result.style.color = "blue";
    }
    else if (num % 7 !== 0 && num % 14 !== 0) {
        result.innerHTML = "The provided Number is Not multiple of  7 or 14.";
        result.style.display = "block";
        result.style.color = "red";
    }
}

// For Angle Types

function angleType() {

    let degrees = parseInt(document.getElementById('angle').value);
    let result = document.getElementById('a-result');

    result.innerHTML = "";

    if (degrees === 0) {
        result.innerHTML = "Write angle other than 0. Try Again...!";
        result.style.color = "red";
        result.style.display = "block";
    }
    else if (degrees > 0 && degrees < 90) {
        result.innerHTML = "The given angle is Acute Angle.";
        result.style.color = "blue";
        result.style.display = "block";
    }
    else if (degrees === 90) {
        result.innerHTML = "The given angle is Right Angle.";
        result.style.color = "teal";
        result.style.display = "block";
    }
    else if (degrees > 90 && degrees < 180) {
        result.innerHTML = "The given angle is Obtuse Angle.";
        result.style.color = "orange";
        result.style.display = "block";
    }
    else if (degrees === 180) {
        result.innerHTML = "The given angle is Straight Angle.";
        result.style.color = "blueviolet";
        result.style.display = "block";
    }
    else if (degrees > 180 && degrees < 360) {
        result.innerHTML = "The given angle is Reflex Angle.";
        result.style.color = "purple";
        result.style.display = "block";
    }
    else if (degrees === 360 || degrees % 360 === 0) {
        result.innerHTML = "The given angle is Full Rotation.";
        result.style.color = "green";
        result.style.display = "block";
    }
    else {
        result.innerHTML = "Please enter a valid Number.";
        result.style.color = "red";
        result.style.display = "block";
    }
}

// For Searching Number

let numbers = [];

function insertNumber() {

    let insert = parseInt(document.getElementById('insert').value);
    let insertResult = document.getElementById('i-result');
    let empty = document.getElementById('empty');

    document.getElementById('insert').value = "";
    empty.innerHTML = "";

    if (isNaN(insert)) {
        empty.innerHTML = "Please enter any number...";
        empty.style.color = "red";
        empty.style.display = "block";
    }
    else {
        numbers.push(insert);
        insertResult.innerHTML = `Inserted Numbers: ${numbers.join(', ')}`;
        insertResult.style.color = "blue";
        insertResult.style.display = "block";
    }
}

function searchNumber() {

    let search = parseInt(document.getElementById('insert').value);
    let searchResult = document.getElementById('s-result');
    let empty = document.getElementById('empty');

    empty.innerHTML = "";

    if (isNaN(search)) {
        empty.innerHTML = "Please enter a number to search.";
        empty.style.color = "red";
        empty.style.display = "block";
    }
    else if (numbers.includes(search)) {
        searchResult.innerHTML = `Number ${search} found in the list.`;
        searchResult.style.color = "green";
        searchResult.style.display = "block";
    }
    else {
        searchResult.innerHTML = `Number ${search} not found in the list.`;
        searchResult.style.color = "red";
        searchResult.style.display = "block";
    }
}

// For Sorting 100 Intigers

let sortNumber = [];

function insertIntigers() {

    let insertValue = document.getElementById('sort-insert').value.trim();
    let insertResult = document.getElementById('inserted-result');
    let splitArray = insertValue.split(" ");
    let empty = document.getElementById('s-empty');

    empty.innerHTML = "";

    if (splitArray.length === 0) {
        empty.innerHTML = "Please enter numbers separated by spaces.";
        empty.style.color = "red";
        empty.style.display = "block";
        return;
    }

    for (let i = 0; i < splitArray.length; i++) {
        if (isNaN(splitArray[i])) {
            empty.innerHTML = "Please enter valid numbers.";
            empty.style.color = "red";
            empty.style.display = "block";
        }
        splitArray[i] = Number(splitArray[i]);
    }

    if (splitArray.length > 100) {
        empty.innerHTML = "Please enter up to 100 numbers.";
        empty.style.color = "red";
        empty.style.display = "block";
        return;
    }

    sortNumber = splitArray;
    insertResult.innerHTML = `Inserted Numbers: ${sortNumber.join(', ')}`;
    insertResult.style.color = "blue";
    insertResult.style.display = "block";
    document.getElementById('sort-insert').value = "";
}

function sortIntigers() {

    let sortResult = document.getElementById('sort-result');

    if (sortNumber.length === 0) {
        sortResult.innerHTML = "No numbers to sort. Please insert integers first.";
        sortResult.style.color = "red";
        sortResult.style.display = "block";
        return;
    }

    sortNumber.sort((a, b) => a - b);

    sortResult.innerHTML = `Sorted Numbers: ${sortNumber.join(', ')}`;
    sortResult.style.color = "green";
    sortResult.style.display = "block";
}

// For Finding Maximum and Minimum Numbers

let findNumber = [];

function inputValues() {

    let insertValue = document.getElementById('max-insert').value.trim();
    let insertResult = document.getElementById('input-result');
    let splitingArray = insertValue.split(/\s+/);
    let empty = document.getElementById('m-empty');

    empty.innerHTML = "";

    if (splitingArray.length === 0) {
        empty.innerHTML = "Please enter numbers separated by spaces.";
        empty.style.color = "red";
        empty.style.display = "block";
        return;
    }

    for (let i = 0; i < splitingArray.length; i++) {
        if (isNaN(splitingArray[i])) {
            empty.innerHTML = "Please enter valid numbers.";
            empty.style.color = "red";
            empty.style.display = "block";
        }
        splitingArray[i] = Number(splitingArray[i]);
    }

    findNumber = splitingArray;
    insertResult.innerHTML = `Inserted Numbers: ${findNumber.join(', ')}`;
    insertResult.style.color = "blue";
    insertResult.style.display = "block";
    document.getElementById('sort-insert').value = "";
}

function maxNumber() {
    let maxResult = document.getElementById('find-result');

    if (findNumber.length === 0) {
        maxResult.innerHTML = "No numbers to find maximum. Please insert integers first.";
        maxResult.style.color = "red";
        maxResult.style.display = "block";
        return;
    }

    let max = findNumber[0];

    for (let i = 0; i < findNumber.length; i++) {
        if (findNumber[i] > max) {
            max = findNumber[i];
        }
    }

    maxResult.innerHTML = `Maximum Number: ${max}`;
    maxResult.style.color = "green";
    maxResult.style.display = "block";
}

function minNumber() {
    let minResult = document.getElementById('find-result');

    if (findNumber.length === 0) {
        minResult.innerHTML = "No numbers to find minimum. Please insert integers first.";
        minResult.style.color = "red";
        minResult.style.display = "block";
        return;
    }

    let min = findNumber[0];

    for (let i = 0; i < findNumber.length; i++) {
        if (findNumber[i] < min) {
            min = findNumber[i];
        }
    }

    minResult.innerHTML = `Minimum Number: ${min}`;
    minResult.style.color = "green";
    minResult.style.display = "block";
}

// For Diagonal Matrix Finder

function findDiagonal() {
    let m00 = parseInt(document.getElementById('r00').value);
    let m01 = parseInt(document.getElementById('r01').value);
    let m02 = parseInt(document.getElementById('r02').value);
    let m10 = parseInt(document.getElementById('r10').value);
    let m11 = parseInt(document.getElementById('r11').value);
    let m12 = parseInt(document.getElementById('r12').value);
    let m20 = parseInt(document.getElementById('r20').value);
    let m21 = parseInt(document.getElementById('r21').value);
    let m22 = parseInt(document.getElementById('r22').value);

    let mResult = document.getElementById('matrix-result');
    let empty = document.getElementById('found-empty');

    mResult.innerHTML = "";
    empty.innerHTML = "";

    if (isNaN(m00) || isNaN(m01) || isNaN(m02) || isNaN(m10) || isNaN(m11) || isNaN(m12) || isNaN(m20) || isNaN(m21) || isNaN(m22)) {
        empty.innerHTML = "Please enter values in Matrix.";
        empty.style.color = "red";
        empty.style.display = "block";
    }
    else if (m00 === 0 && m01 === 0 && m02 === 0 && m10 === 0 && m11 === 0 && m12 === 0 && m20 === 0 && m21 === 0 && m22 === 0) {
        mResult.innerHTML = "The given matrix is a Null and Digonal Matrix.";
        mResult.style.color = "blue";
        mResult.style.display = "block";
    }
    else if (m01 == 0 && m02 == 0 && m10 == 0 && m12 == 0 && m20 == 0 && m21 == 0) {
        mResult.innerHTML = "The given matrix is a Diagonal Matrix.";
        mResult.style.color = "green";
        mResult.style.display = "block";
    }
    else {
        mResult.innerHTML = "The given matrix is not a Diagonal Matrix.";
        mResult.style.color = "red";
        mResult.style.display = "block";
    }
}

// For Factorialize given number

function factorialize() {

    let num = parseInt(document.getElementById('fact-num').value);
    let factResult = document.getElementById('fact-result');
    let empty = document.getElementById('num-empty');
    let resultValue = 1;

    factResult.innerHTML = "";
    empty.innerHTML = "";

    if (isNaN(num)) {
        empty.innerHTML = "Please enter a valid number.";
        empty.style.color = "red";
        empty.style.display = "block";
    }
    else if (num < 0) {
        empty.innerHTML = "Please enter a positive number.";
        empty.style.color = "red";
        empty.style.display = "block";
    }

    if (num === 0 || num === 1) {
        resultValue = 1;

        factResult.innerHTML = `Factorial of ${num} = ${resultValue}`;
        factResult.style.color = "green";
        factResult.style.display = "block";
    }
    else {
        for (let i = num; i >= 1; i--) {
            resultValue = resultValue * i;
        }
        factResult.innerHTML = `Factorial of ${num} = ${resultValue}`;
        factResult.style.color = "green";
        factResult.style.display = "block";
    }
}

// For String Rotation

function rotateString() {
    let string = document.getElementById('string-text').value;
    let result = document.getElementById('rotate-result');
    let empty = document.getElementById('string-empty');

    result.innerHTML = "";
    empty.innerHTML = "";

    if (string === '') {
        empty.innerHTML = 'Please enter text to rotate.';
        empty.style.color = 'red';
        empty.style.display = 'block';
    }
    else if (string) {
        let rotate = string.split('').reverse().join('');

        result.innerHTML = `Rotated String: "${rotate}"`;
        result.style.color = 'green';
        result.style.display = 'block';
    }
}

// For 1st and Last index Swap 

function swapStrting() {

    let string = document.getElementById('swap-text').value;
    let result = document.getElementById('swap-result');
    let empty = document.getElementById('text-empty');

    result.innerHTML = "";
    empty.innerHTML = "";

    if (string === '') {
        empty.innerHTML = "Please enter string to swap.";
        empty.style.color = "red";
        empty.style.display = "block"
    }
    else if (string.length < 2) {
        empty.innerHTML = "String must have at least 2 characters to swap.";
        empty.style.color = "red";
        empty.style.display = "block";
    }
    else {
        let splitSwap = string.split('');
        let firstIndex = splitSwap[0];
        let lastIndex = splitSwap[splitSwap.length - 1]

        splitSwap[splitSwap.length - 1] = firstIndex;
        splitSwap[0] = lastIndex;

        let swapedString = splitSwap.join('');

        result.innerHTML = "Swapped String: " + swapedString;
        result.style.color = "green";
        result.style.display = "block"
    }
}

// For Insert Text and search any word

let insertedText = '';

function inserttext() {

    let enteredText = document.getElementById('enter-text').value;
    let enteredResult = document.getElementById('entered-result');
    let charArray = enteredText.split("");
    let empty = document.getElementById('word-empty');

    enteredText.innerHTML = "";
    empty.innerHTML = "";

    if (enteredText === '') {
        empty.innerHTML = "Please enter text";
        empty.style.color = "red";
        empty.style.display = "block";
    }
    else {
        insertedText = enteredText;
        enteredResult.innerHTML = `Inserted Numbers: ${enteredText}`;
        enteredResult.style.color = "blue";
        enteredResult.style.display = "block";
    }
    document.getElementById('enter-text').value = "";
}

function searchWord() {

    let enteredText = document.getElementById('enter-text').value;
    let searchResult = document.getElementById('search-result');
    let empty = document.getElementById('word-empty');

    enteredText.innerHTML = "";
    searchResult.innerHTML = "";
    empty.innerHTML = "";

    if (insertedText === '') {
        empty.innerHTML = "Please insert text first";
        empty.style.color = "red";
        empty.style.display = "block";
    }

    if (enteredText === '') {
        empty.innerHTML = "Please enter a word to search";
        empty.style.color = "red";
        empty.style.display = "block";
    }
    else {

        let index = insertedText.indexOf(enteredText);
        if (index !== -1) {
            searchResult.innerHTML = `The word "${enteredText}" was found in the inserted text.`;
            searchResult.style.color = "green";
            searchResult.style.display = "block";
        }
        else {
            searchResult.innerHTML = `The word "${enteredText}" was not found in the inserted text.`;
            searchResult.style.color = "red";
            searchResult.style.display = "block";
        }
    }

}
