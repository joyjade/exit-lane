// import template helper
let html = require('choo/html')

// import template!
let project = require('./project.js')

module.exports = function (state) {
	return html `
		<div>
			<div>
				<h1 >Exit Lane</p>
				${state.projects.map(project)}
			</div>
		</div>
	`

// require frameworks

}
