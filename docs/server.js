const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const User = require('./models/user');

const app = express();

mongoose.connect('mongodb://localhost:27017/nodejs-auth', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

app.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = new User({ username, email, password });
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
        const user = await User.findOne({ username, password });
        if (user) {
            res.sendFile(path.join(__dirname, 'public', 'welcome.html'));
        } else {
            res.status(401).send('Invalid credentials');
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Login error: ' + error.message);
    }
});

// Добавляем новый маршрут для выхода пользователя
app.get('/logout', (req, res) => {
    // Удаление сессии или другая логика выхода пользователя
    res.redirect('/');
});


app.listen(3005, () => {
    console.log('Server is running on port 3005');
});