import React, { Fragment, useContext, useState } from 'react';
import { GlobalStoreContext } from "../state/GlobalState";
import { FaMinus, FaPlus, FaTimes } from "react-icons/fa";
import { ICartItem, IProduct } from '../model/Store';

function Cart() {
    // const [cart, setCart] = useState([]);

    const storeContext = useContext(GlobalStoreContext);
    const decQty = (product: ICartItem) => {
        storeContext.removeCart!(product);
    }
    const totalAmount = storeContext.cart.reduce((acc, c) => acc + c.price * c.count, 0);
    const totalItem = storeContext.cart.reduce((acc, c) => acc + c.count, 0);
    const incQty = (product: ICartItem) => {
        storeContext.addCart!(product);
    }

    return (
        <div className="h-72 mt-5 flex flex-col bg-white rounded shadow-md w-80 relative">
            <div className="font-medium p-2 flex z-30 bg-white h-10 w-72">
                <span className="self-center">Cart</span>
                <span className="ml-2 self-center font-normal text-xs bg-blue-800 text-white rounded-full px-2">{ totalItem }</span>
                <span className="ml-auto"> Total: ${ totalAmount }</span>
            </div>
            {storeContext.cart.length > 0 ? 
                <Fragment>
                    <div className="divide-y h-52 overflow-y-scroll">
                        {
                            storeContext.cart.map((c: ICartItem) => {
                                return (
                                    <div key={ c.id } className="flex justify-between h-14 p-2 bg-white">
                                        <div style={{backgroundImage: "url(" + c.image + ")"}} className="w-10 h-10 bg-no-repeat bg-contain self-center"></div>
                                        <div className="text-xs text-center w-40 truncate self-center">{ c.title }</div>
                                        <div className="flex self-center">
                                            <button className="mx-1" onClick={() => decQty(c)}><FaMinus className="font-thin text-sm" /></button>
                                            <input className="w-5 mx-1 border focus:outline-none" value={c.count} readOnly />
                                            <button className="mx-1" onClick={() => incQty(c)}><FaPlus className="font-thin text-sm" /></button>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div className="h-12">
                        <button className="container ml-14 w-52 absolute bottom-1 rounded-full px-2 py-1 bg-green-300 hover:bg-green-400 focus:outline-none border-none">
                            <span className="text-sm">Checkout</span>
                        </button>
                    </div>
                </Fragment> : 
                <div className="p-5 text-md">Cart is empty...</div>
            }
        </div>
    );
}

export default Cart
