const mongoose = require('mongoose')
const Schema = mongoose.Schema

let pharmacySchema = new Schema({
    name:{
        type: String
    },
    address: {
        type: String
    },
    phone: {
        type: String
    }
},{
    collection: 'pharmacy'
})

module.exports = mongoose.model('Pharmacy',pharmacySchema)