const form = document.querySelector('#chatForm')
const ul = document.querySelector('#messages')
const socket = io()

form.addEventListener &&
	form.addEventListener("submit", () => {
		
		const msg = document.querySelector('#m')
		const li = document.createElement('li')

		socket.emit('chat message', msg.value)
		li.appendChild(document.createTextNode(msg.value))
		li.className = "myMsg right-align"
		ul.appendChild(li)
		msg.value = ""
	}, 
	false)

socket.on('chat response', msg => {

	const botLi = document.createElement('li')
  	botLi.appendChild(document.createTextNode(msg))
    botLi.className = "botMsg left-align"
	ul.appendChild(botLi)
})
