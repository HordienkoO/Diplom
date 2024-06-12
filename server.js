const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const User = require('./models/user');
const Rating = require('./models/rating');
const Comment = require('./models/comment');
const News = require('./models/news');
require('dotenv').config();

const app = express();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Для обробки JSON запитів
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

app.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({ username, email, password: hashedPassword });
        await user.save();
        res.redirect('/login');
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Помилка реєстрації: ' + error.message);
    }
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(400).send('Користувач не знайдений');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).send('Недійсні облікові дані');
        }

        req.session.user = { id: user._id, username: user.username };
        res.redirect('/');
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Помилка входу: ' + error.message);
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

app.get('/user', (req, res) => {
    if (req.session.user) {
        res.json({ username: req.session.user.username });
    } else {
        res.status(401).json({ message: 'Не ввійшли в систему' });
    }
});

// Додати нову оцінку
app.post('/rate', async (req, res) => {
    if (!req.session.user) {
        return res.status(401).send('Необхідно увійти до системи для оцінювання');
    }

    const { animeTitle, rating } = req.body;
    const userId = req.session.user.id;

    try {
        // Перевірити чи існує оцінка від цього користувача для цього аніме
        const existingRating = await Rating.findOne({ userId, animeTitle });

        if (existingRating) {
            // Оновити існуючу оцінку
            existingRating.rating = rating;
            await existingRating.save();
        } else {
            // Створити нову оцінку
            const newRating = new Rating({ userId, animeTitle, rating });
            await newRating.save();
        }

        res.status(200).send('Оцінка збережена');
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Помилка збереження оцінки: ' + error.message);
    }
});

// Отримати середню оцінку для аніме
app.get('/ratings/:animeTitle', async (req, res) => {
    const { animeTitle } = req.params;

    try {
        const ratings = await Rating.find({ animeTitle });
        const averageRating = ratings.reduce((acc, rating) => acc + rating.rating, 0) / ratings.length || 0;

        res.json({ averageRating });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Помилка отримання оцінок: ' + error.message);
    }
});

app.post('/comments', async (req, res) => {
    if (!req.session.user) {
        return res.status(401).send('Необхідно увійти до системи для коментування');
    }

    const { animeTitle, content } = req.body;
    const userId = req.session.user.id;

    try {
        const newComment = new Comment({ userId, animeTitle, content });
        await newComment.save();
        res.status(200).send('Коментар додано');
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Помилка додавання коментаря: ' + error.message);
    }
});

// Отримати коментарі для аніме
app.get('/comments/:animeTitle', async (req, res) => {
    const { animeTitle } = req.params;

    try {
        const comments = await Comment.find({ animeTitle }).populate('userId', 'username');
        res.json(comments);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Помилка отримання коментарів: ' + error.message);
    }
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Маршрут для отримання новин
app.get('/news', async (req, res) => {
    try {
        const news = await News.find().sort({ createdAt: -1 });
        res.json(news);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Помилка отримання новин: ' + error.message);
    }
});

// Маршрут для додавання новин
app.post('/news', upload.single('image'), async (req, res) => {
    if (!req.session.user || req.session.user.username !== 'admin') {
        return res.status(401).send('Тільки адміністратори можуть додавати новини');
    }

    const { title, content } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    try {
        const news = new News({ title, content, imageUrl });
        await news.save();
        res.status(200).send('Новина додана');
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Помилка додавання новини: ' + error.message);
    }
});

const PORT = process.env.PORT || 4441;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;