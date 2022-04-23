const router = require ('express').Router();

const {
    getThoughtss,
    getSingleThought,
    createThought,
    updateThought,
    addReaction,
    removeReaction,
} = require('../../controls/thoughtscontroller');

///    API/thoughts  //// 

router.route('/').get(getThoughtss).post(createThought);

// API/thoughts/:thoughtsID/

router.route('/:thoughtId'),get(getSingleThought).put(updateThought);

// API/thoughts/:thoughtsID/REACTION /// 

router.route('/:thoughtId/reaction').post(addReaction);

// API/thoughts/:thoughtsID/REACTION/:REACTIONID /// 

router.route('/:thoughtsID/reactions/:reactionId').delete(removeReaction);


module.exports = router;