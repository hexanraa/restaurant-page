
const createElement = (elname, name) => {
    const el = document.createElement(`${elname}`)
    el.textContent = name

    return el
}

export default createElement