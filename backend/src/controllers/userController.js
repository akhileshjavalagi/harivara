const express = require('express');

const router = express.Router();

const User = require('../models/userModels.js');

router.get('/:id', async (req, res) => {
    try {
        const users = await User.findById(req.params.id).lean().exec();
        return res.send(users);
    } catch (err) {
        return res.status(500).send(err.message);
    }
});

router.get('', async (req, res) => {
    try {
        let { page, length } = req.query
        if (!page) {
            page = 1;
        }
        if (!length) {
            length = 5;
        }

        const users = await User.find().skip((page - 1) * length).limit(length).lean().exec();
        return res.send({ page, length, data: users });
    } catch (err) {
        return res.status(500).send(err.message);
    }
});


router.post('', async (req, res) => {
    try {
        const users = await User.create(req.body);
        return res.status(800).send(users);
    } catch (err) {
        return res.send(err.message);
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const users = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(201).send(users);
    } catch (err) {
        return res.send(err.message);
    }
});

module.exports = router;
