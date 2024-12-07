const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
}, { timestamps: true });

const Form = mongoose.model('Form', formSchema);

module.exports = Form;