import PageLayout from "../../components/page-layout";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {useContext, useEffect, useState} from "react";
import { CartContext } from "../../context";
import CartItems from "../../components/cart-items";
import { CartItem } from "../../interface";
import cartItems from "../../components/cart-items";

const CartPage = () => {
    const cartContext = useContext(CartContext);
    const { cart } = cartContext;
    const [cartItems,setCartItems] = useState<undefined | CartItem[]>(undefined);
    const [promoCode, setPromoCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [shipping, setShipping] = useState(2.00); // Example static shipping cost
    const [tax, setTax] = useState(4.00); // Example static tax
    const [total, setTotal] = useState(52.00); // Example static total

    const handleApplyPromoCode = () => {
        // Example logic for applying promo code
        if (promoCode === 'DISCOUNT10') {
            setDiscount(10.00);
            setTotal(total - 10.00 + shipping + tax);
        } else {
            setDiscount(0);
            setTotal(total + shipping + tax);
        }
    };

    const handleCheckout = () => {
        // Add your checkout logic here
        console.log('Proceeding to checkout...');
    };

    const handleContinueShopping = () => {
        // Logic for continuing shopping
        console.log('Continuing shopping...');
    };
    useEffect(() => {
        if(cart){
            setCartItems( cart)
        }
    }, [cart]);


    return (
        <PageLayout>
            <div className="font-sans md:max-w-4xl max-md:max-w-xl mx-auto bg-white py-4  flex flex-col md:flex-row w-full  ">
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="md:col-span-2 bg-gray-100 p-4 rounded-md">
                        <h2 className="text-2xl font-bold text-gray-800">Cart</h2>
                        <hr className="border-gray-300 mt-4 mb-8"/>

                        <div className="space-y-4">
                            {cartItems && cartItems.length > 0 ? (
                                cartItems.map((item: CartItem, index) => (
                                    <CartItems
                                        key={item.id}
                                        id={item.id}
                                        image={item.image}
                                        name={item.name}
                                        price={item.price}
                                        quantity={item.quantity}
                                    />
                                ))
                            ) : (
                                <div className="text-center text-lg text-gray-500">
                                    Your cart is currently empty.
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="bg-gray-100 rounded-md p-4 md:sticky top-0">
                    <div className="flex border border-blue-600 overflow-hidden rounded-md">
                        <input
                            type="text"
                            placeholder="Promo code"
                            className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-2.5"
                            value={promoCode}
                            onChange={(e) => setPromoCode(e.target.value)}
                        />
                        <button
                            type="button"
                            className="flex items-center justify-center font-semibold tracking-wide bg-blue-600 hover:bg-blue-700 px-4 text-sm text-white"
                            onClick={handleApplyPromoCode}
                        >
                            Apply
                        </button>
                    </div>

                    <ul className="text-gray-800 mt-8 space-y-4">
                        <li className="flex flex-wrap gap-4 text-base">
                            Discount <span className="ml-auto font-bold">${discount.toFixed(2)}</span>
                        </li>
                        <li className="flex flex-wrap gap-4 text-base">
                            Shipping <span className="ml-auto font-bold">${shipping.toFixed(2)}</span>
                        </li>
                        <li className="flex flex-wrap gap-4 text-base">
                            Tax <span className="ml-auto font-bold">${tax.toFixed(2)}</span>
                        </li>
                        <li className="flex flex-wrap gap-4 text-base font-bold">
                            Total <span className="ml-auto">${total.toFixed(2)}</span>
                        </li>
                    </ul>

                    <div className="mt-8 space-y-2">
                        <button
                            type="button"
                            className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-blue-600 hover:bg-blue-700 text-white rounded-md"
                            onClick={handleCheckout}
                        >
                            Checkout
                        </button>
                        <button
                            type="button"
                            className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent text-gray-800 border border-gray-300 rounded-md"
                            onClick={handleContinueShopping}
                        >
                            Continue Shopping
                        </button>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default CartPage;
