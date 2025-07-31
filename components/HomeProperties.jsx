import properties from '@/properties.json';
import PropertyCard from '@/components/PropertyCard';
import Link from 'next/link';
const HomeProperties = () => {
    const recentProperties = properties.slice(0, 3);
    return ( 
        <>
         <section className='px-4 py-6'>
            <div className='px-4 py-6 m-auto container-xl lg:container'>
                <h2 className="text-3xl font-bold text-blue-500 mb-6-text-center">Recent Properties</h2>
                {properties.length === 0 ? (<p>No properties found</p>) : (
                    <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
                        {
                            recentProperties.map((property, index) => (
                               <PropertyCard key={property._id} property={property} />
                            )
                        )}
                    </div>
                ) }
            </div>
            </section>
            <section className='max-w-lg px-6 m-auto my-6'>
                <Link href='/properties' className='block px-6 py-4 text-center text-white bg-black rounded-xl hover:bg-gray-700'>
                        View All Properties
                </Link>
            </section>
            </>
     );
}
 
export default HomeProperties;