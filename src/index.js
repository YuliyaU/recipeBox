import C from './constants';
// import initialState from './initialState.json';
import appReducer from './store/reducers';
import {createStore} from 'redux';

const initialState = (localStorage['redux-store']) ? 
    JSON.parse(localStorage['redux-store']) : {};

const store = createStore(appReducer, initialState);

// For debugging in development, not production
window.store = store;

store.subscribe(() => console.log(store.getState()));

store.subscribe(() => {
    const state = JSON.stringify(store.getState());
    localStorage['redux-store'] = state;
});

// store.dispatch({
//     type: C.ADD_RECIPE,
//     payload: {
//         "id":365558.83417074627,
//         "recipeName":"commodo do",
//         "ingredients":[{
//             "ingredientId":8704752.485715887,
//             "ingredientName":"ea irure"
//         }, {
//             "ingredientId":61364703.937548354,
//             "ingredientName":"voluptate qui irure enim"
//         }]
//     }
// });

// store.dispatch({
//     type: C.SET_ISEDITMODE,
//     payload: true
// });

// console.log('next state', store.getState());

// import React from 'react';
// import ReactDOM from 'react-dom';
// import {App} from '../src/components/App';

// window.React = React;

// ReactDOM.render(
//     <App />, 
//     document.getElementById('root')
// );