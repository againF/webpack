let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin")
console.log(path.resolve("dist"));
console.log(path.resolve(__dirname,"dist"));

module.exports = {
    devServer: { // 开发服务器配置
        port: 3000,
        progress: true,
        contentBase: "./build",
        compress: true,
        open: true
    },
    mode: "production", // development production
    entry: "./src/index.js", // 入口
    output: {
        filename: "bundle[hash:8].js", // 打包后的文件名
        path: path.resolve(__dirname, "build"), // 路径必须是一个绝对路径
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            minify: {
                removeAttributeQuotes: true, // 删双引号
                collapseWhitespace: true, // 折叠空行
            },
            hash: true // 打包加哈希
        })
    ]
}