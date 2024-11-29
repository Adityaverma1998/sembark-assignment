import React from "react";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
    id: number;
    name: string;
    imageURL: string;
    price: number;
}

const ProductCard = (props: ProductCardProps) => {
    const { id, name, imageURL, price } = props;
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/product/${id}`);
    };

    return (
        <div
            onClick={handleCardClick}
            className=" overflow-hidden rounded-lg shadow-md bg-white w-[300px] cursor-pointer hover:shadow-lg transition flex flex-col"
            data-testid={`product-card-${id}`}
        >
            <div className="relative w-full h-48 sm:h-64 md:h-72 lg:h-80">
                <img
                    src={imageURL}
                    alt={name}
                    className="w-full h-full object-cover rounded-t-lg transition-transform transform hover:scale-110"
                    data-testid={`product-image-${id}`}
                />
            </div>

            <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                    <h2 className="text-lg font-semibold text-gray-800" data-testid={`product-name-${id}`}>
                        {name}
                    </h2>
                    <p className="mt-2 text-gray-600" data-testid={`product-price-${id}`}>
                        ${price}
                    </p>
                </div>

                {/* Button */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/product/${id}`);
                    }}
                    className="mt-4 w-full py-2 rounded-xl bg-amber-400 text-black flex justify-center items-center hover:bg-amber-500 transition"
                    data-testid={`view-details-button-${id}`}
                >
                    View Details
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
