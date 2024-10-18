import { Product } from "./product";
import "./shop.css";
import {PRODUCTS} from "../../../products.ts";

const Shop = () => {
    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>shahrzad paper shop ¡! ❞</h1>
            </div>

            <div className="products">
                {PRODUCTS.map((product) => (
                    <Product data={product} />
                ))}
            </div>
        </div>
    );
};

export default Shop;
