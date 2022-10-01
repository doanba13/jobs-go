module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                paths: {
                    '@src': './src/*',
                    '@apis': './src/apis/*',
                    '@assets': './src/assets/*',
                    '@config': './src/config/*',
                    '@hooks': './src/hooks/*',
                    '@libs': './src/libs/*',
                    '@components': './src/components/*',
                    '@navigators': './src/navigators/*',
                    '@screens': './src/screens/*',
                    '@store': './src/store/*',
                    '@theme': './src/theme/*',
                    '@translations': './src/translations/*',
                    '@utilities': './src/utilities/*',
                },
                extensions: ['.ios.js',
                    '.android.js',
                    '.ios.jsx',
                    '.android.jsx',
                    '.js',
                    '.jsx',
                    '.json',
                    '.ts',
                    '.tsx']
            },
        ],
        'react-native-reanimated/plugin'

    ],
};
