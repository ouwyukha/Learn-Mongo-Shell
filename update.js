//
// Update #1: Alpha Brown follows Beta Brown
//
// Find Alpha Brown's id using his email
var actorId = db.getCollection("user").findOne({
    email: "alpha.b@mongo.db"
})._id

// Find Beta Brown's id using his email
var targetId = db.getCollection("user").findOne({
    email: "brown.b@mongo.db"
})._id

db.getCollection("user").bulkWrite([
    // Add Beta Brown to Alpha Brown's followingList
    { updateOne : {
       "filter" : { _id: actorId },
       "update" : {
           $push: {
               followingList: targetId
            }
        }
    } },
    // Add Alpha Brown to Beta Brown's followerList
    { updateOne : {
        "filter" : { _id: targetId },
        "update" : {
            $push: {
                followerList: actorId
             }
        }
    } }
]);

// Check the result
db.getCollection("user").findOne({_id: actorId}).followingList
db.getCollection("user").findOne({_id: targetId}).followerList


//
// Update #2: Update brown.b@mongo.db's email to beta.b@mongo.db
//
db.getCollection("user").updateOne({
    email: "brown.b@mongo.db"
},{
    $set: {
        email: "beta.b@mongo.db"
    }
})

// Check the result
db.getCollection("user").find({firstName: "Beta", lastName: "Brown"}, {email: 1})


//
// Update #3: Beta Brown follows all existing users
//
// Find Beta Brown's id using his email
var actorId = db.getCollection("user").findOne({
    email: "beta.b@mongo.db"
})._id

// Find all existing users' id except Beta Brown's
var targetIds = db.getCollection("user").find({
    _id: { $ne: actorId}
},{
    _id: 1
}).map( function(u) { return u._id; } )

db.getCollection("user").bulkWrite([
    // Add all ids to Beta Brown's followingList
    { updateOne : {
       "filter" : { _id: actorId },
       "update" : {
           $addToSet: {
            followingList: { $each: targetIds}
            }
        }
    } },
    // Add Beta Brown's id to targets's followerList
    { updateMany : {
        "filter" : { _id: { $in: targetIds } },
        "update" : {
            $addToSet: {
                followerList: actorId
             }
        }
    } }
]);

// Check the result
db.getCollection("user").find({}, {_id: 0, firstName: 1, lastName: 1, followingList: 1, followerList: 1})


//
// Update #4: Remove all following from Beta Brown's followingList
//
// Find Beta Brown's id and followingList using his email
var actor = db.getCollection("user").findOne({
    email: "beta.b@mongo.db"
}, {
    followingList: 1
})
var actorId = actor._id
var actorFollowingList = (actor.followingList==null)?[]:actor.followingList

db.getCollection("user").bulkWrite([
    // Remove all following from Beta Brown's followingList
    { updateOne : {
       "filter" : { _id: actorId },
       "update" : {
           $unset: {
               followingList: ""
            }
        }
    } },
    // Remove Beta Brown from his following's followerList
    { updateMany : {
        "filter" : { _id: { $in : actorFollowingList} },
        "update" : {
            $pull: {
                followerList: actorId
             }
        }
    } }
]);

// Check the result
db.getCollection("user").find({}, {_id: 0, firstName: 1, lastName: 1, followingList: 1, followerList: 1})