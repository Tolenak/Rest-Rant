const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: String,
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: {
    type: Number,
    min: [1673, 'Surely not that old?!'], 
    max: [new Date().getFullYear(), "This is the Future!"]
  }, 
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'comment'}]
})

module.exports = mongoose.model('Place', placeSchema)
