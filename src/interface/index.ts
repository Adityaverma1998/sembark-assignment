

export interface CartItem {
    id: string;
    image:string;
    name: string;
    price: number;
}

export interface CartContextType {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: string) => void;
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
