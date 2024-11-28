const ProductDetailsPageShimmer = () => {
    return (
        <div className="max-w-xs mx-auto overflow-hidden rounded-lg shadow-md bg-white w-[300px] aspect-w-9 aspect-h-16">
            <div className="flex flex-wrap">
                {/* Image Skeleton */}
                <div className="relative w-full h-48 sm:h-64 md:h-72 lg:h-80 bg-gray-300 animate-pulse">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse"></div>
                </div>

                {/* Details Skeleton */}
                <div className="p-4 space-y-4">
                    {/* Title Skeleton */}
                    <div className="h-6 bg-gray-300 rounded w-3/4 animate-pulse"></div>

                    {/* Price Skeleton */}
                    <div className="h-4 bg-gray-300 rounded w-1/3 animate-pulse"></div>

                    {/* Description Skeleton */}
                    <div className="h-4 bg-gray-300 rounded w-2/3 animate-pulse"></div>
                    <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2 animate-pulse"></div>

                    {/* Add to Cart Button Skeleton */}
                    <div className="h-10 bg-gray-300 rounded w-full animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPageShimmer;
