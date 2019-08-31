const saveItem = (p) => {
  localStorage.setItem('item', p.innerHTML)
}

const removeItem = (span) => {
  localStorage.clear(span)
}