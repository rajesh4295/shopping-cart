import React, { useContext } from 'react';
import { GlobalStoreContext } from "../state/GlobalState";
import { FaTimes } from "react-icons/fa";
import { IProduct } from '../model/Store';

function Wishlist() {
    const storeContext = useContext(GlobalStoreContext);
    const removefavourite = (product: IProduct) => {
        storeContext.removeWishlist!(product);
    }

    return (
        <div className="flex flex-col h-72 mt-5 bg-white rounded w-auto">
            <div className="font-medium p-2 flex z-30 bg-white h-10">
                <span className="self-center">Wishlist</span>
                <span className="ml-2 self-center font-normal text-xs bg-blue-800 text-white rounded-full px-2">{ storeContext.wishlist.length }</span>
            </div>
            {storeContext.wishlist.length > 0 ? <div className="divide-y h-72 overflow-y-scroll">
                {
                    storeContext.wishlist.map(wish => {
                        return (
                            <div className="flex justify-between h-14 p-2 bg-white">
                                <div style={{backgroundImage: "url(" + wish.image + ")"}} className="w-10 h-10 bg-no-repeat bg-contain self-center"></div>
                                <div className="text-xs text-center w-40 truncate self-center">{ wish.title }</div>
                                <div className="self-center font-thin cursor-pointer focus:outline-none" onClick={() => removefavourite(wish)}><FaTimes/></div>
                            </div>
                        );
                    })
                }
            </div> : 
            <div className="p-5 text-md">Wishlist is empty...</div>
            }
        </div>
    );
}

export default Wishlist
