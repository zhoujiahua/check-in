const mongoose = require("mongoose");
const { MONGO_ACCOUNT } = require('./secure');
module.exports = async () => {
    try {
        await mongoose.connect(MONGO_ACCOUNT.dev, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('Database connection successful...');
    } catch (error) {
        throw error;
    }
}