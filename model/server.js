// / import mongoose 
const express = require("express");
const mongoose= require('mongoose');
const Person = require("./person");
const Character = require('./Character')
const app = express();
const url = 'mongodb://127.0.0.1:27017/my_database'

mongoose.connect(url, { useNewUrlParser: true })

const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', url)
})

db.on('error', err => {
  console.error('connection error:', err)
})
const person2 =new Person({ name: "Amine", age: 18 });
 const person =new Person({ name: "John", age: 18 });
//save it 
person2.save((error) => {
if (error) {
return console.log(`Error has occurred: ${error}`);
  }  
console.log('Document is successfully saved.');
});
// person2.save((error) => {
//     if (error) {
//     return console.log(`Error has occurred: ${error}`);
//       }  
//     console.log('Document is successfully saved.');
//     });


Person.find({}, function (error, documents) {
    console.log(documents);
  });
  const ryu = await Person.findOne({ name: "Amine" })
  console.log(ryu)
  constperson =new Person({
    userName: {
    type: String,
    lowercase: true,
    trim: true,
    minLength: 6,
    maxLength: 12,
    }
    });
    Person.updateOne({ name: 'John' }, { name: 'Jason' }, (err) => {});
    Person.findOne({ name: 'John' }, (error, person) {
      // Code
      });
      Person.find({ name: 'John', age: 18 }, (error, result) => {
        if(error) {
        return console.log(`Error has occurred: ${error}`);
        } console.log(result);
        })
              
  