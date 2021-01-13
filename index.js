const addTodo = (event) => {
    //prevents form from refreshing page
    event.preventDefault()
    // creating a new <li></li> with the text from our input
    const todo = document.createElement('li')
    todo.innerText = document.getElementById('item').value
    todo.addEventListener('click',completeTodo)
    // creating a button that will remove a todo item
    const button = document.createElement('button')
    button.innerText = 'x'
    button.addEventListener('click', removeTodo)
    todo.append(button)
    // tells the newly created li tags to live in the preexsiting ul in the hard HTML
    const list = document.querySelector('ul')
    list.appendChild(todo)
    // resetting out input to an empty field
    document.getElementById('item').value = ''
}

const removeTodo = (event) => {
    event.target.parentNode.remove()
}

const completeTodo = (event) => {
    const value = event.target.getAttribute('aria-checked')
    if (value === 'true') {
        event.target.setAttribute('aria-checked', 'false')
    } else {
        event.target.setAttribute('aria-checked', 'true')
    }
}

document.querySelector('form').addEventListener('submit',addTodo)