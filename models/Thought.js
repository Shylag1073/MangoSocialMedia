const { Scheme, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Scheme (

{
thoughtText: {
    type:String,
    required: true,
    minlength: 1,
    maxlength: 280
},
createAt: {
    type:Date,
    default:Date.now,
    get: timestamp => dataFormat(timestamp)   
},
username: 
    {
        type:String,
        required:true
    },
    reactions: [reactionSchema]
},

{
    toJSON: {
        getters: true,
    },
    id:false,
});


thoughtSchema.virtual('reactionCount'),get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;