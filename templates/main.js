var html = require('choo/html')

var projects = require('./project.js')

module.exports = function (state) {
	var state.projects
	return html `
		<div>
			<h1 >Exit Lane</p>
		</div>
		<div>
			${state.projects.map(project)}
		</div>
	`
}
