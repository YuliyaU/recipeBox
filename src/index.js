// Try to do it without storeFactory first.
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {fetchRecipes} from './actions';
import appReducer from './store/reducers';

const store = createStore(
    appReducer,
    applyMiddleware(thunkMiddleware)    
);

store
    .dispatch(fetchRecipes())
    .then(() => {console.log(store.getState())});

window.store = store;

// import C from './constants';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import sampleData from './initialState.json';
// // Bacause it's index file under the store folder we can use:
// import storeFactory from './store';
// import {Provider} from 'react-redux';
// import {App} from '../src/components/ui/App';
// import {getRecipies} from './api/api';

// // const initialState = sampleData;
// // const store = storeFactory(initialState);

// const store = storeFactory(sampleData);

// console.log(store.getState());

// store.subscribe(() => {
//     console.log(`
//         state
//         =============
//         ${store.getState()}
//     `);
// });

// window.React = React;
// window.store = store;

// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>, 
//     document.getElementById('root')
// );