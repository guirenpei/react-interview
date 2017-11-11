var path = require('path');
const basename = path.basename('react-interciew');
let pwd = path.resolve(__dirname, '..');
if (!pwd.includes(basename)) {
    pwd = path.resolve(pwd, basename);
}
console.log('pwd', pwd);
/**
 * 服务器server以及项目的公共配置
 */
module.exports = {
    publicPath: '/',    // 服务器部署路径

    staticPath: path.resolve(pwd, '..', 'dist'),    // 导出地址

    rootPath: path.resolve(pwd, '..'), // 项目根目录
    srcPath: path.resolve(pwd, '..', 'src'),
    libPath: path.resolve(pwd, '..', 'node_modules'),
};