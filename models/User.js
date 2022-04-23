const { Scheme, model } = require('mongoose');

const userSchema = new Scheme (

{
username: {
    type:String,
    required: true,
    unique:true,
    trim:true,
},
email: {
    type:String,
    required: true,
    unique:true,
    match: [/.+@.+\..+/, 'Not an email address!'],
},
thoughts: [
    {
        type:Scheme.Types.ObjectId,
        ref: 'Thought',
    },
],
friends: [
    {
        type:Scheme.Types.ObjectId,
        ref: 'User',
    },
],
},
{
    toJSON: {
        virtuals: true,
    },
    id:false,
});

userSchema.virtual('friendCount'),get(function() {
    return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;