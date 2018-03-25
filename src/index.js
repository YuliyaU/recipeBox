import C from './constants';
import {recipies, isEditMode} from './initialState.json';

console.log(`
    Recipies
    ========
    Initially there is a ${recipies.length} recipies
    And isEdit is ${isEditMode}

    Constants (actions)
    -------------------
    ${Object.keys(C).join('\n        ')}

`);
// import React from 'react';
// import ReactDOM from 'react-dom';
// import {App} from '../src/components/App';

// window.React = React;

// ReactDOM.render(
//     <App />, 
//     document.getElementById('root')
// );