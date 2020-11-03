const mainBoxEl = document.getElementById('main-box')
let step = 0

const addListener = mainBoxEl.addEventListener('click', function (event) {
    (step % 2 === 0) ? event.target.innerHTML = 'X' : event.target.innerHTML = 'O'
    step++
    check()
})

function check() {
    let boxEl = document.getElementsByClassName('box')
    let arr = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ]

    for (var i = 0; i < arr.length; i++) {
        if (boxEl[arr[i][0]].innerHTML === 'X' && boxEl[arr[i][1]].innerHTML === 'X' && boxEl[arr[i][2]].innerHTML === 'X') {
            alert('WIN X')
        } else if (boxEl[arr[i][0]].innerHTML === 'O' && boxEl[arr[i][1]].innerHTML === 'O' && boxEl[arr[i][2]].innerHTML === 'O') {
            alert('WIN O')
        } else alert('DRAW WINS')
    }
}



