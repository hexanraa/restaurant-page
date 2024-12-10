import createElement from "../functions/create-element"
import backgroundImage from '../assets/images/about.jpg'

const About = () => {
    document.getElementById('main').style.backgroundImage = `url('${backgroundImage}')`;

    const content = document.getElementById('content')


    const pageTitle = createElement('h1', 'Our Story')
    const subTitle = createElement('h4', 'A tale of flavors from the mystical realms')

    pageTitle.id = 'about-title'
    subTitle.id = 'about-subtitle'

    const title = createElement('h3', 'Where the Realms Meet the Real World')
    const story = createElement('p', 'In an age when hunger roamed the lands and flavor was but a forgotten art, a group of culinary adventurers banded together to create Feast of the Realms. With recipes passed down by ancient wizards, elves, and even dragons, our mission is to bring magic to your table. Every dish tells a story, every sip unlocks a spell, and every bite takes you on a journey to mythical lands')


    content.appendChild(pageTitle)
    content.appendChild(subTitle)
    content.appendChild(title)
    content.appendChild(story)

}

export default About