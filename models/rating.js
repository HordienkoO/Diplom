const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    animeTitle: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 }
});

const Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;