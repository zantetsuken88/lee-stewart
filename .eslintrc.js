module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es6': true
    },
    'extends': [
        'react-app',
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'ignorePatterns': [
      '*.scss'
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'arrowFunctions': true,
            'jsx': true
        },
        'sourceType': 'module'
    },
    'plugins': ['react'],
    'rules': {
        'no-console': 'warn',
        'no-trailing-spaces': 'error',
        'no-undefined': 'error',
        'object-curly-spacing': [
            'error',
            'always'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': 'error',
    },
    'settings': {
        'linkComponents': [
            'Hyperlink',
            { 'linkAttribute': 'to',
                'name': 'Link' }
        ],
        'propWrapperFunctions': [
            'forbidExtraProps',
            { 'object': 'Object',
                'property': 'freeze' },
            { 'property': 'myFavoriteWrapper' }
        ],
        'react': {
            'createClass': 'createReactClass',
            'flowVersion': '0.53',
            'fragment': 'Fragment',
            'pragma': 'React',
            'version': 'detect'
        }
    }
};
