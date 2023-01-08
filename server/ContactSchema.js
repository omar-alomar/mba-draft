const mongoose = require('mongoose')
const { Schema } = mongoose;

const ContactSchema = new mongoose.Schema({
    fName: String,
    lName: String,
    email: String,
    tel: String,
})