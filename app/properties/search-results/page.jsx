import Link from "next/link";
import PropertyCard from "@/components/PropertyCard";
import PropertySearchForm from "@/components/PropertySearchForm";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import { convertToSerializableObject } from "@/utils/convertToObject";
export const dynamic = "force-dynamic";
const SearchResultsPage = async ({ searchParams: { location, propertyType } }) => {
    await connectDB();

    const locationPattern = new RegExp(location, 'i');

    let query = {
        $or: [
            { name: locationPattern },
            { description: locationPattern },
            { 'location.street': locationPattern },
            { 'location.city': locationPattern },
            { 'location.state': locationPattern },
            { 'location.zipCode': locationPattern },
        ]
    };

    if (propertyType && propertyType !== 'All') { 
        const typePattern = new RegExp(propertyType, 'i');
        query.type = typePattern;
    }
    const propertiesQueryResults = await Property.find(query).lean();
    const properties = convertToSerializableObject(propertiesQueryResults);
    return (<>
        <section className="py-4 bg-blue-700">
            <div className="flex flex-col items-start px-4 mx-auto max-width-7xl sm:px-6 lg:px-8">
                <PropertySearchForm />
            </div>
        </section>
        <section className="px-4 py-6">
            <div className="px-4 py-6 m-auto container-xl lg:container">
                <Link href="/properties" className="flex items-center mb-3 text-blue-500 hover:underline">
                    <FaArrowAltCircleLeft className="mb-1 mr-2" />
                    Back to All Properties
                </Link>
                <h1 className="mb-4 text-2xl">Search Results</h1>
                {properties.length === 0 ? (<p>No Search Results</p>) : (
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {properties.map((property) => (
                            <PropertyCard key={property._id} property={property} />
                        ))}
                    </div>
                ) }
            </div>
        </section>
    </>);
}
 
export default SearchResultsPage;