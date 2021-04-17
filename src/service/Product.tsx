import axios from "axios"
import { IProduct } from "../model/Store";

const productUrl = "https://fakestoreapi.com/products";

export const getProducts = (): Promise<IProduct[]> => {
    return new Promise((resolve, reject) => {
        axios.get(productUrl)
            .then(res => {
                console.log(res);
                resolve(res.data);
            }).catch(err => {
                console.error(err);
                reject(err);
            });
    });
}