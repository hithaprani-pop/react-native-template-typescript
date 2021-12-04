module.exports = api => {
  const babelEnv = api.env();
  const plugins = [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@app': './',
          tests: ['./tests/'],
          '@components': './src/components',
        },
      },
    ],
  ];

  if (babelEnv !== 'development') {
    plugins.push('transform-remove-console');
  }
  plugins.push('react-native-reanimated/plugin');

  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: plugins,
  };
};
