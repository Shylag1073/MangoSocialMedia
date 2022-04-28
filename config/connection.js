const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/socialmedia',
// mongodb+srv://Shylar:Password@cluster0.8ivwd.mongodb.net/socialmedia?retryWrites=true&w=majority
{
useNewUrlParser:true,
useUnifiedTopology:true
}

);

module.exports = mongoose.connection;