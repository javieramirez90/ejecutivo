const Schema = require('mongoose').Schema
// import Schema from 'mongoose';
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
  
  firstName: String,
  lastName: String,
  lastName2: String,
  email: String,
  status: {
    type: String,
    enum: ['potential', 'client']
  },
  profile: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  programsInterestedIn: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Program'
    }  
  ],
  programsEnrolledIn: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Program'
    }
  ]
},{
  timestamps:{
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

userSchema.Schema.plugin();
module.exports = require('mongoose').model('User', userSchema);