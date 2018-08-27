const sqlite3 = require('sqlite3').verbose();
const sources = require('./source');
// open the database


const migrateDB = (db, sql) => {
	return new Promise((resolve, reject) => {
		db.all(sql, [], (err, rows) => {
			if (err) return reject(err);
			resolve(rows);
		});	
	})
	.then(data => [null, data])
	.catch(err => [err]);
}

module.exports = async(dbName) => {
	let db = new sqlite3.Database(dbName);
	let promises = [];
	Object.keys(sources).forEach(source => {
		let sql = sources[source].query;
		promises.push(migrateDB(db, sql));
	})
	let results = await Promise.all(promises).then(items => {
		let results = {}
		Object.keys(sources).forEach((source, index) => {
			[,data] = items[index];
			results[source] = data;
		});
		return results;
	})
	db.close();
	return results;
}