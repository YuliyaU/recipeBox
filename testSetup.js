process.env.NODE_ENV = 'test';

require('babel-register');

require.extensions['.css'] = function() {return null;};
require.extensions['.png'] = function() {return null;};
require.extensions['.jpeg'] = function() {return null;};

// var jsdom = require('jsdom').jsdom;

var jsdom = require('jsdom');
var {JSDOM} = jsdom;

const {document} = (new JSDOM('').window);

var exposedProperties = ['window', 'navigator', 'document'];

global.document = document;
// global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        exposedProperties.push(property);
        global[property] = document.defaultView[property];
    }
});

global.navigator = {
    userAgent: 'node.js'
};

var Enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({adapter: new Adapter()});