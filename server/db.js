const mongoose = require('mongoose');
const mongoURI = "mongodb://0.0.0.0:27017/Datagram"

const connectToMongo = () => {
    mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

module.exports = connectToMongo;