import { Schema, model, models } from "mongoose";

const MessageSchema = new Schema({
    sender: {
       type: Schema.Types.ObjectId,
       ref: "User",
       required: true,
   },
    recipient: {
       type: Schema.Types.ObjectId,
       ref: "User",
       required: true,
   },
    property: {
       type: Schema.Types.ObjectId,
       ref: "Property",
       required: true,
    },
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
    },
    phone: String,
    body: String,
    read: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});

const Message = models.Message || model("Message", MessageSchema);

export default Message;

// Note: The Message model is used to manage message data, including email, messagename, image, and bookmarks. 
// It ensures that emails and messagenames are unique and required. Bookmarks are stored as references to Property documents.