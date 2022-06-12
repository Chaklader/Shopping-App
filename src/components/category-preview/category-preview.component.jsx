import './category-preview.styles.scss';
import ProductCard from "../product-cart/product-card.component";

import React from 'react';

const CategoryPreview = ({title, products}) => {
    return (
        <div className='category-preview-container'>
            <h2>
                <span>{title.toUpperCase()}</span>
            </h2>

            <div className='preview'>
                {products
                    .filter((_, idx) => idx < 4)
                    .map((product) => (
                        <ProductCard key={product.id} product={product}/>
                    ))}
            </div>
        </div>
    );
};

export default CategoryPreview;
