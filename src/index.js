// We don't need C as we will use action creators
//import C from './constants';
// Bacause it's index file under the store folder we can use:
import storeFactory from './store';
import {addRecipe, deleteRecipe, setIsEditMode} from './actions';

const store = storeFactory();

store.dispatch(
    addRecipe(365558.83417074627, 'commodo do', [{
        "ingredientId":8704752.485715887,
        "ingredientName":"ea irure"
    }, {
        "ingredientId":61364703.937548354,
        "ingredientName":"voluptate qui irure enim"
    }])
);

store.dispatch(
    deleteRecipe(365558.83417074627)
);

store.dispatch(
    setIsEditMode()
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import {App} from '../src/components/App';

// window.React = React;

// ReactDOM.render(
//     <App />, 
//     document.getElementById('root')
// );