import initialload from "./modules/initial-load";
import './style.css'
import Home from "./modules/home";
import Menu from "./modules/menu";
import About from "./modules/about";

initialload()

const mainContent = document.getElementById('content')
const homeBtn = document.getElementById('home')
const menuBtn = document.getElementById('menu')
const aboutBtn = document.getElementById('about')

homeBtn.addEventListener('click', () => {
    mainContent.textContent = ''
    Home()
})

menuBtn.addEventListener('click', () => {
    mainContent.textContent = ''
    Menu()
})

aboutBtn.addEventListener('click', () => {
    mainContent.textContent = ''
    About()
})


