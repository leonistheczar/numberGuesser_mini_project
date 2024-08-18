// NUMBER GUESSER

const minNum = 0,
      maxNum = 100,
      value = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
let attempts = 0,
    run = true;

// Event Listerner
document.addEventListener('DOMContentLoaded', guessTheNumber);

// Guess the Number
function guessTheNumber() {
    while (run) {
            let guess = Number(prompt(`Guess the number between ${minNum} & ${maxNum}.`));
            if (isNaN(guess)) {
                window.alert(`Please enter a valid number between ${minNum} & ${maxNum}.`);
            }
            else if(guess < minNum || guess > maxNum){
                window.alert(`Enter the number between ${minNum} & ${maxNum}.`);
            }
            else{
                attempts++;
                    if (guess < value){
                        window.alert('Try higher value...');
                    }
                    else if(guess > value){
                        window.alert('Try lower value...');
                    }
                    else{
                        window.alert(`HOORAH!!!  YOU WON.  THE CORRECT NUMBER IS ${value}.  You guessed the number in ${attempts} attempts.`)
                        run = false;
                    }
            }
        }
}
