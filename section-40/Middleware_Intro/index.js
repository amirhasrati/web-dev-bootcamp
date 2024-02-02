const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("tiny"));

app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
});

app.use("/dogs", (req, res, next) => {
    console.log("I LOVE DOGS");
    next();
});

// app.use((req, res, next) => {
//     console.log("This is my first middleware!");
//     return next();
//     console.log("This is my first middleware - after calling next");
// });
// app.use((req, res, next) => {
//     console.log("This is my second middleware!");
//     return next();
// });
// app.use((req, res, next) => {
//     console.log("This is my third middleware!");
//     return next();
// });

app.get("/", (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`);
    res.send("HOME PAGE!");
});

app.get("/dogs", (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`);
    res.send("WOOF WOOF!");
});

app.use((req, res) => {
    res.status(404).send("NOT FOUND!");
});

app.listen(3000, () => {
    console.log("App is running on localhost:3000");
});
