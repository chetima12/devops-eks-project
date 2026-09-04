const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to the Node.js EKS DevOps Project",
        version: "1.0.0"
    });
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy"
    });
});

app.get("/api/users", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Chetima"
        },
        {
            id: 2,
            name: "DevOps Engineer"
        }
    ]);
});

module.exports = app;
