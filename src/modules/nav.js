import createElement from "../functions/create-element"


const Nav = () => {
    const navEl = document.querySelector('nav')

    const home = createElement('button', 'Home')
    const menu = createElement('button', 'Menu')
    const about = createElement('button', 'About')

    home.id = 'home'
    menu.id = 'menu'
    about.id = 'about'

    navEl.append(home, menu, about)

}

export default Nav