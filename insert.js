// Insert One Data
db.getCollection("user").insertOne({
    firstName: "Alpha",
    lastName: "Brown",
    email: "alpha.b@mongo.db",
    age: new NumberInt(43),
    gender: "Man",
    address: {
        street: "Apple",
        city: "Jakarta Barat"
    }
})


// Insert An Array of Data
db.getCollection("user").insertMany([
    {
        firstName: "Beta",
        lastName: "Brown",   
        email: "brown.b@mongo.db",
        age: new NumberInt(24),
        gender: "Man",
        address: {
            street: "Mango",
            city: "Jakarta Selatan"
        }
    },
    {
        firstName: "Charlie",
        lastName: "Park",
        email: "charlie_park@mongo.db",
        age: new NumberInt(52),
        gender: "Woman",
        address: {
            street: "Apple",
            city: "Jakarta Barat"
        }
    }
])


// Insert One Data or An Array of Data
db.getCollection("user").insert([
    {
        firstName: "Delta",
        lastName: "Smith",
        email: "delta.s@mongo.db",
        age: new NumberInt(12),
        gender: "Man",
        address: {
            street: "Mango",
            city: "Jakarta Selatan"
        }
    },
    {
        firstName: "Epsilon",
        lastName: "Blue",
        email: "epsilon.b@mongo.db",
        age: new NumberInt(41),
        gender: "Woman",
        address: {
            street: "Orange",
            city: "Jakarta Selatan"
        }
    },
    {
        firstName: "Zeta",
        lastName: "Junior",
        email: "zeta.j@mongo.db",
        age: new NumberInt(24),
        gender: "Man",
        address: {
            street: "Orange",
            city: "Jakarta Selatan"
        }
    },
    {
        firstName: "Eta",
        lastName: "Brown",
        email: "eta.b@mongo.db",
        age: new NumberInt(71),
        gender: "Man",
        address: {
            street: "Helicopter",
            city: "Jakarta Timur"
        }
    },
    {
        firstName: "Theta",
        lastName: "Wick",
        email: "theta.w@mongo.db",
        age: new NumberInt(28),
        gender: "Man",
        address: {
            street: "Apple",
            city: "Jakarta Barat"
        }
    },
    {
        firstName: "Iota",
        lastName: "Smith",
        email: "iota.s@mongo.db",
        age: new NumberInt(12),
        gender: "Man",
        address: {
            street: "Helicopter",
            city: "Jakarta Timur"
        }
    },
    {
        firstName: "Kappa",
        lastName: "Junior",
        email: "kappa.j@mongo.db",
        age: new NumberInt(51),
        gender: "Woman",
        address: {
            street: "Drone",
            city: "Jakarta Timur"
        }
    },
])


