const MongoDB = require('./lib/MongoDB');
const models = require('./models');
const sources = require('./source');
var async = require('async');

global.DATA ={}
const transformForeingKeys = (data,name) => {
	let newData = [...data];
	if(sources[name].foreingKeys){
		newData = newData.map((item, index) => {
			let newItem = {...item};
			Object.keys(sources[name].foreingKeys).forEach(foreing => {
				const key = sources[name].foreingKeys[foreing];
				// console.log(DATA[foreing], item[key]);
				if(newItem[key]){
					let keySearch = 'code';
					if(sources[name].foreingKeysId && sources[name].foreingKeysId[foreing]){
						keySearch = sources[name].foreingKeysId[foreing];
					}
					foreingItem = global.DATA[foreing].find(ele => ele[keySearch].toString() === newItem[key].toString());
					newItem[key] = foreingItem._id
				}
			})
			return newItem;
		});
		// console.log(sources[name].foreingKeys, item);
	}
	return newData;
}

const insert = (Model, name, item, index) => {
	return new Promise((resolve, reject) => {
		console.log(item);
		Model.findOneAndUpdate({code: item.code}, item, {new: true, upsert:true, overwrite: true}, function(err, doc){
			if(err) return reject(err)
			// global.DATA[name][index] = doc;
			return resolve(JSON.parse(JSON.stringify(doc)));
		});
	});
	//.then(data => data)
	//.catch(error => [error]);
}
const InsertAllCollection = async(name, Model, data) => {
	let newData = [];
	newData = transformData(data[name], sources[name].transform);
	newData = transformForeingKeys(newData, name);
	let promises = newData.map((item, index) => {
		return insert(Model, name, item, index);
	});
	let result = await Promise.all(promises).then(results => results);
	global.DATA[name] = result;
	console.log('DATA========>',name);
	return result;
}

const transformData = function(data, transform) {
	return data.map(item => {
		let newItem = {};
		Object.keys(transform).forEach(col => {
			newItem[col] = item[transform[col]]
		});
		return newItem;
	});
};

module.exports = async (data) => {
	let status = await MongoDB.start();
	let promises = [];
	if(status){
		let promise = new Promise(resolve => resolve(true));
		Object.keys(data).forEach(collectionName => {
			promise = promise.then(() => new Promise(resolve =>
				resolve(InsertAllCollection(collectionName,models[collectionName], data))
			))
		});
		return await promise;
	}
}