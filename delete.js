// Delete: Delete Delta Smith using email

// Find Delta Smith's id, followingList, and followerList using his email
var actor = db.getCollection("user").findOne({
    email: "delta.s@mongo.db"
}, {
    followingList: 1,
    followerList: 1
})
var actorId = actor._id
var actorFollowingList = (actor.followingList==null)?[]:actor.followingList
var actorFollowerList = (actor.followerList==null)?[]:actor.followerList

db.getCollection("user").bulkWrite([
    // Remove all followings and followers from Delta Smith's followingList and followerList
    { deleteOne : {
       "filter" : { _id: actorId },
    } },
    // Remove Delta Smith from his following's followerList
    { updateMany : {
        "filter" : { _id: { $in : actorFollowingList} },
        "update" : {
            $pull: {
                followerList: actorId
             }
        }
    } },
    // Remove Delta Smith from his follower's followingList
    { updateMany : {
        "filter" : { _id: { $in : actorFollowerList} },
        "update" : {
            $pull: {
                followingList: actorId
             }
        }
    } }
]);

// Check the result
db.getCollection("user").find({}, {_id: 0, firstName: 1, lastName: 1, followingList: 1, followerList: 1})