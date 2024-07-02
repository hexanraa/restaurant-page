import createElement from "../functions/create-element"

const About = () => {
    const content = document.getElementById('content')

    const pageTitle = createElement('h1', 'About')

    content.appendChild(pageTitle)
}

export default About