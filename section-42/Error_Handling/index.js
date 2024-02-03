const express = require("express");
const app = express();
const morgan = require("morgan");
const AppError = require("./AppError");

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

const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === "chickennugget") {
        next();
    }
    throw new AppError("password required", 401);
    // res.send("SORRY YOU NEED A PASSWORD!");
    // throw new AppError("Password required", 401);
};

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

app.get("/error", (req, res) => {
    chicken.fly();
});

app.get("/dogs", (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`);
    res.send("WOOF WOOF!");
});

app.get("/secret", verifyPassword, (req, res) => {
    res.send("Sometimes I wear headphones so I don't have to talk to anyone");
});

app.get("/admin", (req, res) => {
    throw new AppError("You are not an Admin!", 403);
});

app.use((req, res) => {
    res.status(404).send("NOT FOUND!");
});

// app.use((err, req, res, next) => {
//     console.log("*************************************");
//     console.log("****************ERROR****************");
//     console.log("*************************************");
//     console.log(err);
//     next(err);
// });

app.use((err, req, res, next) => {
    const { status = 500, message = "Something Went Wrong" } = err;
    res.status(status).send(message);
});

app.listen(3000, () => {
    console.log("App is running on localhost:3000");
});
