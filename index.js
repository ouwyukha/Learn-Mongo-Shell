// Create Index based on email with unique constraint as unique email validator
db.getCollection("user").createIndex( { "email": 1 }, { unique: true } )