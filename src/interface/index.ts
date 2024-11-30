

export interface CartItem {
    id: string;
    image:string;
    name: string;
    price: number;
    quantity:number,
}

export interface CartContextType {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: string) => void;
    cartItemsQuantityIncrement: (id: string) => void;
    cartItemsQuantityDecrement: (id: string) => void;
    filter: string;
    setFilter: (filter: string) => void;
    sortOrder: string;
    setSortOrder: (order: string) => void;
    isFilterOpen: boolean;
    setIsFilterOpen: (isFilterOpen: boolean) => void;
    isSortOpen: boolean;
    setIsSortOpen: (isSortOpen: boolean) => void;

}

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}
