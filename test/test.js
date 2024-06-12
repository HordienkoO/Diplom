const request = require('supertest');
const assert = require('assert');
const mongoose = require('mongoose');
const app = require('../server');
const User = require('../models/user');
const Comment = require('../models/comment');
require('dotenv').config();

describe('User Registration, Login and Comments', () => {
    let initialUsers;

    before(async () => {
        await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        
        initialUsers = await User.find().lean();
    });

    beforeEach(async () => {
        await User.deleteMany({});
        await User.insertMany(initialUsers);
    });

    after(async () => {
        await mongoose.disconnect();
    });

    describe('POST /register', () => {
        it('сценарій реєстрації нового користувача', (done) => {
            request(app)
                .post('/register')
                .send({ username: 'testuser', email: 'testuser@example.com', password: 'password123' })
                .expect(302)
                .end((err, res) => {
                    if (err) return done(err);
                    assert.strictEqual(res.header['location'], '/login');
                    done();
                });
        });

        it('перевірка на коректність заборони реєстрації з вже існуючими даними користувача', (done) => {
            const user = new User({ username: 'testuser', email: 'testuser@example.com', password: 'password123' });
            user.save().then(() => {
                request(app)
                    .post('/register')
                    .send({ username: 'testuser', email: 'anotheruser@example.com', password: 'password123' })
                    .expect(500)
                    .end((err, res) => {
                        if (err) return done(err);
                        assert.ok(res.text.includes('Помилка реєстрації'));
                        done();
                    });
            });
        });
    });

    describe('POST /login', () => {
        it('перевірка заборони на вхід з недійсними обліковими даними', async () => {
            const res = await request(app)
                .post('/login')
                .send({ username: 'testuser', password: 'wrongpassword' });

            assert.equal(res.status, 400);
        });

        it('перевірка на вхід з дійсними обліковими даними', async () => {
            const res = await request(app)
                .post('/login')
                .send({ username: 'testuser', password: 'password123' });

            assert.equal(res.status, 400);
        });
    });

    describe('POST /comments', () => {
        it('перевірка на заборону додавання коментаря без входу в систему', async () => {
            const res = await request(app)
                .post('/comments')
                .send({ animeTitle: 'ТораДора', content: 'Відмінне аніме!' });

            assert.equal(res.status, 401);
            assert.equal(res.text, 'Необхідно увійти до системи для коментування');
        });


        it('перевірка на додавання коментаря з входом в систему', async () => {
            // Register and login the user first
            await request(app)
                .post('/register')
                .send({ username: 'testuser', email: 'testuser@example.com', password: 'password123' });

            const loginRes = await request(app)
                .post('/login')
                .send({ username: 'testuser', password: 'password123' });

            const cookie = loginRes.headers['set-cookie'];

            const commentRes = await request(app)
                .post('/comments')
                .set('Cookie', cookie)
                .send({ animeTitle: 'Вбивця Акаме!', content: 'Відмінне аніме!' });

            assert.strictEqual(commentRes.status, 200);
            assert.strictEqual(commentRes.text, 'Коментар додано');

            const comment = await Comment.findOne({ animeTitle: 'Вбивця Акаме!', content: 'Відмінне аніме!' });
            assert(comment);
            const user = await User.findOne({ username: 'testuser' });
            assert.strictEqual(comment.userId.toString(), user._id.toString());
        });
    });
});