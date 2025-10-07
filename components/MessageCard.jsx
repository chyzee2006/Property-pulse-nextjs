'use client'
import { useState } from "react";
import { toast } from "react-toastify";
import markMessageAsRead from "@/app/actions/markMessageAsRead";
import deleteMessage from "@/app/actions/deleteMessage";
import { useGlobalContext } from "@/context/GlobalContext";
const MessageCard = ({ message }) => {
    const [isRead, setIsRead] = useState(message.read);

    const [isDeleted, setIsDeleted] = useState(false);

    const { setUnreadCount } = useGlobalContext();

    const handleReadClick = async () => { 
        const read = await markMessageAsRead(message._id);
        setIsRead(read);
        setUnreadCount((prevCount) => (read ? prevCount - 1 : prevCount + 1));
        toast.success(`Message marked As ${read ? 'read' : 'new'}`);
    }
    const handleDeleteClick = async () => { 
        await deleteMessage(message._id);
        setIsDeleted(true);
        setUnreadCount((prevCount) => (isRead ? prevCount : prevCount - 1));
        toast.success("Message deleted");
    }
    if (isDeleted) return <p>Message deleted</p>;

    
    return (<div className="relative p-4 bg-white border border-gray-200 rounded-md shadow-md">
        { !isRead && (<div className="absolute px-2 py-1 text-white bg-yellow-500 rounded-md top-2 right-2 ">New</div>) }
        <h2 className="mb-4 text-xl">
            <span className="font-bold">Property Inquiry:</span>{' '}
            { message.property.name }
        </h2>
        <p className="text-gray-700">{message.body}</p>
        <ul className="mt-4">
            <li>
                <strong>Reply Email:</strong> {' '}
                <a href={`mailto:${message.email}`} className="text-blue-500">{ message.email }</a>
            </li>
            <li>
                <strong>Reply Phone:</strong> {' '}
                <a href={`tel:${message.phone}`} className="text-blue-500">{ message.phone }</a>
            </li>
            <li>
                <strong>Received:</strong> {' '}
                { new Date(message.createdAt).toLocaleString() }
            </li>
        </ul>
        <button onClick={handleReadClick} className="px-3 py-1 mt-4 mr-3 text-white bg-blue-500 rounded-md">
            {isRead ? 'Mark as New' : 'Mark as Read'}
        </button>
        <button onClick={handleDeleteClick} className="px-3 py-1 mt-4 text-white bg-red-500 rounded-md">
            Delete
        </button>
    </div> );
}
 
export default MessageCard;