import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import PropertyImages from "@/components/PropertyImages";
import PropertyDetails from "@/components/PropertyDetails";
import PropertyContactForm from "@/components/PropertyContactForm";
import BookmarkButton from "@/components/BookmarkButton";
import ShareButtons from "@/components/ShareButtons";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { convertToSerializableObject } from "@/utils/convertToObject";

const PropertyPage = async ({ params }) => {
  await connectDB();

  const { id } = await params;
  const propertyDoc = await Property.findById(id).lean();
  const property = convertToSerializableObject(propertyDoc);
  if (!property) {
    return <h1 className="mt-10 text-2xl font-bold text-center">Property not found</h1>;
  }
  return (
    <>
      <PropertyHeaderImage image={property.images[0]} />
      <section>
        <div className="container px-6 py-6 m-auto">
          <Link
            href="/properties"
            className="flex items-center text-blue-500 hover:text-blue-600"
          >
            <FaArrowLeft className="mr-2" /> Back to Properties
          </Link>
        </div>
      </section>
      <section className="bg-blue-50">
        <div className="container px-6 py-10 m-auto">
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-[70%_28%] ">
            <PropertyDetails property={property} />
            <aside className="space-y-4">
              <BookmarkButton property={property} />
              <ShareButtons property={property} />
              <PropertyContactForm property={property} />
            </aside>
          </div>
        </div>
      </section>
      <PropertyImages images={property.images} />
    </>
  );
};

export default PropertyPage;
