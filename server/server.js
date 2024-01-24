const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001; // Choose a port for your server
const MongoClient = require("mongodb").MongoClient;

app.use(cors())
app.use(express.json());

const url = "mongodb://localhost:27017";
const dbName = "[MyFlixDB]"; // Replace with your actual database name

app.get("/movies", async (req, res) => {
    let client; // Declare the client variable outside the try block
    try {
        client = new MongoClient(url, { useUnifiedTopology: true });
        await client.connect();
        const db = client.db(dbName);
        const movies = await db.collection("movies").find({}).toArray();
        res.json(movies);
    } catch (error) {
        console.error("Error fetching movies:", error);
        res.status(500).send("Internal Server Error");
    } finally {
        if (client) {
            await client.close();
        }
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
