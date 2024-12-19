/* eslint-disable no-undef */
module.exports = {
	content: ["./dist/*.html", "./dist/assets/*.js", "./dist/assets/js/*.js"],
	css: ["./dist/assets/css/*.css"],
	output: "./dist/assets/css/",
	safelist: {
		standard: [/active/, "navbar-collapse", /collapse/, "collapsing", /show/],
		deep: [/^dropdown/, /^modal/, /^carousel/, /collapse/, /navbar/],
	},
}
