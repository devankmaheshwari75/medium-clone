import { format } from 'date-fns'; // Importing date-fns  

interface BlogCardProps {  
    authorName: string;  
    title: string;  
    content: string;  
    publishedDate: Date;  
}  

export const CardComponent = ({ authorName, title, content, publishedDate }: BlogCardProps) => {  

    

    // Format the publishedDate to a string  
    const formattedDate = format(publishedDate, 'dd MMMM yyyy'); // e.g., "21 September 2024"  

    return (  
        <div className="border-b border-slate-400 pb-4 p-7 cursor-pointer">  

            <div className="flex">  
                <div className="flex flex-col justify-center">  
                    <Avatar authorName={authorName} />  
                </div>  

                <div className="font-extralight pl-2">  
                    {authorName} .  
                </div>  

                <div className="pl-2 font-thin text-slate-400">  
                    {formattedDate} {/* Use formatted date here */}  
                </div>  
            </div>  

            <div className="text-2xl font-bold pt-2">  
                {title}  
            </div>  

            <div className="text-mf font-light pt-1">  
                {content.length > 100 ? content.slice(0, 150) + "..." : content}  
            </div>  

            <div className="text-mf font-normal pt-2">  
                {`${Math.ceil(content.length / 600)} minute(s) read`}  
            </div>  
        </div>  
    );  
}  

 function Avatar({ authorName }: { authorName: string }) {  
    // Ensure authorName has at least one character to prevent accessing undefined[0]  
    const displayName = authorName && authorName.length > 0 ? authorName[0] : "D"; // Default character if authorName is empty  
    return (  
        <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">  
            <span className="font-medium text-gray-600 dark:text-gray-300">{displayName}</span>  
        </div>  
    );  
}