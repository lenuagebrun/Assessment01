let currentNumber = 0;

let startingNumber = document.getElementById('startingNumber');
let x = document.getElementById('yourNumber').value = 1;

function inputValue(){
    x = document.getElementById('yourNumber').value;
}

function modifyNumber(){
    startingNumber.innerHTML = currentNumber;
};

function smallerThanZeroEqualsRed(){
    if (currentNumber < 0){
        startingNumber.style.color = 'red';
    } else {
        startingNumber.style.color = 'black';
    }
};

document.getElementById('plus').addEventListener('click', function() {
    inputValue();
    currentNumber += +x;
    modifyNumber();
    smallerThanZeroEqualsRed();
});

document.getElementById('minus').addEventListener('click', function() {
    inputValue();
    currentNumber-= x;
    modifyNumber();
    smallerThanZeroEqualsRed();
});

modifyNumber();