const express = require("express");
const cors = require("cors");
const contactsRouter = require("./app/routers/contact.route");
const ApiError = require("./app/api-error");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/contacts", contactsRouter);
app.use((req, res, next) => {
    return next(new ApiError(404, "Resource not found"));
});
app.use((err, req, res, next) => {
    return res.status(error.stautsCode || 500).json({
        message: error.message || "Internal Server Error",
    });
});
app.get("/", (req, res) => {
    res.json({ message: "Welcome to contact book appilication."});
});

module.exports = app;