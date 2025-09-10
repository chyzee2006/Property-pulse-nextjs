import PropertyCard from "@/components/PropertyCard";
import connectDB from "@/config/database";
import User from "@/models/User";
import { getSessionUser } from "@/utils/getSessionUser";
import Link from "next/link";
import { FaArrowAltCircleLeft } from "react-icons/fa";


const SavedPropertiesPage = async () => {
    const { userId } = await getSessionUser();
    
    const { bookmarks } = await User.findById(userId).populate('bookmarks');
    

    return (<section className="px-4py-6">
        <div className="container px-4 py-6 m-auto lg:container">
            <h1 className="mb-4 text-2xl">Saved Properties</h1>
            {bookmarks.length === 0 ? (<p className="mb-6">No saved properties found.</p>) : (
                <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-3">
                    {bookmarks.map((property) => (
                        <PropertyCard key={property._id} property={property} />
                    ))}
                </div>
            )}
             <Link
            href="/properties"
            className="flex items-center text-blue-500 hover:text-blue-600"
          >
            <FaArrowAltCircleLeft className="mr-2" /> Back to Properties
          </Link>
        </div>
    </section> );
}
 
export default SavedPropertiesPage;