

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
