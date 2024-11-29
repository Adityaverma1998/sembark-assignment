import Header from "../../components/header";
import PageLayout from "../../components/page-layout";
import {useApiCall} from "../../custom-hooks/api-call-hook";
import {useEffect, useState} from "react";
import {Product} from "../../interface";
import ProductCard from "../../components/product-card";
import CardShimmerLoader from "../../components/product-loader";

const HomePage =()=>{
    const [products,setProducts] = useState<Product[] |undefined>(undefined)

    const { data, loading, error, callApi } = useApiCall();

    const fetchUsers = () => {
        callApi({ method: 'GET', url: 'https://fakestoreapi.com/products' });


    };



    useEffect(() => {
        if(data){
           setProducts(data)
        }
    }, [data]);

    useEffect(() => {
        (fetchUsers)()
    }, []);
    return(
        <PageLayout>


                <h2 className={'py-4 flex justify-center items-center text-2xl font-extrabold'}  data-testid={`home-page-tile`}>Products</h2>

            <div className="grid place-items-center items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {loading ? (
                            Array.from({ length: 10 }).map((_, index) => (
                            <CardShimmerLoader key={index} />
                        ))

                ) :



                    products && products.length > 0 && products.map((product, index) => {
                        return (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                imageURL={product.image}
                                name={product.title}
                                price={product.price}
                            />
                        );
                    })
                }
            </div>

        </PageLayout>
    )
}

export default HomePage;
