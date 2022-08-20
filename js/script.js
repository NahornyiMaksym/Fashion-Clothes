function left () {
    const ul = document.querySelector('ul.items')
    ul.prepend(ul.querySelector('li:last-of-type'))

    const ulTitles = document.querySelector('ul.titles')
    ulTitles.prepend(ulTitles.querySelector('li:last-of-type'))
}
function right () {
    const ul = document.querySelector('ul.items')
    ul.append(ul.querySelector('li:first-of-type'))

    const ulTitles = document.querySelector('ul.titles')
    ulTitles.append(ulTitles.querySelector('li:first-of-type'))
}
document.querySelector('div.carousel a.left').addEventListener('click', left)
document.querySelector('div.carousel a.right').addEventListener('click', right)

/**
 * WHEEL
 * */
function throttle(f, t) {
    return function (args) {
        this.currentCall = Date.now();
        if (
            this.previousCall === undefined
            || (this.currentCall - this.previousCall) > t
        ) {
            this.previousCall = this.currentCall;
            f(args);
        }
    }
}
const throttledLeft = throttle(left, 500)
const throttledRight = throttle(right, 500)
const carousel = document.querySelector('div.carousel')
carousel.addEventListener('mousewheel', (e) => {
    e.stopPropagation()
    e.preventDefault()


    if (e.deltaY < 0) {
        throttledLeft()
    } else {
        throttledRight()
    }
})

/**
 * DRAG
 * */

let isDrag = false
let prevX

carousel.addEventListener('mousedown', (e) => {
    isDrag = true
    prevX = undefined
})
carousel.addEventListener('mouseup', (e) => {
    isDrag = false
})
carousel.addEventListener('mousemove', (e) => {
    if (!isDrag) {
        return
    }

    e.preventDefault()

    if (prevX) {
        const diff = e.clientX - prevX
        if (diff > 50) {
            throttledLeft()
            prevX = e.clientX
        } else if (diff < -50) {
            throttledRight()
            prevX = e.clientX
        }
    } else {
        prevX = e.clientX
    }
})
