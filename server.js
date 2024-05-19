const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const bcrypt = require('bcryptjs');
const User = require('./models/user');
require('dotenv').config();

const app = express();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: true }));
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
        const hashedPassword = await bcrypt.hash(password, 10);  // Хешуємо пароль

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

        const isPasswordValid = await bcrypt.compare(password, user.password);  // Порівнюємо пароль

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

const PORT = process.env.PORT || 1010;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});