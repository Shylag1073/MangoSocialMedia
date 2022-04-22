const { User, Thought } = require('../models');

const userController ={


// GET ALL USERS // 
getAllUsers(req,res) {
    User.find({})
    .then(dbUserData => res.json(dbUserData))
    .catch (err => {
        res.status(500).json(err);
        console.log(err);
    });
},

// GET UNO USER // 

getSingleUser(req, res) {
    User.findOne ({ _id: req.params.userId  })
    .select('-_v')
    .populate('thoughts')
    .then ((dbUserData) => {
        if (!dbUserData) {
            return res.status(404).json({ message: ' Opps No user with this id! '});
        }
        res.json(dbUserData);
    })
    .catch ((err) => {
        res.status(500).json(err);
        console.log(err);
    })

},

// MAKE A NEW USER // 

createUser(req,res) {
    User.create(req.body)
    .then((dbUserData) => {
        res.json(dbUserData);
    })
    .catch ((err) => {
        res.status(500).json(err);
        console.log(err);
    });
},

// UPDATE USER // 

updateUser(req, res ) {
    User.findOneAndUpdate (
        { _id: req.params.userId },
        {$set: req.body,},
        {runValidators:true,
        new: true,
    })
    .then ((dbUserData) => {
        if (!dbUserData) {
            return res.status(404).json({ message: ' Opps No user with this id! '});
        }
        res.json(dbUserData);
    })
    .catch ((err) => {
        res.status(500).json(err);
        console.log(err);
    });
}

//MAYBE DELETE IF I FEEL LIKE IT // 


}