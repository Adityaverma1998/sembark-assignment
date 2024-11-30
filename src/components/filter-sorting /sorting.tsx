import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context";

interface SortFilterProps {
    sort: string;
    setSort: (newUrl: string) => void;
}

const ProductSort = (props: SortFilterProps) => {
    const { sort, setSort } = props;
    const { sortOrder, setSortOrder } = useContext(CartContext);
    const [isExpanded, setIsExpanded] = useState(false);

    // useEffect(() => {
    //     const newUrl = `https://fakestoreapi.com/products?sort=${sortOrder}`;
    //     setUrl(newUrl);
    //     localStorage.setItem('sortOrder', sortOrder);
    // }, [sortOrder, setUrl]);

    const toggleExpand = () => {
        setIsExpanded((prev) => !prev);
    };

    const handleSortOrderChange = (order: string) => {
        setSort(order);
    };

    return (
        <div className="flex items-center">
            <div className="relative inline-block text-left">
                <div>
                    <button
                        type="button"
                        className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                        id="menu-button"
                        aria-expanded={isExpanded ? "true" : "false"}
                        aria-haspopup="true"
                        onClick={toggleExpand}
                    >
                        Sort
                        <svg
                            className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>

                {/* Conditional rendering of the dropdown menu based on isExpanded */}
                {isExpanded && (
                    <div
                        className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                    >
                        <div className="py-1" role="none">
                            {/* Radio buttons for ascending and descending order */}
                            <div className="px-4 py-2 text-sm text-gray-900">
                                <span className="block">Sort Order:</span>
                                <label className="block px-2 py-1">
                                    <input
                                        type="radio"
                                        name="sortOrder"
                                        value="asc"
                                        checked={sort === "asc"}
                                        onChange={() => handleSortOrderChange("asc")}
                                        className="mr-2"
                                    />
                                    Ascending
                                </label>

                                <label className="block px-2 py-1">
                                    <input
                                        type="radio"
                                        name="sortOrder"
                                        value="desc"
                                        checked={sort === "desc"}
                                        onChange={() => handleSortOrderChange("desc")}
                                        className="mr-2"
                                    />
                                    Descending
                                </label>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductSort;
