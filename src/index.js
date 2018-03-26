import C from './constants';
// Bacause it's index file under the store folder we can use:
import storeFactory from './store';
// import initialState from './initialState.json';
// import appReducer from './store/reducers';
// import {createStore} from 'redux';

const initialState = (localStorage['redux-store']) ? 
    JSON.parse(localStorage['redux-store']) : {};

// const store = createStore(appReducer, initialState);

// For debugging in development, not production
// window.store = store;

// store.subscribe(() => console.log(store.getState()));

// store.subscribe(() => {
const saveState = () => {
    const state = JSON.stringify(store.getState());
    localStorage['redux-store'] = state;
};
// });

const store = storeFactory(initialState);

// initialState loads from a localStorage
// and every time we dispatch an action it will save the state
store.subscribe(saveState);

store.dispatch({
    type: C.ADD_RECIPE,
    payload: {
        "id":365558.83417074627,
        "recipeName":"commodo do",
        "ingredients":[{
            "ingredientId":8704752.485715887,
            "ingredientName":"ea irure"
        }, {
            "ingredientId":61364703.937548354,
            "ingredientName":"voluptate qui irure enim"
        }]
    }
});
store.dispatch({
    type: C.ADD_RECIPE,
    payload: {
        "id":84980349.10338351,
        "recipeName":"Ut velit labore non",
        "ingredients":[
            {
                "ingredientId":87369458.65003428,
                "ingredientName":"ut ipsum incididunt"
            },{
                "ingredientId":31203943.475608993,
                "ingredientName":"laborum amet incididunt"
            }
        ]
    }
});

store.dispatch({
    type: C.ADD_RECIPE,
    payload: {
        "id":59865062.965024225,
        "recipeName":"in",
        "ingredients":[
            {
                "ingredientId":82939919.5394371,
                "ingredientName":"Ut nostrud in Excepteur dolor"
            },{
                "ingredientId":13190845.387485074,
                "ingredientName":"velit laboris dolor ex nostrud"
            },{
                "ingredientId":21266781.153889354,
                "ingredientName":"exercitation mollit voluptate anim"
            }
        ]
    }
});

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