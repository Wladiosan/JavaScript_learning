let game = document.querySelector('.game'),
    res = document.querySelector('.res'),
    stepInfo = document.querySelector('.step-info'),
    btnGame = document.querySelector('.new-game'),
    boxes = document.querySelectorAll('.box'),
    step = false,
    count = 0,
    circle = `<svg class="circle">
            <circle r="45" cx="58" cy="58" stroke="blue"
                    stroke-width="10" fill="none"
                    stroke-linecap="round"/> </svg>`,
    cross = `<svg class="cross">
            <line class="first" x1="15" y1="15" x2="100" y2="100" stroke="red" stroke-width="10" stroke-linecap="round" />
            <line class="second" x1="100" y1="15" x2="15" y2="100" stroke="red" stroke-width="10" stroke-linecap="round" />
            </svg>`

function stepCross(target) {
    target.innerHTML = cross
    let crossAudio = new Audio('audio/cross.mp3')
    crossAudio.play()
    target.classList.add('x')
    count++
    res.innerText = ''
    stepInfo.innerText = 'Ваш ход: О'
    stepInfo.classList.add('blue')
    stepInfo.classList.remove('red')
}

function stepZero(target) {
    target.innerHTML = circle
    let circleAudio = new Audio('audio/circle.mp3')
    circleAudio.play()
    target.classList.add('o')
    count++
    res.innerText = ''
    stepInfo.innerText = 'Ваш ход: Х'
    stepInfo.classList.add('red')
    stepInfo.classList.remove('blue')
}

function init(e) {
    if (!step) stepCross(e.target)
    else stepZero(e.target)
    step = !step
    win()
}

function newGame() {
    step = false
    count = 0
    res.innerText = 'Новая Игра!'
    stepInfo.innerText = 'Ваш ход: Х'
    stepInfo.classList.add('red')
    boxes.forEach(item => {
            item.innerHTML = ''
            item.classList.remove('x', 'o', 'active')
        }
    )
    game.addEventListener('click', init)
}

function win() {
    comb = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ]

    for (let i = 0; i < boxes.length; i++) {
        if (boxes[comb[i][0]].classList.contains('x') &&
            boxes[comb[i][1]].classList.contains('x') &&
            boxes[comb[i][2]].classList.contains('x')) {
            setTimeout(() => {
                boxes[comb[i][0]].classList.add('active')
                boxes[comb[i][1]].classList.add('active')
                boxes[comb[i][2]].classList.add('active')
                res.innerText = 'Выиграли Х'
            }, 1500)
            game.removeEventListener('click', init)
            stepInfo.innerText = ''
        } else if (boxes[comb[i][0]].classList.contains('o') &&
            boxes[comb[i][1]].classList.contains('o') &&
            boxes[comb[i][2]].classList.contains('o')) {
            setTimeout(() => {
                boxes[comb[i][0]].classList.add('active')
                boxes[comb[i][1]].classList.add('active')
                boxes[comb[i][2]].classList.add('active')
                res.innerText = 'Выиграли O'
            }, 1500)
            game.removeEventListener('click', init)
            stepInfo.innerText = ''
        } else if (count === 9) {
            setTimeout(() => {
                res.innerText = 'Победила Ничья'
            }, 1500)
            stepInfo.innerText = ''
            game.removeEventListener('click', init)
        }
    }
}


res.innerText = 'Новая Игра!'
stepInfo.innerText = 'Ваш ход: Х'
stepInfo.classList.add('red')

game.addEventListener('click', init)
btnGame.addEventListener('click', newGame)

