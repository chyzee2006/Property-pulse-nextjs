import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
    mongoose.set("strictQuery", true);

    // if the database is already connected, don't connect again
    if (connected) {
        console.log("Database is connected");
        return;
    }
    // if the database is not connected, connect to it
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        connected = true;
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
};
 export default connectDB;