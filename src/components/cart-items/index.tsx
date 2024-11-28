import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import {CartItem} from "../../interface";
import {useContext} from "react";
import {CartContext} from "../../context";
import {toast} from "react-toastify";

const CartItems = (props: CartItem) => {
    const {image, name, price, id, quantity} = props;
    const cartContext = useContext(CartContext);
    const {cartItemsQuantityIncrement, cartItemsQuantityDecrement, removeFromCart} = cartContext;

    const cartIncrement = () => {
        cartItemsQuantityIncrement(id);
        toast.success(`${name} quantity increased!`);
    };

    const cartDecrement = () => {
        cartItemsQuantityDecrement(id);
        toast.success(`${name} quantity decreased!`);
    };

    const removeItem = () => {
        removeFromCart(id);
        toast.error(`${name} has been removed from your cart!`);
    };

    return (
        <>
            <div className="grid grid-cols-3 items-center gap-4" data-testid={`cart-item-${id}`}>
                <div className="col-span-2 flex items-center gap-4">
                    <div className="w-24 h-24 shrink-0 bg-white p-2 rounded-md">
                        <img
                            src={image}
                            alt={`${name} image`}
                            className="w-full h-full object-contain"
                            data-testid={`cart-item-image-${id}`}
                        />
                    </div>
                    <div>
                        <h3
                            className="text-base font-bold text-gray-800"
                            data-testid={`cart-item-name-${id}`}
                        >
                            {name}
                        </h3>
                        <h6
                            className="text-xs text-red-500 cursor-pointer mt-0.5"
                            onClick={removeItem}
                            data-testid={`cart-item-remove-${id}`}
                        >
                            Remove
                        </h6>
                        <div className="flex gap-4 mt-4">
                            <button
                                type="button"
                                onClick={cartDecrement}
                                className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md"
                                data-testid={`cart-item-decrement-${id}`}
                            >
                                <RemoveIcon className="w-2.5 fill-current"/>
                            </button>
                            <span
                                className="mx-2.5"
                                data-testid={`cart-item-quantity-${id}`}
                            >
                               {quantity}
                            </span>
                            <button
                                type="button"
                                onClick={cartIncrement}
                                className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md"
                                data-testid={`cart-item-increment-${id}`}
                            >
                                <AddIcon className="w-2.5 fill-current"/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="ml-auto">
                    <h4
                        className="text-base font-bold text-gray-800"
                        data-testid={`cart-item-price-${id}`}
                    >
                        $ {price}
                    </h4>
                </div>
            </div>


        </>
    );
}

export default CartItems;
