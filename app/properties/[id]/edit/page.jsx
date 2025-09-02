import PropertyEditForm from "@/components/PropertyEditForm";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import { convertToSerializableObject } from "@/utils/convertToObject";
const PropertyEditPage = async ({ params }) => {
    await connectDB();

    const propertyDoc = await Property.findById(params.id).lean();
    const property = convertToSerializableObject(propertyDoc);

    if (!property) {
        return <h1 className="mt-10 text-2xl font-bold text-center">Property not found</h1>;
    }
    return (<section className="bg-blue-50">
        <div className="container max-w-2xl py-24 m-auto">
            <div className="px-6 py-8 m-4 mb-4 bg-white rounded-md shadow-md md:m-0">
                <PropertyEditForm property={property} />
            </div>
        </div>
    </section> );
}
 
export default PropertyEditPage;