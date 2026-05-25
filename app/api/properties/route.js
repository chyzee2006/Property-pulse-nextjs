import connectDB from "@/config/database";
import Property from "@/models/Property";
export const GET = async () => {
    try {
        await connectDB();
        const properties = await Property.find({});

        return Response.json(properties, { status: 200 });
    } catch (error) {
        console.error("Error in GET properties API:", error);
        return new Response("Failed to fetch properties.", { status: 500 });
    }
};