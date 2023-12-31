const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ticketSchema = new Schema({
    name: {type: String, required: true},
    category: {type: String, required: true},
    message: {type: String},
    helpStatus: {type: Boolean, default: false},
    frowns: {type: String, default: ' '}
    
})

module.exports = mongoose.model('Ticket', ticketSchema);