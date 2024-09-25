export function Avatar({ authorName }: { authorName: string }) {


    const displayName = authorName && authorName.length > 0 ? authorName[0] : "D";
    return (
        <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">


            <span className="font-medium text-gray-600 dark:text-gray-300">{displayName}</span>
        </div>
    );
}