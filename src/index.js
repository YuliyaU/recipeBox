import C from './constants';
// import {recipies, isEditMode} from './initialState.json';

// console.log(`
//     Recipies
//     ========
//     Initially there is a ${recipies.length} recipies
//     And isEdit is ${isEditMode}

//     Constants (actions)
//     -------------------
//     ${Object.keys(C).join('\n        ')}

// `);

// Building a reducer

import {recipe, isEditMode, addedIngredients, recipies} from './store/reducers';

// const state = null;

// const action = {
//     type: C.ADD_RECIPE,
//     payload: {
//         "id":365558.83417074627,
//         "recipeName":"commodo do",
//         "ingredients":[
//             {
//                 "ingredientId":8704752.485715887,
//                 "ingredientName":"ea irure"
//             }, {
//                 "ingredientId":61364703.937548354,
//                 "ingredientName":"voluptate qui irure enim"
//             }
//         ]
//     }
// };

// const nextState = recipe(state, action);

// console.log(`
//     initial state ${state}
//     action ${JSON.stringify(action)}
//     new state ${JSON.stringify(nextState)}
// `);

// const state = [{
//         "id":'365558.83417074627',
//         "recipeName":"commodo do",
//         "ingredients":[
//             {
//                 "ingredientId":8704752.485715887,
//                 "ingredientName":"ea irure"
//             }, {
//                 "ingredientId":61364703.937548354,
//                 "ingredientName":"voluptate qui irure enim"
//             }
//         ]
//     }];

// const action = {
//     type: C.ADD_RECIPE,
//     payload: {
//         "id":'59865062.965024225',
//         "recipeName":"in",
//         "ingredients":[
//             {
//                 "ingredientId":82939919.5394371,
//                 "ingredientName":"Ut nostrud in Excepteur dolor"
//             },{
//                 "ingredientId":13190845.387485074,
//                 "ingredientName":"velit laboris dolor ex nostrud"
//             },{
//                 "ingredientId":21266781.153889354,
//                 "ingredientName":"exercitation mollit voluptate anim"
//             }
//         ]
//     }
// };

// const nextState = recipies(state, action);

// console.log(`
//     initial state ${JSON.stringify(state)}
//     action ${JSON.stringify(action)}
//     new state ${JSON.stringify(nextState)}
// `);

const state = [{
    "id":67778762.58874306,
    "recipeName":"qui conseq",
    "ingredients":[
        {
            "ingredientId":33929516.86676681,
            "ingredientName":"irure in exercitation"
        }
    ]
}, {
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
}];

const action = {
    type: C.DELETE_RECIPE,
    payload: 67778762.58874306
};

const nextState = recipies(state, action);

console.log(`
initial state ${JSON.stringify(state)}
action ${JSON.stringify(action)}
new state ${JSON.stringify(nextState)}
`);

// const state = [
//     {
//         "ingredientId": '78579348.878',
//         "ingredientName": "noodles"
//     }
// ];

// const action = {
//     type: C.ADD_INGREDIENT,
//     payload: {
//         "ingredientId": '45757686.78',
//         "ingredientName": "eggs"
//     }
// };

// const nextState = addedIngredients(state, action);

// console.log(`
//     initial state ${JSON.stringify(state)}
//     action ${JSON.stringify(action)}
//     new state ${JSON.stringify(nextState)}
// `);

// Rethink the reducer
// const state = [
//     {
//         "ingredientId": '78579348.878',
//         "ingredientName": "noodles"
//     }
// ];

// const action = {
//     type: C.DELETE_INGREDIENT,
//     payload: '78579348.878'
// };

// const nextState = addedIngredients(state, action);

// console.log(`
//     initial state ${JSON.stringify(state)}
//     action ${JSON.stringify(action)}
//     new state ${JSON.stringify(nextState)}
// `);

// const state = false;

// const action = {
//     type: C.SET_ISEDITMODE,
//     payload: true
// };

// const nextState = isEditMode(state, action);

// console.log(`
//     initial isEditMode ${state}
//     action ${JSON.stringify(action)}
//     new goal ${nextState}
// `);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import {App} from '../src/components/App';

// window.React = React;

// ReactDOM.render(
//     <App />, 
//     document.getElementById('root')
// );