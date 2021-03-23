const postcss = require('rollup-plugin-postcss');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        inject: true,
        extract: !!options.writeMeta,
        modules: true, // 应用css modules
        // namedExport: true, // 类名导出
        camelCase: true, // 反对驼峰
        // sass: true, // 是否应用sass
        less:true,
        // autoModules:true,
        // namedExports(name) {
        //   // Maybe you simply want to convert dash to underscore
        //   return name.replace(/-/g, '_')
        // }
      }),
    );
    return config;
  },
};