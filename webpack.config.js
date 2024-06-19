import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import Dotenv from 'dotenv-webpack'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Bây giờ bạn có thể sử dụng __dirname
export default {
  // Chế độ development
  mode: 'development',
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      // Loaders
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    // Sử dụng Dotenv để load biến môi trường từ tệp .env
    new Dotenv({
      path: '.env', // Đường dẫn tới tệp .env của bạn
    }),
  ],
  watch: true,
}
