/**
 * 字符串处理工具库
 */

/**
 * 将字符串转换为驼峰格式
 * @param {string} str - 要转换的字符串
 * @returns {string} 转换后的驼峰字符串
 */
function camelCase(str) {
    return str.replace(/[-_]([a-z])/g, (match, char) => char.toUpperCase());
}

/**
 * 将字符串首字母大写
 * @param {string} str - 要转换的字符串
 * @returns {string} 首字母大写后的字符串
 */
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * 截断字符串并添加省略号
 * @param {string} str - 要截断的字符串
 * @param {number} maxLength - 最大长度
 * @param {string} [ellipsis='...'] - 省略号字符
 * @returns {string} 截断后的字符串
 */
function truncate(str, maxLength, ellipsis = '...') {
    if (str.length <= maxLength) {
        return str;
    }
    return str.slice(0, maxLength) + ellipsis;
}

module.exports = {
    camelCase,
    capitalize,
    truncate
};    