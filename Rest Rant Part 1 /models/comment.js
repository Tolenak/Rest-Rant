const mongoose = require ('mongoose')

let commentSchema = new mongoose.schema({
    author: {type: String, default: "Anonymous"}, 
    rant: { type: Boolean, default: false } , 
    stars: { type: Number, required: true}, 
    content: { type: String, default: ''}
})

module.exports = mongoose.model ('comment', commentSchema)


