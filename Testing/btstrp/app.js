// Навигация, которая исчезает при прокрутке вниз, но отображается при прокрутке вверх.

let topMenuEl = document.getElementById('top-menu')
let scrollPrev = 0

window.addEventListener('scroll', function() {
    let scrolled;
    scrolled = window.scrollY
    if (scrolled > 50 && scrolled > scrollPrev) topMenuEl.classList.add('out')
    else topMenuEl.classList.remove('out')
    scrollPrev = scrolled
});

// --------------------------------------------------------------------------------------

/*let widthBr = document.body.clientWidth
let heightBr = document.body.clientHeight

let widthBr2 = screen.width
let heightBr2 = screen.height

console.log(widthBr);
console.log(heightBr);
console.log(widthBr2);
console.log(heightBr2);*/
