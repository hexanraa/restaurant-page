import createElement from "../functions/create-element"
import backgroundImage from '../assets/images/home.jpg'

const Home = () => {
    document.getElementById('main').style.backgroundImage = `url('${backgroundImage}')`;
    const content = document.getElementById('content')

    const pageTitle = createElement('h1', 'Welcome to Feast of the Realms')
    const subTitle = createElement('h4', 'Where legends dine, and hunger meets magic')
    const orderNow = createElement('button', 'Order Now')

    pageTitle.id = 'home-title'
    subTitle.id = 'home-subtitle'
    orderNow.id = 'order-btn'

    content.appendChild(pageTitle)
    content.appendChild(subTitle)
    content.appendChild(orderNow)
}

export default Home