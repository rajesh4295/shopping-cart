import React, { useContext } from 'react';
import { GlobalStoreContext } from "../state/GlobalState";
import { ICartItem, IProduct } from '../model/Store';
import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";

function ProductCard(props: IProduct) {
    const storeContext = useContext(GlobalStoreContext);
    const isFavourite = storeContext.wishlist.findIndex((p) => p.id === props.id) > -1;
    const setfavourite = () => {
        isFavourite ? storeContext.removeWishlist!(props) : storeContext.addWishlist!(props);
    }
    const addToCart = () => {
        const cartItem: ICartItem = {...props, count: 1};
        storeContext.addCart!(cartItem);
    }

    return (
        <div className="w-full lg:w-3/12 h-72 m-2 p-2 lg:m-5 flex flex-col justify-between bg-white shadow rounded">
            <div className="self-end -mb-2 mr-2 cursor-pointer" onClick={setfavourite}>
                {
                    isFavourite ? <FaHeart style={{color: "#EF4444"}} /> : <FaRegHeart />
                }
            </div>
            <div style={{backgroundImage: "url("+props.image+")"}} className="h-44 w-36 bg-no-repeat container mx-auto bg-contain"></div>
            <div className="text-sm text-center truncate">{ props.title }</div>
            <div className="text-sm text-center font-bold">${ props.price }</div>
            <div className="flex justify-between">
                <div className="text-xs bg-yellow-100 rounded-full py-1 px-2 self-center w-max">{ props.category }</div>
                <div className="text-gray-400 self-center cursor-pointer" onClick={addToCart}><FaShoppingCart/></div>
            </div>
        </div>
    )
}

export default ProductCard
