// import template helper
let html = require('choo/html')

// import template!
let project = require('./project.js')

module.exports = function (state) {
	return html `
		<div>
			<div>
				<h1>Exit Lane</h1>
				${state.projects.map(project)}
			</div>
			<h1>${state.tick.time}</h1>
		</div>
	`

}
