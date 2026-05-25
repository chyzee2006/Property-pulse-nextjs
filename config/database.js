import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.set("strictQuery", true);

    // If the database is already connected or connecting, don't connect again
    if (mongoose.connection.readyState === 1) {
        console.log("Database is already connected");
        return;
    }
    if (mongoose.connection.readyState === 2) {
        console.log("Database is connecting...");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
};
 export default connectDB;