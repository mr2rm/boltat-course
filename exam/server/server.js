const jsonServer = require("json-server");
const path = require("path");
const server = jsonServer.create();
const families = require("./data.json");
const router = jsonServer.router({
	persons: families
});
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
router.render = (req, res) => {
	const linkHeader = res.get("Link");
	return res.jsonp({
		...(linkHeader
			? {
					pagination: linkHeader
						.split(",")
						.map(l => l.split(";"))
						.map(([value, name]) => {
							name = name
								.trim()
								.replace(/rel=/g, "")
								.replace(/"/g, "");
							value = value.trim().replace(/<|>/g, "");
							return [value, name];
						})
						.reduce((obj, cur) => ({ ...obj, [cur[1]]: cur[0] }), {})
			  }
			: {}),
		...res.locals
	});
};
server.listen(5000, () => {
	console.log("Server is listening on port 5000");
});
