const ProductDetailsPageShimmer = () => {
    return (
        <div className="overflow-hidden rounded-lg shadow-md bg-white flex space-x-4 p-4 animate-pulse gap-4">
            {/* Image Skeleton */}
            <div className="w-[495px] h-[629px] bg-gray-300 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300"></div>
            </div>

            <div className="w-1/3 h-auto h-full   self-center space-y-6">
                {/* Title Skeleton */}
                <div className="h-8 bg-gray-300 rounded w-3/4"></div>

                <div className="h-6 bg-gray-300 rounded w-1/3"></div>

                <div className="space-y-4">
                    <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                </div>

                <div className="h-12 bg-gray-300 rounded w-full"></div>
            </div>
        </div>
    );
};

export default ProductDetailsPageShimmer;
