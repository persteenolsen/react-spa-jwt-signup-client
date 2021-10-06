var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
	entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        chunkFilename: '[id].js',
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'less-loader' }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, 'src/'),
        }
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // global app config object
		
		// NOTE: FOR PRODUCTION ON AZURE!!!
         config: JSON.stringify({ apiUrl: 'https://pso-express-react-jwt-signup.azurewebsites.net/' })
		 
		// Testing with Node.js and Express Web API
		// config: JSON.stringify({ apiUrl:'http://localhost:443' })
        
		// Testing with ASP.NET Core 2.2 Web API
		// config: JSON.stringify({ apiUrl:'http://localhost:4000' })
    }
}