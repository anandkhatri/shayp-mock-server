# Mock server for Shaype platform 
This is a mock server build on *ng-apimock* framework.

### Run the mock server
1. Install the required modules
`$ npm install`
2. Run the mock server
`$ node server.js`

### How to add another mock API?
1. Create a json file inside **/mocks** directory with the `Mock` postfix
2. Give a unique name for the mock
3. Define request url, method and responses.