import connectDB from "@/config/database";
import Message from "@/models/Message";
import '@/models/Property';
import { convertToSerializableObject } from "@/utils/convertToObject";
import { getSessionUser } from "@/utils/getSessionUser";
import MessageCard from "@/components/MessageCard";


const MessagesPage = async () => {
    connectDB();

    const sessionUser = await getSessionUser();

    const { userId } = sessionUser;
    
    const readMessages = await Message.find({ recipient: userId, read: true })
        .sort({ createdAt: -1 })
        .populate('sender', 'username')
        .populate('property', 'name')
        .lean();
    
    const unreadMessages = await Message.find({ recipient: userId, read: false })
        .sort({ createdAt: -1 })
        .populate('sender', 'username')
        .populate('property', 'name')
        .lean();
    
    const messages = [...unreadMessages, ...readMessages].map((messageDoc) => { 
        const message = convertToSerializableObject(messageDoc);
        message.sender = convertToSerializableObject(messageDoc.sender);
        message.property = convertToSerializableObject(messageDoc.property);
        return message;
     });


    return (<section className="bg-blue-50">
        <div className="container max-w-6xl py-24 m-auto"><div className="px-6 py-8 m-4 mb-4 bg-white rounded-md shadow-md md:m-0">
            <h1 className="mb-4 text-3xl font-bold">Your Messages</h1>
            <div className="space-y-4">
                {messages.length === 0 ? (<p>You have no messages</p>) : (
                    messages.map((message) => (
                        <MessageCard key={message._id} message={message} />
                    ))
                )}
            </div>
        </div>
        </div>
    </section>);

};
 
export default MessagesPage;