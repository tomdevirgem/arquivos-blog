openMenu.addEventListener('click', () => {
    menu.style.display = 'flex'
    menu.style.right = (menu.offsetWidth * -1) + 'px'
    openMenu.style.display = 'none'
    setTimeout(() => {
        menu.style.opacity = '1'
        menu.style.right = '0'
    })
}, 10)

closeMenu.addEventListener('click', () => {
    menu.style.display = '0'

    menu.style.right = (menu.offsetWidth * -1) + 'px'

    setTimeout(() => {
        menu.removeAttribute('style')
        opneMenu.removeAttribute('style')
    }, 200)
})