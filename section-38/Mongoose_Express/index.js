// Express Connection and path
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

const Product = require("./models/product");

// Mongoose Connection
mongoose
    .connect("mongodb://127.0.0.1:27017/farmStand")
    .then(() => {
        console.log("MONGO: Connection Open!");
    })
    .catch((err) => {
        console.log("MONGO: Oh No! Error!");
    });

// Views and view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/products", async (req, res) => {
    const products = await Product.find({});
    res.render("products/index", { products });
});

app.get("/products/new", (req, res) => {
    res.render("products/new");
});

app.post("/products", async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct.id}`);
});

app.get("/products/:id", async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render("products/show", { product });
});

// Port
app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000");
});
