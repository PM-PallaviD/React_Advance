import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import { store } from "./Components/sagas/store"
import { Provider } from "react-redux";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Marathi from "./Components/Constants/Marathi_.json"
import English from "./Components/Constants/English_.json";
const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);
i18next.init({
   
    resources: {
        en: {
            translation: English
        },


        mr: {
            translation: Marathi

        }
    }
})





root.render(

    // wraping application with provider and passing the store 
    <I18nextProvider i18n={i18next} >
        <Provider store={store}>
            <App />
        </Provider>
    </I18nextProvider>

);
