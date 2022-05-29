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

createThought(req, res) {
    Thought.create(req.body)
      .then((dbThoughtData) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { thoughts: dbThoughtData._id } },
          { new: true }
        );
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          return res.status(404).json({ message: 'Thought created but no user with this id!' });
        }

        res.json({ message: 'Thought successfully created!' });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

// UPDATE thought // 

updateThought(req, res ) {
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
},


// Delete a Thought 

deleteThought (req, res) {
    Thought.findOneAndRemove({ _id: req.params.thoughtId })
    .then((dbThoughtData) => {
        if(!dbThoughtData) {
            return res.status(404).json({ message: ' Opps No thought with this id! '});
        }
        // remove thought id from user's thoughts
        return User.findOneandUpdate (
            {thoughts: req.parms.thoughtId},
            {$pull: { thoughts: req.params.thoughtId } },
            { new: true }
        );
    })
    .then ((dbUserData) => {
        if (!dbUserData) {
            return res.status (404).json ({ message: 'Thought created but no user with this id! '})
        }
        res.json ({ message: 'Thought successfully deleted '});
    })
    .catch ((err) => {
        res.status(500).json(err);
        console.log(err);
    });
},

/// ADD A REACTION //// 

addReaction(req, res ) {
    Thought.findOneAndUpdate({_id: req.params.thoughtId },
        {add$set: { reactions: req.body } },
        {runValidators: true, new: true})
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
},

//// REMOVE REACTION /// 

removeReaction(req, res ) {
    Thought.findOneAndUpdate({_id: req.params.thoughtId },
        {$pull: { reactions : req.params.reactionId} },
        {runValidators: true, new: true})
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
},


//MAYBE DELETE IF I FEEL LIKE IT // 


};

module.exports = thoughtController;