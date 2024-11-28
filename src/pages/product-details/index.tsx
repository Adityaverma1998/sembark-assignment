import PageLayout from "../../components/page-layout";
import React, { useEffect, useState } from "react";
import { Product } from "../../interface";
import { useApiCall } from "../../custom-hooks/api-call-hook";
import Breadcrumb from "../../components/breadcrumb";
import { useParams } from "react-router-dom";
import ProductDetailsPageShimmer from "../../components/product-loader/product-detail-page-loader"; // To fetch the dynamic product id from the URL

const ProductDetails = () => {
    const { id } = useParams();
    const [productDetails, setProductDetails] = useState<Product | undefined>(undefined);

    const { data, loading, error, callApi } = useApiCall();

    const { productId } = useParams(); // Get the dynamic product ID from the URL

    const fetchProduct = () => {
        callApi({ method: 'GET', url: `https://fakestoreapi.com/products/${id}` });
    };

    useEffect(() => {
        if (data) {
            setProductDetails(data);
        }
    }, [data]);

    useEffect(() => {
        fetchProduct();
    }, [productId]);

    // Create breadcrumb dynamically with the product title
    const breadcrumbItems = [
        { name: 'Home', link: '/' },
        {
            name: productDetails?.title || 'Loading...', // Dynamically set product title
            link: `/product/${productId}`, // Dynamic link based on the product ID
        },
    ];

    return (
        <PageLayout>
            <h2 className={'py-4 flex justify-center items-center text-2xl font-extrabold'}>Product details page</h2>
           <div className={''}>
               <Breadcrumb items={breadcrumbItems}/>
           </div>


            {loading ? (
                <ProductDetailsPageShimmer/>
            ) : error ? (
                <p>Error loading product details.</p>
            ) : (
                productDetails && (
                    <div className={'flex flex-wrap gap-10 pt-4'}>
                        <div className={'w-1/3'}>
                            <img src={productDetails.image} alt={productDetails.title}/>
                        </div>
                        <div className={'w-1/3 flex flex-col items-start justify-center gap-3 '}>
                            <p className={'text-sm font-bold'}><span className={'text-xl font-medium'}>Category</span> : {productDetails.category}</p>
                            <p className={'text-sm font-bold'}><span className={'text-xl font-medium'}>Name</span> : {productDetails.title}
                            </p>
                            <p className={'text-sm font-bold'}><span className={'text-xl font-medium'}>Price</span> : ${productDetails.price}
                            </p>
                            <p className={'text-sm font-bold'}><span className={'text-xl font-medium'}>Description</span> : {productDetails.description}
                            </p>
                            <button
                                onClick={(e) => {

                                }}
                                className="mt-4 w-full py-2 rounded-xl bg-amber-400 text-black flex justify-center items-center hover:bg-amber-500 transition"
                                data-testid={`view-details-button-${id}`}
                            >
                                Add To Cart
                            </button>

                        </div>

                    </div>
                )
            )}
        </PageLayout>
    );
};

export default ProductDetails;
