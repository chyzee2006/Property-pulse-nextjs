import Image from "next/image";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";
import profileDefault from "@/assets/images/profile.png";
import ProfileProperties from "@/components/ProfileProperties";
import { convertToSerializableObject } from "@/utils/convertToObject";


const ProfilePage = async () => {
  await connectDB();

  const sessionUser = await getSessionUser();

  const { userId } = sessionUser;
  if (!userId) {
    throw new Error("User ID is required");
  }
    
    const propertiesDocs = await Property.find({ owner: userId }).lean();
    const properties = propertiesDocs.map(convertToSerializableObject);


    
  return (
    <section className="bg-blue-50">
      <div className="container py-24 m-auto">
        <div className="px-6 py-8 m-4 mb-4 bg-white rounded-md shadow-md md:m-0">
          <h1 className="mb-4 text-3xl font-bold">Your Profile</h1>
          <div className="flex flex-col md:flex-row">
            <div className="mx-20 mt-10 md:w-1/4">
              <div className="mb-4">
                <Image
                  className="w-32 h-32 mx-auto rounded-full md:h-48 md:w-48 md:mx-0"
                  src={sessionUser.user.image || profileDefault}
                  width={200}
                  height={200}
                  alt="User"
                />
              </div>

              <h2 className="mb-4 text-2xl">
                <span className="block font-bold">Name: </span>{" "}
                {sessionUser.user.name}
              </h2>
              <h2 className="text-2xl">
                <span className="block font-bold">Email: </span>{" "}
                {sessionUser.user.email}
              </h2>
            </div>

            <div className="md:w-3/4 md:pl-4">
                          <h2 className="mb-4 text-xl font-semibold">Your Listings</h2>
                          <ProfileProperties properties={properties} />
                          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
