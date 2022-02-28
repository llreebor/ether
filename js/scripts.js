// Custom Scripts
// Custom scripts
// Аккордеон
function accordion() {
    const items = document.querySelectorAll('.accordion__item-trigger')
    items.forEach((item) => {
        item.addEventListener('click', () => {
            const parent = item.parentNode
            if (parent.classList.contains('accordion__item-active')) {
                parent.classList.remove('accordion__item-active')
            } else {
                document
                    .querySelectorAll('.accordion__item')
                    .forEach((child) => child.classList.remove('accordion__item-active'))
                parent.classList.add('accordion__item-active')
            }
        })
    })
}
accordion()

const btn = document.querySelector('.header__copy-img')
const tooltip = document.querySelector('.tooltip')
btn.addEventListener('click', () => {
    copyText()
    tooltip.style.opacity = 1

    setTimeout(() => {
        tooltip.style.opacity = 0
    }, 3000)
})
// Copy
function copyText() {
    const input = document.querySelector('.copy__input')
    input.select()
    document.execCommand('copy')
}

