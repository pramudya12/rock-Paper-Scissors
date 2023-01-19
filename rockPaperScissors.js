const getUserChoise = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
        return userInput;
    } else {
        return 'Error, please type: rock, paper or scissors.';
    }
}

const getComputerChoise = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};

const determineWinner = (userChoise, computerChoise) => {
    if (userChoise === computerChoise) {
        return 'This game is a tie!';
    }
    if(userChoise === 'rock') {
        if(computerChoise === 'paper') {
            return "Sorry, computer won!";
        } else {
            return "Congratulations, you won!";
        }
    }

    if (userChoise === 'paper') {
        if(computerChoise === 'scissors') {
            return "Sorry, computer won!";
        } else {
            return "Congratulations, you won!";
        }
    }

    if (userChoise === 'scissors') {
        if(computerChoise === 'rock') {
            return "Sorry, computer won!";
        } else {
            return "Congratulations, you won!";
        }
    }
};

const playGame = () => {
    const userChoise = getUserChoise('rock');
    const computerChoise = getComputerChoise();
    console.log('You threw: ' + userChoise);
    //console.log(`You threw ${userChoise}`);
    console.log('The computer threw: ' + computerChoise);

    console.log(determineWinner( userChoise, computerChoise));
};

playGame();
