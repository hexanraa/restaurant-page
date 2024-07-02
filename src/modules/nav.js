import createElement from "../functions/create-element"


const Nav = () => {
    const navEl = document.querySelector('nav')

    const home = createElement('button', 'Home')
    const menu = createElement('button', 'Menu')
    const about = createElement('button', 'About')

    navEl.append(home, menu, about)

}

export default Nav