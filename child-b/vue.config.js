const packageName = require('./package.json').name;

module.exports = {
    configureWebpack: {
        output: {
            library: `${packageName}-[name]`,
            libraryTarget: 'umd',
            jsonpFunction: `webpackJsonp_${packageName}`,
        },
    },
    devServer: {
        headers: { 'Access-Control-Allow-Origin': '*' },
        port: '6789'
    }
}