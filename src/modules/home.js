import createElement from "../functions/create-element"

const Home = () => {
    const content = document.getElementById('content')

    const pageTitle = createElement('h1', 'Home')

    content.appendChild(pageTitle)
}

export default Home