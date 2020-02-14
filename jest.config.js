module.exports = {
    clearMocks: true,
    collectCoverageFrom: ['src/**/*.{js,jsx,mjs}'],
    coverageDirectory: 'coverage',
    moduleFileExtensions: ['js', 'json', 'jsx'],
    setupFiles: ['<rootDir>/enzyme.config.js'],
    testEnvironment: 'jsdom',
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
    testPathIgnorePatterns: ['\\\\node_modules\\\\'],
    testURL: 'http://localhost',
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
      },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    verbose: false,
    reporters: [
      "default",
      ["@reportportal/reportportal-agent-jest",
      {
          "token": "c1c6d253-e4f6-49a1-857e-057acea81259",
          "endpoint": "https://rp.epam.com/api/v1",
          "project": "iryna_mazura_personal",
          "launch": "iryna_mazura_TEST_EXAMPLE",
          "description": "YourDescription",
          "attributes": [],
          "tags": ['tag1', 'tag2']
      }]
    ]
  };