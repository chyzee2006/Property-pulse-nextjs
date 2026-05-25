import connectDB from "@/config/database";
import Property from "@/models/Property";
import mongoose from "mongoose";

export const GET = async (request, { params }) => {
    try {
        await connectDB();
        const { id } = await params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return new Response("Invalid Property ID", { status: 400 });
        }

        const property = await Property.findById(id);
        if (!property) {
            return new Response("Property not found", { status: 404 });
        }

        return Response.json(property, { status: 200 });
    } catch (error) {
        console.error("Error in GET property by ID API:", error);
        return new Response("Failed to fetch property.", { status: 500 });
    }
};