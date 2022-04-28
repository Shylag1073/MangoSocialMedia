const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://Shylar:Toby123@cluster0.8ivwd.mongodb.net/socialmedia?retryWrites=true&w=majority',
// || 'mongodb://localhost/socialmedia'
{
useNewUrlParser:true,
useUnifiedTopology:true
}

);

module.exports = mongoose.connection;