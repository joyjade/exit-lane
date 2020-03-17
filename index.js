// require frameworks
let html = require ('choo/html')
let choo = require('choo')

// initialize app
let app = choo()


// pass down states!
app.use(function (state) {
	// set states
	state.projects = [
		{num: '1.', title: 'kashmir princess'},
		{num: '2.', title: 'fugitivity'},
		{num: '3.', title: 'escapes'},
		{num: '4.', title: 'exit lane'},
		{num: '5.', title: 'grief'}
	]
})

// use templates
let main = require ('./templates/main.js')

// route up! mount up!
app.route('/', main)
app.mount('div')