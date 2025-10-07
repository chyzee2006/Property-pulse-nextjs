'use client'
import { useEffect } from "react";
import { useActionState } from "react";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import addMessage from "@/app/actions/addMessage";
import SubmitMessageButton from "./SubmitMessageButton";
const PropertyContactForm = ({ property }) => {
  const { data: session } = useSession();
  
  const [state, formAction] = useActionState(addMessage, {});

  useEffect(() => { 
    if (state.error) {
      toast.error(state.error);
    }
    if (state.submitted) {
      toast.success("Message sent successfully!");
    }
  }, [state]);
  
  if (state.submitted) {
    return (
      <p className="mb-4 text-green-500">
        Your message has been sent successfully.
      </p>
    )
  }
    
  return session && ( 
         <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-6 text-xl font-bold">Contact Property Manager</h3>
      <form action={formAction}>
        <input type="hidden" name="property" id="property" defaultValue={property._id} />
        <input type="hidden" name="recipient" id="recipient" defaultValue={property.owner} />
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="name"
                  >
                    Name:
                  </label>
                  <input
                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="email"
                  >
                    Email:
                  </label>
                  <input
                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="phone"
                  >
                    Phone:
                  </label>
                  <input
                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="body"
                  >
                    Message:
                  </label>
                  <textarea
                    className="w-full px-3 py-2 text-gray-700 border rounded shadow appearance-none h-44 focus:outline-none focus:shadow-outline"
                    id="body"
                    name="body"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <div>
                 <SubmitMessageButton />
                </div>
              </form>
            </div>
     );
}
 
export default PropertyContactForm;