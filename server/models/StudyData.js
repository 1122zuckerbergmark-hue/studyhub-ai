const mongoose = require('mongoose');

const StudyDataSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    courses: [{ name: String, code: String, progress: Number }],
    assignments: [{ title: String, course: String, dueDate: Date, completed: { type: Boolean, default: false }, priority: String }],
    studySessions: [{ date: Date, duration: Number, subject: String }],
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('StudyData', StudyDataSchema);