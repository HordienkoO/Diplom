const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const bcrypt = require('bcrypt');
const User = require('./models/user');

const app = express();
mongoose.connect('mongodb+srv://qwertywerribeeq:qwertywerribeeq@cluster0.yxzokh3.mongodb.net/nodejs-auth', { useNewUrlParser: true, useUnifiedTopology: true });
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

app.get('/getUsername', (req, res) => {
    if (req.session.username) {
        res.json({ username: req.session.username });
    } else {
        res.json({ username: '' });
    }
});

app.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10); // хеш пароля
        const user = new User({ username, email, password: hashedPassword });
        await user.save();
        res.redirect('/login');
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Registration error: ' + error.message);
    }
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (user) {
            const isPasswordValid = await bcrypt.compare(password, user.password); // Порівняти хеш
            if (isPasswordValid) {
                req.session.username = username;
                res.send(`<script>alert("Ви увійшли в систему! Дякуємо, ${username}"); window.location.href = "/";</script>`);
            } else {
                res.status(401).send(`<script>alert("Неправильні дані. Спробуйте ще!"); window.location.href = "/";</script>`);
            }
        } else {
            res.status(401).send(`<script>alert("Неправильні дані. Спробуйте ще!"); window.location.href = "/";</script>`);
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send(`<script>alert("Не вдалося! Помилка: "); window.location.href = "/";</script>` + error.message);
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

app.listen(1010, () => {
    console.log('Server is running on port 3005');
});