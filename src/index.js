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

- index.js
- App.js
- navigation.component.jsx
- Delete the CategoriesProvider from the codebase
- CategoriesPreview
- category.component.jsx
- delete categories.context.jsx
- firebase.utils.js



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
