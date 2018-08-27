// open the database
let dotenv = require('dotenv');
let sourceMigrate = require('./src/source-migrate');
let targetMigrate = require('./src/target-migrate');
dotenv.config();

const main = async() =>{
	const data = await sourceMigrate(process.env.SQLLITE_DB);
	const results = await targetMigrate(data);
}

main();