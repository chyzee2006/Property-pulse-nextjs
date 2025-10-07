import Link from "next/link";
const Pagination = ({ page, pageSize, totalItems }) => {
    const totalPages = Math.ceil(totalItems / pageSize);
    
    return (<section className="container flex items-center justify-center mx-auto my-8">
        {page > 1 ? (
        <Link href={`/properties?page=${page - 1}`} className="px-2 py-1 mr-2 border border-gray-300 rounded">
            Previous
        </Link>
        ) : null}
        
        <span className="mx-2">Page {page} of {totalPages}</span>
        
        {page < totalPages ? (
        <Link href={`/properties?page=${page + 1}`} className="px-2 py-1 ml-2 border border-gray-300 rounded">
            Next
            </Link>
            ) : null}
    </section> );
}
 
export default Pagination;