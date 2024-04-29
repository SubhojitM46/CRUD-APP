const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const userSchema = mongoose.Schema({
    _id:Number,
    name: String,
    username: String,
    email: String,
    phone: Number
});
 //Add auto-incrementing field to your schema
userSchema.plugin(AutoIncrement, { inc_field: '_id' });

const User = mongoose.model('userr', userSchema);

module.exports = User;
