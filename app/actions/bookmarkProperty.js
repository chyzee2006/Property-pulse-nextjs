'use server'
import connectDB from "@/config/database"
import User from "@/models/User"
import { getSessionUser } from "@/utils/getSessionUser"
import { revalidatePath } from "next/cache"

async function bookmarkProperty(propertyId) { 
    await connectDB();

    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
        throw new Error("User ID required");
    }
    const { userId } = sessionUser;

    const user = await User.findById(userId);

    let isBookmarked = user.bookmarks.includes(propertyId);

    let message;

    if (isBookmarked) {
        // if already boookmarked, then remove 
        user.bookmarks.pull(propertyId);
        message = "Bookmark removed successfully";
        isBookmarked = false;
    } else {
        // if not bookmarked, then add
        user.bookmarks.push(propertyId);
        message = "Property bookmarked successfully";
        isBookmarked = true;
    }
    await user.save();
    revalidatePath(`/properties/saved, 'page'`);

    return { message, isBookmarked };

}
export default bookmarkProperty