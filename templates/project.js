var html = require('choo/html')

module.exports = function (project) {
	var num = project.num
	var title = project.title

	return html `
		<p> ${num} : ${title}</p>
	`
}
