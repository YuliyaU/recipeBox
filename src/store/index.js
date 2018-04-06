// Building a storeFactory

// import C from '../constants';
import appReducer from './reducers';

// To associate this middleware with our store we need to
// we need to grab applyMiddleware from redux
import {createStore, applyMiddleware} from 'redux';

// A piece of a middleware, this is a reusable function

// const consoleMessages = store => next => action => {};

// This function gives us the action that is currently being dispatched
// along with the mechanism to dispatch that action and change the state
const consoleMessages = function (store) {
    return function (next) {
        return function (action) {            

            // Record a result
            let result;

            // We can add functionality before or after we dispatch the action
            // i.e. result = next(action)

            // .groupCollapsed allows us to group all of the logs that are associated to
            // this action
            console.groupCollapsed(`dispatching action => ${action.type}`);
            console.log(`recipes`, store.getState().recipes.length);

            // Here is where the action will be dispatched and the state will be changed
            result = next(action);

            // Getting a state after the action was dispatched
            let {recipes} = store.getState();

            console.log(`
                recipies: ${recipes.length}
            `);

            console.groupEnd();

            // To make sure the state is registered we need to:
            return result;
        };
    };
};

export default (initialState = {}) => {
    // To apply middleware instead of
    // return createStore(appReducer, initialState);
    // We need to use
    return applyMiddleware(consoleMessages)(createStore)(appReducer, initialState);
};