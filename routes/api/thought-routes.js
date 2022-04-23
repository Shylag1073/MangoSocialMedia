const router = require ('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    addReaction,
    removeReaction,
} = require('../../controls/thoughtcontroller');

///    API/thoughts  //// 

router.route('/').get(getThoughts).post(createThought);

// API/thoughts/:thoughtsID/

router.route('/:thoughtId').get(getSingleThought).put(updateThought);

// API/thoughts/:thoughtsID/REACTION /// 

//router.route('/:thoughtId/reaction').post(addReaction);

// API/thoughts/:thoughtsID/REACTION/:REACTIONID /// 

//router.route('/:thoughtsID/reaction/:reactionId').delete(removeReaction);


module.exports = router;