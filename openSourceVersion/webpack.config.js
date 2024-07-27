const path = require('path');

module.exports = {
    mode: 'development', // or 'production' for minified production build
    entry: './src/script.js', // assuming script.js is in a src directory
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        modules: [path.resolve(__dirname, 'node_modules')],
        alias: {
            '@maplibre/maplibre-gl-directions': path.resolve(__dirname, 'node_modules/@maplibre/maplibre-gl-directions/dist')
        }    
    }
};