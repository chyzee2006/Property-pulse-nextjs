'use client';
import { useState } from 'react';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import deleteProperty from '@/app/actions/deleteProperty';
import { toast } from 'react-toastify';
const ProfileProperties = ({ properties: initialProperties }) => {
    const [properties, setProperties] = useState(initialProperties);
    const handleDeleteProperty = async (propertyId) => {
        const confirmed = window.confirm("Are you sure you want to delete this property?");
        if (!confirmed) return;
        
        await deleteProperty(propertyId);
        // update state to remove deleted property
        const updatedProperties = properties.filter((property) => property._id !== propertyId);
        setProperties(updatedProperties);

        toast.success("Property deleted successfully");
    };
    return properties.map((property) => (
        <div key={property._id} className="mb-10">
                        <Link href={`/properties/${property._id}`}>
                          <Image
                            className="object-cover w-full h-32 rounded-md"
                            src={ property.images[0] }
                            width={200}
                            height={200}
                            alt=" Property Image"
                          />
                        </Link>
                        <div className="mt-2">
                <p className="text-lg font-semibold">{ property.name }</p>
                <p className="text-gray-600">Address: {property.location.street} {property.location.city} { property.location.state }</p>
                        </div>
                        <div className="mt-2">
                          <Link
                            href={`/properties/${property._id}/edit`}         
                            className="px-3 py-3 mr-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                          >
                            Edit
                          </Link>
                          <button
                            className="px-3 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
                    type="button"
                    onClick={ () => handleDeleteProperty(property._id) }
                          >
                            Delete
                          </button>
                        </div>
                      </div>
        
    ));
}
 
export default ProfileProperties;