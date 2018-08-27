const dotenv = require('dotenv');
var mongoose = require('mongoose');

dotenv.config();
var Schema = mongoose.Schema;
let db;

class MongoDB {
    static getDB(){
        return db;
    }

    static createModel(modelName, modelPluralName, schemaObj ){
        console.log("schema---",modelName,modelPluralName, schemaObj);
        let schema = new Schema(schemaObj);
        schema.statics.bulkInsert = function(models, fn) {
            if (!models || !models.length)
                return fn(null);
    
            var bulk = this.collection.initializeOrderedBulkOp();
            if (!bulk)
                return fn('bulkInsertModels: MongoDb connection is not yet established');
    
            var model;
            for (var i=0; i<models.length; i++) {
                model = models[i];
                bulk.insert(model);
            }
            
            bulk.execute(fn);
        };
        return  mongoose.model(modelName, schema, modelPluralName);
    }
    static bulkInsert(models, fn) {
        if (!models || !models.length)
            return fn(null);

        var bulk = this.collection.initializeOrderedBulkOp();
        if (!bulk)
            return fn('bulkInsertModels: MongoDb connection is not yet established');

        var model;
        for (var i=0; i<models.length; i++) {
            model = models[i];
            bulk.insert(model.toJSON());
        }
        
        bulk.execute(fn);
    };
	static start(){
        db = mongoose.connect(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`, { useNewUrlParser: true }) ;
        return db.then(
            () =>{
                console.log('connection mongodb ...', `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`);
                return true;
            },
            (err) => {
                console.log(`connection mongodb error ... mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_DB}`);
                return false;
        });
	}
}

module.exports = MongoDB;