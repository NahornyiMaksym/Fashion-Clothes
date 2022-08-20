document.querySelector('div.carousel a.left').addEventListener('click', () => {
    const ul = document.querySelector('ul.items')
    ul.prepend(ul.querySelector('li:last-of-type'))

    const ulTitles = document.querySelector('ul.titles')
    ulTitles.prepend(ulTitles.querySelector('li:last-of-type'))
})

document.querySelector('div.carousel a.right').addEventListener('click', () => {
    const ul = document.querySelector('ul.items')
    ul.append(ul.querySelector('li:first-of-type'))

    const ulTitles = document.querySelector('ul.titles')
    ulTitles.append(ulTitles.querySelector('li:first-of-type'))
})


