import express from 'express';
import cors from "cors";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

let data = [{
    "id": 1,
    "title": "Java Programming",
    "author": "Herbert Schildt",
    "category": "Programming",
    "Quantity": 5,
    "available": 5
}];

app.listen(port, () => {
    console.log(`server is running at ${port}`);
});

app.post("/api/books", (req, res) => {
    try {

        let { id, title, author, category, Quantity, available } = req.body;

        let newEntry = {
            id,
            title,
            author,
            category,
            Quantity,
            available
        };

        data.push(newEntry);

        res.status(201).json({
            message: "Book added successfully",
            book: newEntry
        });

    } catch (error) {

        res.status(500).json({
            message: "Error adding book"
        });

    }
});