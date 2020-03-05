var choo = require('choo')
var html = require ('choo/html')

var app = choo()

app.use(function (state) {
	state.projects = [
		{num: '1.', title: 'kashmir princess'},
		{num: '2.', title: 'fugitivity'},
		{num: '3.', title: 'escapes'},
		{num: '4.', title: 'exit lane'},
		{num: '5.', title: 'grief'}
	]
})

var main = require ('./templates/main.js')

app.route('/', main)
app.mount('body')
