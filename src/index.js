// require ('dotenv').config({path: './env'})
import 'dotenv/config';
import connectDB from "./db/index.js";
import dns from 'node:dns/promises';
import express from "express";

dns.setServers(['1.1.1.1', '8.8.8.8']);
const app = express(); // app Intialized 

// console.log("MONGODB_URI:", process.env.MONGODB_URI);


connectDB()
.then(() => {
    app.on("error", (error) => {
        console.log("ERRR: ", error);
        throw error
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})




// import express from "express";
// const app = ecpress()

// ( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}`/${DB_NAME})
//         app.on("error", () => {
//             console.log("ERRR:", error);
//             throw error
//         })
//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })

//     } catch (error) {
//         console.error("ERROR", error);
//         throw err
//     }
// }) ()