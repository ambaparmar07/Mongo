const mongoose = require('mongoose');

//mongoose.connect('mongodb://127.0.0.1:27017/test');  //to connect the db to js file

main()
  .then((res) => {
    console.log("connection successful");
  })
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// const bookSchema = new mongoose.Schema({
//     title: String,
//     author: String,
//     price: Number,
//   });

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 20
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    min: [1, "price is too low"],
  },
  discount: {
    type: Number,
    default: 0
  },
  category: {
    type: String,
    enum: ["fiction", "non-fiction"],
  },
  genre: [String]
});

const Book = mongoose.model("Book", bookSchema);

Book
  .findByIdAndUpdate("665c0f0affe9bf6892fbc702", { price: -100 }, { runValidators: true })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.errors.price.properties.message);
  });

// let book1 = new Book({
//   title: "Mathematics XII",
//   author: "RD Sharma",
//   price: 1200
// });

// let book1 = new Book({
//   title: "Mathematics VIII",
//   price: 1200
// });

// let book1 = new Book({
//   title: "How to kill a Mockingbird",
//   author: "Harper Lee",
//   price: "299"
// });

// let book1 = new Book({
//   title: "Gone Girl",
//   price: "399"
// });

// let book1 = new Book({
//   title: "Marvel Comics",
//   price: 500,
//   category: "fiction"
// });

// let book1 = new Book({
//   title: "Marvel Comics v2",
//   price: 600,
//   genre: ["comics", "superheroes", "fiction"]
// });

// book1
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });