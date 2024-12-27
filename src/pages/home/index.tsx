import PageLayout from "../../components/page-layout";
import { useApiCall } from "../../custom-hooks/api-call-hook";
import React, { useEffect, useState } from "react";
import { Product } from "../../interface";
import ProductCard from "../../components/product-card";
import CardShimmerLoader from "../../components/product-loader";
import CategoryFilter, { Category } from "../../components/filter-sorting /filter";
import ProductSort from "../../components/filter-sorting /sorting";

const HomePage = () => {
  const { callApi } = useApiCall();
  const [products, setProducts] = useState<Product[] | null>(null);
  const [multipleCategory, setMultipleCategory] = useState<Category[]>([]);
  const [sort, setSort] = useState<string>("asc");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async (url: string) => {
    try {
      setLoading(true);
      setError(null);
      const response = await callApi({ method: "GET", url });
      return response;
    } catch (err: any) {
      setError(err.message || "Failed to fetch products.");
      return null;
    } finally {
      setLoading(false);
    }
  };

  const updateProducts = async () => {
    if (multipleCategory.length > 0) {
      // Fetch products for multiple categories
      const categoryPromises = multipleCategory.map((category) =>
        fetchProducts(`https://fakestoreapi.com/products/category/${category.name}?sort=${sort}`)
      );
      const categoryResults = await Promise.all(categoryPromises);

      const combinedProducts = categoryResults
        .filter((res) => res !== null)
        .flat() as Product[];

      setProducts(combinedProducts);
    } else {
      // Fetch all products
      const allProducts = await fetchProducts(`https://fakestoreapi.com/products?sort=${sort}`);
      setProducts(allProducts);
    }
  };

  
  useEffect(() => {
    updateProducts();
  }, [multipleCategory, sort]);

  return (
    <PageLayout>
      <h2
        className="py-4 flex justify-center items-center text-2xl font-extrabold"
        data-testid={`home-page-tile`}
      >
        Products
      </h2>

      <div className="flex items-center justify-end px-4 gap-4">
        <CategoryFilter
          multipleCategory={multipleCategory}
          setMultipleCategory={setMultipleCategory}
        />
        <ProductSort setSort={setSort} sort={sort} />
      </div>

      <div className="grid place-items-center items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {loading ? (
          Array.from({ length: 10 }).map((_, index) => <CardShimmerLoader key={index} />)
        ) : products && products.length > 0 ? (
          products.map((product: Product, index: number) => (
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
        )}
      </div>

      {error && <p className="text-red-500 text-center">{error}</p>}
    </PageLayout>
  );
};

export default HomePage;
