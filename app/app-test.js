const span = document.querySelector('span')
const button = document.querySelector('button')

span.textContent = localStorage.getItem('item')

button.addEventListener('click', () => {
    removeItem(span)
    location.assign('/test.html')
})
