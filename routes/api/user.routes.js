const router = require ('express').Router();

const {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    addFriend,
    removeFriend,
} = require('../../controls/usercontroller');

///    API/USER  //// 

router.route('/').get(getAllUsers).post(createUser);

// API/USER/:USERID /// 

router.route('/:userId').get(getSingleUser).put(updateUser);

// API/USER/:USERID/FRIENDS/:FRIENDID /// 

router.route('/:userID/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;