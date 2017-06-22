const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const isProduction = process.argv.indexOf('-p') !== -1;

const plugins = [
	new webpack.optimize.CommonsChunkPlugin({
		name:"react_draft" ,
		filename:"./libs/react-draft-bundle.js"
	}) ,
	new ExtractTextPlugin("./[name].css")
];
if ( isProduction ) {
	plugins.push(new UglifyJSPlugin({
		compress:true ,
		comments:false
	}));
}

module.exports = {
	entry:{
		react_draft:["react" , "react-dom" , "draft-js"] ,
		app:['./src/entry.js' , './src/entry.scss']
	} ,
	output:{
		path:path.resolve('./dist') ,
		filename:'[name].js'
	} ,
	module:{
		rules:[
			{test:/\.(sass|scss)$/ , loader:ExtractTextPlugin.extract(['css-loader' , 'sass-loader']) , exclude:/node_modules/} ,
			{test:/\.(js|jsx)$/ , loader:'babel-loader' , exclude:/node_modules/}
		]
	} ,
	plugins:plugins
}