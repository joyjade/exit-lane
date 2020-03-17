let html = require('choo/html')

module.exports = function (project) {
	let num = project.num
	let title = project.title

	return html `
		<p> ${num} : ${title}</p>
	`
}
