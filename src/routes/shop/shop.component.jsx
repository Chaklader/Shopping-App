import React, {Fragment, useContext} from 'react';

import SHOP_DATA from '../../shop-data.json';
import {CategoriesContext} from "../../context/categories.context";
import ProductCard from "../../components/product-cart/product-card.component";
import CategoryPreview from "../categories-preview/categories-preview.component";


import './shop.styles.scss';
import {Route, Routes} from "react-router-dom";


const Shop = () => {

    // const {categoriesMap} = useContext(CategoriesContext);

    return (
        // <div className='shop-container'>
        //     {Object.keys(categoriesMap).map((title) => (
        //             <Fragment key={title}>
        //                 <h2>{title}</h2>
        //                 <div className="products-container">
        //                     {categoriesMap[title].map((product) => (
        //                         <ProductCard key={product.id} product={product}/>
        //                     ))}
        //                 </div>
        //             </Fragment>
        //         ))}
        // </div>

        // <div className='shop-container'>
        //     {Object.keys(categoriesMap).map((title) => {
        //
        //         const products = categoriesMap[title];
        //         return <CategoryPreview key={title} title={title} products={products}/>
        //     })}
        // </div>

        <Routes>
            <Route index element={<CategoryPreview/>}/>
        </Routes>
    );
};

export default Shop;
