import createElement from "../functions/create-element"

const Menu = () => {
    const content = document.getElementById('content')

    const pageTitle = createElement('h1', 'Menu')

    content.appendChild(pageTitle)
}

export default Menu