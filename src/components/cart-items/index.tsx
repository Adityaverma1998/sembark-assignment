import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import {CartItem} from "../../interface";
import {useContext} from "react";
import {CartContext} from "../../context";
import {toast} from "react-toastify";

const CartItems = (props:CartItem)=>{
    const {image,name,price,id} = props;
    const cartContext = useContext(CartContext);
    const {cartItemsQuantityIncrement,cartItemsQuantityDecrement,removeFromCart} = cartContext;

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

    return(
        <>
            <div className="grid grid-cols-3 items-center gap-4">
                <div className="col-span-2 flex items-center gap-4">
                    <div className="w-24 h-24 shrink-0 bg-white p-2 rounded-md">
                        <img src={image}
                             className="w-full h-full object-contain"/>
                    </div>
                    <div>
                        <h3 className="text-base font-bold text-gray-800">{name}</h3>
                        <h6 className="text-xs text-red-500 cursor-pointer mt-0.5" onClick={removeItem}>Remove</h6>
                        <div className="flex gap-4 mt-4">

                            <div>
                                <button type="button"
                                        className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                                    <RemoveIcon className="w-2.5 fill-current" onClick={cartDecrement}/>
                                    <span className="mx-2.5">1</span>
                                    <AddIcon className="w-2.5 fill-current" onClick={cartIncrement}/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ml-auto">
                    <h4 className="text-base font-bold text-gray-800">{price}</h4>
                </div>
            </div>

        </>
    );
}

export default CartItems;
