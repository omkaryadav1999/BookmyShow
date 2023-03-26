const mogoose = require("mongoose");

// connection for registration.

mogoose.connect("mongodb://127.0.0.1:27017/resisterData", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connection done");
}).catch(() => {
    console.log("connection not done", error);
})
