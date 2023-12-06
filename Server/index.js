const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require("cors");

const app = express();

const feedbackSchema = new mongoose.Schema({
    userName: String,
    rating: Number,
    features: [String],
    productCategory: String,
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

// Middleware to parse JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.post('/submit', async (req, res) => {
    const { userName, rating, features, productCategory } = req.body;

    const newFeedback = new Feedback({
        userName,
        rating,
        features,
        productCategory,
    });

    try {
        const savedFeedback = await newFeedback.save();
        console.log('Feedback saved to the database:', savedFeedback);
        res.status(200).json({ message: 'Feedback submitted successfully!' });
    } catch (error) {
        console.error('Error in feedback', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

app.listen(3000, () => {
    mongoose.connect('mongodb+srv://dheemanth:frX2CBne9GVcq8pH@cluster0.6mue2db.mongodb.net/your_database_name?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log(`DB connection done server running:${3000}`))
    .catch((error) => console.error(error))
});
