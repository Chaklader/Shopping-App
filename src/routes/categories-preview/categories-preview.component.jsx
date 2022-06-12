import React, {Fragment, useContext} from 'react';

import SHOP_DATA from '../../shop-data.json';
import {CategoriesContext} from "../../context/categories.context";
import ProductCard from "../../components/product-cart/product-card.component";
import CategoryPreview from "../../components/category-preview/category-preview.component";


// import './categories-preview.styles.scss';


const CategoriesPreview = () => {

    const {categoriesMap} = useContext(CategoriesContext);

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

        <>
            {Object.keys(categoriesMap).map((title) => {

                const products = categoriesMap[title];
                return <CategoryPreview key={title} title={title} products={products}/>
            })}
        </>
    );
};

export default CategoriesPreview;
