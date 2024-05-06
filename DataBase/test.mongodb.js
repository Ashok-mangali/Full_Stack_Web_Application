use('Profile')

db.Information.insertOne({
  name: 'Ramu',
  Role: "Web Developer",
  Age: "25",
  Address: "Hyderbad"
})
// db.Products.insertOne({
//   name:'Ashok',
//   Role:'Software Developer'
  
// })

// db.Products.insertOne({
//   name:"Sreenivas",
//   Age: "29",
//   Role:"App Developer",
// })

// db.Products.insertOne({
//   name:"Sreenivas",
//   Age: "29",
//   Role: "APP Developer"
// })



// db.Products.updateOne({},{

//   $set:{
//     "name":"Ram",
//     "Role":"Web Developer"
//   }
// })

// db.Products.deleteOne({
//   password:"Ashok@123"
// })

// db.Products.deleteMany({
//   name:"Ram",
//   Role:"Web Developer"
// })
  
db.Products.find()

