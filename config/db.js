// Creating a base name for the MongoDB
const mongooseBaseName = 'blogy';
// Create the MongoDB URI for Development and Test
const database = {
    development: `mongodb://localhost/${mongooseBaseName}-development`,
    test: `mongodb://localhost/${mongooseBaseName}-test`,
};

const localDB = process.env.TESTENV ?  database.test :  database.development;
const currentDB =  process.env.MONGODB_URI || localDB;

module.exports = currentDB;