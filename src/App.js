import React from 'react';
import {Provider} from 'react-redux';
import store from './Redux/store'
import './App.css';
import HomePage from "./Pages/HomePage";

function App() {
    return (
        <Provider store={store}>
                <HomePage>

                </HomePage>
        </Provider>
    );
}

export default App;
