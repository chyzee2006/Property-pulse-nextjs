import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email already exists"],
    },
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: [true, "Username already exists"],
    },
    image: {
        type: String,
    },
    bookmarks: [{
        type: Schema.Types.ObjectId,
        ref: "Property",
    }]
}, {
    timestamps: true,
});

const User = models.User || model("User", UserSchema);

export default User;

// Note: The User model is used to manage user data, including email, username, image, and bookmarks. 
// It ensures that emails and usernames are unique and required. Bookmarks are stored as references to Property documents.