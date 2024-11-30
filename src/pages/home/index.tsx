import Header from "../../components/header";
import PageLayout from "../../components/page-layout";
import { useApiCall } from "../../custom-hooks/api-call-hook";
import React, { useEffect, useState } from "react";
import { Product } from "../../interface";
import ProductCard from "../../components/product-card";
import CardShimmerLoader from "../../components/product-loader";
import CategoryFilter, {Category} from "../../components/filter-sorting /filter";
import ProductSort from "../../components/filter-sorting /sorting";

const HomePage = () => {
    // const [productUrl, setProductUrl] = useState('https://fakestoreapi.com/products');
    const { data, loading, error, callApi } = useApiCall();
    const [products, setProducts] = useState<Product[] | null>(null);
    const [multipleCategory,setMultipleCategory] = React.useState<Category[] >([])

    // Fetch data when productUrl changes
    useEffect(() => {



    }, []);

    const fetchProducts = async (productUrl:string) => {
        try {
            await callApi({ method: 'GET', url: productUrl });
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        if(multipleCategory.length>0){
            for(let i=0;i<multipleCategory.length;i++){
                fetchProducts(`https://fakestoreapi.com/products/category/${multipleCategory[i].name}`)


            }
        }else{
            fetchProducts(`https://fakestoreapi.com/products`);
        }
    }, [multipleCategory]);

    useEffect(() => {

        console.log('check data here ',data)
        if (data && Array.isArray(data)) {
            setProducts((prev)=>data);
        } else {
            setProducts([]);
        }
    }, [data]);

    return (
        <PageLayout>
            <h2 className={'py-4 flex justify-center items-center text-2xl font-extrabold'} data-testid={`home-page-tile`}>
                Products
            </h2>

            <div className={'flex items-center justify-end px-4 gap-4'}>
                <CategoryFilter  multipleCategory={multipleCategory} setMultipleCategory={setMultipleCategory} />
                {/*<ProductSort  setUrl={setProductUrl} url={productUrl}/>*/}
            </div>

            <div className="grid place-items-center items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {loading ? (
                    Array.from({ length: 10 }).map((_, index) => (
                        <CardShimmerLoader key={index} />
                    ))
                ) : (
                    products && products.length > 0 ? (
                        products.map((product: Product,index:number) => (
                            <ProductCard
                                key={index}
                                id={product.id}
                                imageURL={product.image}
                                name={product.title}
                                price={product.price}
                            />
                        ))
                    ) : (
                        <p>No products available</p>
                    )
                )}
            </div>
        </PageLayout>
    );
}

export default HomePage;
