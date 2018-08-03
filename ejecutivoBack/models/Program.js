const Schema = require('mongoose').Schema


const programSchema = new Schema({
  typee: {
    type: String,
    enum: ['curso', 'diplomado']
  },
  name: String,
  initDate: Date,
  endDate: Date,
  schedule: String,
  modules: Number,
  hours: Number,
  registrationCost: Number,
  moduleCost: Number
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});


module.exports = require('mongoose').model('Program', programSchema);