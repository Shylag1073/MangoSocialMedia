const { Scheme, model } = require('mongoose');

const reactionSchema = new Scheme (

{
reactionId: {
    type:schema.Types.ObjectId,
    default: () => new Types.ObjectId ()
},
reactionBody: {
    type:String,
    required: true,
    maxlength: 280
},
username: {
    type:String,
    required: true
},
createAt: {
    type:Date,
    default:Date.now,
    get: timestamp => dataFormat(timestamp)   
    },
},

{
    toJSON: {
        getters: true,
    },
    id:false,
});


module.exports = reactionSchema;