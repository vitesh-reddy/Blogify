const express = require('express');
const Blog = require('../models/Blog');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Save or update a draft
router.post('/save-draft', authMiddleware, async (req, res) => {
    const { _id, title, content, tags } = req.body;
    try {
        let blog;
        if (_id) {
            blog = await Blog.findByIdAndUpdate(
                _id,
                { title, content, tags, status: 'draft', updated_at: Date.now() },
                { new: true }
            );
        } else {
            blog = new Blog({ title, content, tags, status: 'draft' });
            await blog.save();
        }
        res.json(blog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Publish a blog (update if exists, else create)
router.post('/publish', authMiddleware, async (req, res) => {
    const { _id, title, content, tags } = req.body;
    try {
        let blog;
        if (_id) {
            blog = await Blog.findByIdAndUpdate(
                _id,
                { title, content, tags, status: 'published', updated_at: Date.now() },
                { new: true }
            );
        } else {
            blog = new Blog({ title, content, tags, status: 'published' });
            await blog.save();
        }
        res.json(blog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all blogs
router.get('/', authMiddleware, async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get blog by ID
router.get('/:id', authMiddleware, async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) return res.status(404).json({ message: 'Blog not found' });
        res.json(blog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;