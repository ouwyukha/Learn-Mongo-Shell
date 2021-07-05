// Select #1: Select all users
// keyword: find
db.getCollection("user").find({
})


// Select #2: Select a user using email
// keyword: findOne, unique
db.getCollection("user").findOne({
    email: "alpha.b@mongo.db"
})


// Select #3: Select top 3 users who are men
// keyword: find, limit
db.getCollection("user").find({
    gender: "Man",
}).limit(3)


// Select #4: Select user(s) who contain “Junior” in their name
// keyword: regex, case insensitive
db.getCollection("user").find({
    $or: [
        {
            firstName: /Junior/i
        },
        {
            lastName: /Junior/i
        }
    ]
})


// Select #5: Select user(s) who are 21-35 years old and live in Jakarta Selatan
// keyword: range, gte, lte, nested
db.getCollection("user").find({
    age: {$gte: 21, $lte: 35},
    "address.city": "Jakarta Selatan"
})


// Select #6: Select user(s) who live in Jakarta Barat, then show their firstName, lastName, gender, and address
// keyword: projection, select specific field, hide _id
db.getCollection("user").find({
    "address.city": "Jakarta Barat"
}, {
    firstName: 1,
    lastName: 1,
    gender: 1,
    address: 1,
    _id: 0,
})


// Select #7: Count number of user based on their city and gender
// keyword: aggregate, group, count, sum, sort, descending
db.getCollection("user").aggregate([
    { "$group": {
        "_id": {
            "city": "$address.city",
            "gender": "$gender"
        },
        "count": { "$sum": 1 }
    }},
    { "$sort": { "count": -1 } }
])