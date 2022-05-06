
const playerFactory = (name, color, number) => {
    return {name, color, number}
};

let gameOver = false;
const players = [];
players[0] = playerFactory("Player One", "#85E3FF", 1)
players[1] = playerFactory("Player Two", "#E7FFAC", 2)
activePlayer = players[0]


const game = (() => {
    const array =  [0,0,0,0,0,0,0,0,0]
    
    const changePlayer = () => {
        if (activePlayer == players[0]) {
            activePlayer = players[1]
            
        }
        else {
            activePlayer = players[0]
        }
        eventText.textContent = activePlayer.name + ": Your turn!"
        eventText.style.backgroundColor = activePlayer.color;
        console.log(array)

    }
    const checkWin = () => {

        if (
            (array[0] == array[1] && array[0] == array[2] && array[0] != 0) || //first row - 0,1,2
            (array[3] == array[4] && array[3] == array[5] && array[3] != 0) || //second row - 3,4,5
            (array[6] == array[7] && array[6] == array[8] && array[6] != 0) || //third row - 6,7,8
            (array[0] == array[3] && array[0] == array[6] && array[0] != 0) || //first column - 0,3,6
            (array[1] == array[4] && array[1] == array[7] && array[1] != 0) || //second column - 1,4,7
            (array[2] == array[5] && array[2] == array[8] && array[2] != 0) || //third column - 2,5,8
            (array[0] == array[4] && array[0] == array[8] && array[0] != 0) || //diagonal - 0,4,8
            (array[2] == array[4] && array[2] == array[6] && array[2] != 0) //diagonal - 2,4,6
        ) {
                const endMessage = activePlayer.name + " wins!"
                endGame(endMessage)
            } else if (
                array.every(field => field != 0)
            ) {
                const endMessage = "It's a tie!"
                eventText.style.backgroundColor = "white";
                endGame(endMessage)
            } else {
                changePlayer()
            }
    }
    const endGame = (endMessage) => {
        eventText.textContent = endMessage
        gameOver = true
    }

    return{
        array,
        activePlayer,
        players,
        changePlayer,
        checkWin,
        gameOver,
    }
}
)()

const background = document.querySelector('body')
const elements = document.querySelectorAll('.field_element')
const eventText = document.querySelector('.events')
eventText.style.backgroundColor = activePlayer.color;

elements.forEach((element) => {
    element.addEventListener('click', () => {
        if (gameOver == false) {
            if (game.array[parseInt(element.id)] == 0) {
                setColor(element);   
                game.array[parseInt(element.id)] = activePlayer.number
                game.checkWin()
            }
        }
    })
})

const setColor = (element) => {
    console.log(activePlayer.name)
    element.style.backgroundColor = activePlayer.color
}