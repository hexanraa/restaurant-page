
const createElement = (elname, name) => {
    const el = document.createElement(`${elname}`)
    el.textContent = name
    el.id = name.toLowerCase()

    return el
}

export default createElement