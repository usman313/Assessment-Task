module.exports = [
  {
    ignores: ['node_modules/', 'build/'],
    files: ['**/*.js', '**/*.ts'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    rules: {
      'indent': ['error', 2],  // Enforce 2-space indentation (can change to 4)
      'no-mixed-spaces-and-tabs': 'error',  // Disallow mixed spaces and tabs
      'space-before-function-paren': ['error', 'always'],  // Enforce space before function parentheses
      'object-curly-spacing': ['error', 'always'],  // Enforce spaces inside curly braces
      'array-bracket-spacing': ['error', 'never'],  // Disallow spaces inside array brackets
      'comma-spacing': ['error', { 'before': false, 'after': true }],  // Enforce spacing after commas
      'semi': ['error', 'always'],  // Enforce semicolons at the end of statements
      'quotes': ['error', 'single'],  // Enforce single quotes
      'no-trailing-spaces': 'error',  // Disallow trailing spaces
      'eol-last': ['error', 'always'],  // Enforce newline at the end of files
      'no-multiple-empty-lines': ['error', { 'max': 1 }]  // Disallow multiple empty lines
    }
  }
];
