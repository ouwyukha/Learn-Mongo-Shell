// Create Collection as well specify the validation
db.createCollection("user", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: ["firstName", "lastName", "email", "age", "gender", "address"],
         properties: {
            // User Information
            firstName: {
               bsonType: "string",
               description: "must be a string and is required"
            },
            lastName: {
               bsonType: "string",
               description: "must be a string and is required"
            },
            email: {
               bsonType: "string",
               pattern: "^.+@.+\..+$",
               description: "must be a string and is required"
            },
            age: {
               bsonType: "int",
               description: "must be a int and is required"
            },
            gender: {
               enum: ["Man", "Woman"],
               description: "can only be one of the enum values and is required"
            },
            address: {
               bsonType: "object",
               required: ["city", "street"],
               properties: {
                  street: {
                     bsonType: "string",
                     description: "must be a string if the field exists"
                  },
                  city: {
                     bsonType: "string",
                     description: "must be a string and is required"
                  }
               },
               description: "must be an object containing street and city"
            },
            // Follow
            followingList: {
               bsonType: "array",
               required: ["following"],
               properties: {
                  following: {
                     bsonType: "objectId",
                     description: "must be a objectId and is required"
                  }
               },
               description: "must be an array of following's _id"
            },
            followerList: {
               bsonType: "array",
               required: ["follower"],
               properties: {
                  follower: {
                     bsonType: "objectId",
                     description: "must be a objectId and is required"
                  }
               },
               description: "must be an array of follower's _id"
            }
         }
      }
   }
})
