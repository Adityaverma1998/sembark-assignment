import React, {useContext, useEffect, useState} from "react";
import { useApiCall } from "../../custom-hooks/api-call-hook";
import {CartContext} from "../../context";

export interface Category {
    id: string;
    name: string;
}

type SelectedCategory = string | null;

interface CategoryFilterProps {
    multipleCategory: Category[];
    setMultipleCategory: (newUrl: Category[]) => void;
}

const CategoryFilter = (props: CategoryFilterProps) => {
    const { multipleCategory, setMultipleCategory } = props;
    const { isSortOpen, setIsSortOpen ,isFilterOpen,setIsFilterOpen} = useContext(CartContext);

    const [isExpanded, setIsExpanded] = useState(false);
    const [category, setCategory] = useState<Category[] | undefined>(undefined);
    const { data, loading, error, callApi } = useApiCall();


    const fetchCategories = () => {
        callApi({ method: "GET", url: "https://fakestoreapi.com/products/categories" });
    };



    useEffect(() => {
        fetchCategories();
    }, []);

    useEffect(() => {
        if (data && Array.isArray(data)) {
            const cate: string[] = data;
            const modifyData: Category[] = cate.map((category, index) => ({
                name: category,
                id: category, // Use category name as the id
            }));

            setCategory(modifyData);
        }
    }, [data]);



    const toggleExpand = () => {
        console.log('check toggle handel ',isFilterOpen)
        if(isSortOpen){
            setIsSortOpen(false)
        }
        setIsFilterOpen(!isFilterOpen);
    };

    return (
        <div className="flex items-center">
            <div className="relative inline-block text-left">
                <div>
                    <button
                        type="button"
                        className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                        id="menu-button"
                        aria-expanded={isFilterOpen ? "true" : "false"}
                        aria-haspopup="true"
                        onClick={toggleExpand}
                    >
                        Filter
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

                {isFilterOpen && category && (
                    <div
                        className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                    >
                        <div className="py-1" role="none">
                            {category.map((categoryItem) => (
                                <label
                                    key={categoryItem.id}
                                    className="block px-4 py-2 text-sm text-gray-900"
                                >
                                    <input
                                        type="checkbox"
                                        name={`${categoryItem}`}
                                        checked={Boolean(multipleCategory.find((category)=>category ===categoryItem)) }
                                        onChange={(event) =>{
                                            !event.target.checked ? setMultipleCategory(multipleCategory.filter((item)=> item !==categoryItem)):setMultipleCategory([...multipleCategory,categoryItem])
                                        }}
                                        className="mr-2"
                                    />
                                    {categoryItem.name}
                                </label>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
            >
                <span className="sr-only">Filters</span>
                <svg
                    className="size-5"
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    data-slot="icon"
                >
                    <path
                        fillRule="evenodd"
                        d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 0 1 .628.74v2.288a2.25 2.25 0 0 1-.659 1.59l-4.682 4.683a2.25 2.25 0 0 0-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 0 1 8 18.25v-5.757a2.25 2.25 0 0 0-.659-1.591L2.659 6.22A2.25 2.25 0 0 1 2 4.629V2.34a.75.75 0 0 1 .628-.74Z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
        </div>
    );
};

export default CategoryFilter;
