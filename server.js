const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// ✅ Middleware (comes first)
app.use(bodyParser.json());
app.use(express.static(__dirname));

// ✅ Dummy database
let books = [];

// ✅ Root route
app.get('/', (req, res) => {
    res.send('Welcome to Book API 🚀');
});


// ==========================
// 🔥 STEP 4: ADD HERE
// ==========================

// GET all books
app.get('/books', (req, res) => {
    res.json(books);
});

// POST new book
app.post('/books', (req, res) => {
    const { title, author } = req.body;

    if (!title || !author) {
        return res.status(400).json({ message: "Title and author required" });
    }

    const newBook = {
        id: books.length + 1,
        title,
        author
    };

    books.push(newBook);

    res.status(201).json({
        message: "Book added successfully",
        book: newBook
    });
});
// DELETE book
app.delete('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const index = books.findIndex(book => book.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Book not found" });
    }

    books.splice(index, 1);

    res.json({ message: "Book deleted successfully" });
});


// ==========================
// 🚀 START SERVER (LAST)
// ==========================
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});