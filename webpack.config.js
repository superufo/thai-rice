module.exports = function(config, env) {
  if (env === 'production') {
    config.entry = {
      index: ['babel-polyfill', './src/index.js'],
      common: ['react', 'react-dom']
    };
  }

    // Alias
    // webpackConfig.resolve.alias = {
    //     components: `${__dirname}/src/components`,
    //     utils: `${__dirname}/src/utils`,
    //     config: `${__dirname}/src/utils/config`,
    //     enums: `${__dirname}/src/utils/enums`,
    //     services: `${__dirname}/src/services`,
    //     models: `${__dirname}/src/models`,
    //     routes: `${__dirname}/src/routes`,
    //     themes: `${__dirname}/src/themes`,
    // }


  return config;
};
