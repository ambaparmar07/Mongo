const mongoose = require('mongoose');

//mongoose.connect('mongodb://127.0.0.1:27017/test');  //to connect the db to js file

main()
  .then((res) => {
    console.log("connection successful");
  })
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

const User = mongoose.model("User", userSchema);

User.findByIdAndDelete("665b61e7f2b337d4f87646a1")
  .then((res) => {
    console.log(res);
  });

// User.deleteMany({age: 48})
//   .then((res) => {
//     console.log(res);
//   });

// User.deleteOne({name: "Bruce"})
//   .then((res) => {
//     console.log(res);
//   });

// User.findOneAndUpdate({ name: "Bruce" }, { age: 42 }, { new: true })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.updateMany({  age: { $gt: 48 } } , { age: 55 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.updateOne({name: "Bruce"}, {age: 49})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findById("665b61e7f2b337d4f87646a2")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.find({age: {$gt: 47}})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.insertMany([
//   {name: "Tony", email: "tony@gmail.com", age: 50},
//   {name: "Peter", email: "peter@gmail.com", age: 30},
//   {name: "Bruce", email: "bruce@gmail.com", age: 47},
// ]).then((res) => {
//   console.log(res);
// });

// const user2 = new User({
//   name: "Eve",
//   email: "eve@yahoo.in",
//   age: 48
// });

// user2
//   .save()
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((err) => {
//     console.log(err);
//   });