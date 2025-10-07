import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";
const SubmitMessageButton = () => {
    const { pending } = useFormStatus();
    return ( 
         <button
                    className="flex items-center justify-center w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline"
            type="submit"
                    disabled={pending}
                  >
                   <FaPaperPlane className="mr-2" /> {pending ? "Sending..." : "Send Message"}
                  </button>
     );
}
 
export default SubmitMessageButton;