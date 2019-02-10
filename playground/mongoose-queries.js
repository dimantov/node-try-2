const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

// var id = '5c321d1398dafac968e1a1d911';
//
// if(!ObjectID.isValid(id)){
//   console.log('Id is not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// })

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo', todo);
// }).catch((e) => console.log(e));

var id = '4c322737d50e6831385b6bb6';

User.findById(id).then((user) => {
  if(!user){
    console.log('Id not found');
  }
  console.log('User:', user);
}, (e) => {
  console.log(e);
});
