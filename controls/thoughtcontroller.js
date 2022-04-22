const { Thought, User } = require('../models');

const thoughtController ={


// GET ALL THOUGHTS // 
getThoughts(req,res) {
    Thought.find({})
    .then(dbThoughtData => res.json(dbThoughtData))
    .catch (err => {
        res.status(500).json(err);
        console.log(err);
    });
},

// GET UNO THOUGHT // 

getSingleThought(req, res) {
    Thought.findOne ({ _id: req.params.thoughtId  })
    .select('-_v')
    .populate('thoughts')
    .then ((dbThoughtData) => {
        if (!dbThoughtData) {
            return res.status(404).json({ message: ' Opps No thoughts with this id! '});
        }
        res.json(dbThoughtData);
    })
    .catch ((err) => {
        res.status(500).json(err);
        console.log(err);
    })

},

// MAKE A NEW thought // 

createThought(req,res) {
    Thought.create(req.body)
    .then((dbThoughtData) => {
        res.json(dbThoughtData);
    })
    .catch ((err) => {
        res.status(500).json(err);
        console.log(err);
    });
},

// UPDATE thought // 

updatethought(req, res ) {
    Thought.findOneAndUpdate (
        { _id: req.params.thoughtId },
        {$set: req.body,},
        {runValidators:true,
        new: true,
    })
    .then ((dbThoughtData) => {
        if (!dbThoughtData) {
            return res.status(404).json({ message: ' Opps No thought with this id! '});
        }
        res.json(dbThoughtData);
    })
    .catch ((err) => {
        res.status(500).json(err);
        console.log(err);
    });
}

//MAYBE DELETE IF I FEEL LIKE IT // 


}