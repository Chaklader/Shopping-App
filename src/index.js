import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {UserProvider} from "./context/user.context";
import {CategoriesProvider} from "./context/categories.context";
import {CartProvider} from "./context/cart.context";


/*

- store folder -> store.js
- root-reducer.js
- store->user-> user.reducer.js
- index.js
- App.js
- user.action.js
- user.types.js
- navigation.component.jsx
- user.selector.js
- categories-> categories.reducer.js
- category.action.js
- category.type.js
- category.selector.js
- shop.js
- Delete the CategoriesProvider from the codebase
- CategoriesPreview
- category.component.jsx
- delete categories.context.jsx
- firebase.utils.js
- cart-> cart.action.js
- cart.reducer.js
- cart.selector.js
- cart.type.js



* */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <UserProvider>
                <CategoriesProvider>
                    <CartProvider>
                        <App/>
                    </CartProvider>
                </CategoriesProvider>
            </UserProvider>
        </BrowserRouter>

    </React.StrictMode>
);

reportWebVitals();
