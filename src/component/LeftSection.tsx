import React, { useEffect, useContext } from 'react'
import { IProduct } from '../model/Store';
import { getProducts } from '../service/Product'
import { GlobalStoreContext } from '../state/GlobalState'
import ProductCard from './ProductCard'

function LeftSection() {
    const storeContext = useContext(GlobalStoreContext);

    useEffect(() => {
        // getProducts().then((prodRes: IProduct[]) => {
        //     storeContext.initStore!(prodRes);
        // });
    }, []);

    return (
        <div className="w-full lg:w-4/6 lg:ml-10 p-2 flex flex-wrap justify-start content-start">
            { storeContext.products.map(p => <ProductCard key={p.id} {...p} />) }
        </div>
    )
}

export default LeftSection
