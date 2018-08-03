const Schema = require('mongoose').Schema

const passportLocalMongoose = require('passport-local-mongoose');

const adminSchema = new Schema({
  
  userName: String,
  password: String,
  email: String,
  profile: {
    type: Schema.Types.ObjectId,
    ref: 'Admin'
  }
},{
  timestamps:{
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

userSchema.Schema.plugin();
module.exports = require('mongoose').model('User', userSchema);