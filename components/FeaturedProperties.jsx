import connectDB from "@/config/database";
import Property from "@/models/Property";
import FeaturedPropertyCard from "./FeaturedPropertyCard";
const FeaturedProperties = async () => {
    await connectDB();

    const properties = await Property.find({ is_featured: true }).lean();

    return properties.length > 0 ? (
        <section className="px-4 pt-6 pb-10 bg-blue-50">
            <div className="m-auto container-xl lg:container">
                <h2 className="mb-6 text-3xl font-bold text-center text-blue-500">Featured Properties</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {properties.map((property) => (
                        <FeaturedPropertyCard key={property._id} property={property} />
                    ))}
                </div>
            </div>
    </section>
    ) : null;
}
 
export default FeaturedProperties;