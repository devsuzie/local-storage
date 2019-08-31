const button = document.querySelector('button')
const p = document.querySelector('p')

button.addEventListener('click', () => {
    saveItem(p)
    location.assign('/test.html')
})
