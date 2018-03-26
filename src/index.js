import C from './constants';
import initialState from './initialState.json';
import appReducer from './store/reducers';

// Building a reducer

var state = initialState;

console.log(`
    Initial state
    =============
    recipies ${JSON.stringify(state.recipies)}
    isEditMode ${state.isEditMode}
`);

state = appReducer(state, {
    type: C.SET_ISEDITMODE,
    payload: true
});

state = appReducer(state, {
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

console.log(`
    Next state
    =============
    recipies ${JSON.stringify(state.recipies)}
    isEditMode ${state.isEditMode}
`);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import {App} from '../src/components/App';

// window.React = React;

// ReactDOM.render(
//     <App />, 
//     document.getElementById('root')
// );