const mongoose = require('mongoose');
const Celeb = require('../models/celebrity');

const dbName = 'mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebs = [{
  name:"Tom Cruise",
  occupation: "crazy person",
  catchPhrase: "Show me the money!"
},
{ name:"Elon Musk",
occupation: "crazy-smart person",
catchPhrase: "we live in a simulation"
},
{ name:"Obama",
occupation: "intelligent person",
catchPhrase: "yes, we can"
}]

Celeb.create(celebs, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebs.length} celebs`)
  mongoose.connection.close()
});