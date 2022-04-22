const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongob://localhost/socialmedia', {
    useNewUrlParser: true,
    UseUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

module.exports = mongoose.connection;