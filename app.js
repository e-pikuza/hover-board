const board = document.querySelector('#board')
const colors = ['#FF008D', '#D32779', '#642797', '#0C1E80', '#7A00FF']
const SQUARES_NUMBER = 840

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add ('square')

    square.addEventListener('mouseover', setColor)

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(event) {
    const color = getRandomColor()
    const element = event.target
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1D1D1D'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    return colors[Math.floor( Math.random() * colors.length)]
}