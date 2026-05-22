
export default function Loading() {
    return (

        <div className="flex min-h-[50vh] w-full  items-center justify-center p-8">
            <div className="flex flex-col items-center gap-4"></div>

            {/* spinner */}
            <div className="relative  h-12 w-12">
                <div className="absolute h-full w-full rounded-full border-4 border-gray-200 opacity-25"></div>
                <div className="absolute h-full w-full animate-spin rounded-full border-4 border-blue-500 border-t-transparent shadow-lg"></div>
            </div>

            {/* Loading Text */}

            <div className="animate-pulse text-lg font-medium text-gray-700">
                Loading...
            </div>

        </div>

    );
} 