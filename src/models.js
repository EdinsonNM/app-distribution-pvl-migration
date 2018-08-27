const MongoDB = require('./lib/MongoDB') ;
const sources = require('./source');

const models = {};
Object.keys(sources).forEach(source => {
	let model = sources[source].model;
	models[source] = MongoDB.createModel(model.name, model.plural, model.schema);
})
module.exports = models;