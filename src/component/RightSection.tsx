import React from 'react'
import Cart from './Cart'
import Wishlist from './Wishlist'

function RightSection() {
    return (
        <div className="divide-y w-full lg:w-3/12 mt-5 lg:mt-0 p-2 lg:fixed lg:right-0 lg:top-0 lg:bottom-0 bg-white shadow-md">
            <Cart />
            <Wishlist />
        </div>
    )
}

export default RightSection
