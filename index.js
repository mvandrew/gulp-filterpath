const path = require("path");

module.exports = (root_path, target_path) => {
    return "./" + path.relative(root_path, target_path).replace(/\\/g, '/');
};
