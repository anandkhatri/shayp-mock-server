const apimock = require('@ng-apimock/core');
const devInterface = require('@ng-apimock/dev-interface');
const express = require('express');
const app = express();
app.set('port', 9999);

apimock.processor.process({
    src: 'mocks',
    patterns: { // optional
        mocks: '**/*Mock.json', // optional: default is '**/*.mock.json'		
        presets: '**/*preset.json',
    },
    watch: true,
});

function logRequests(req, res, next) {
    console.log('Request URL:', req.url);

    // console.log('Headers:', req.headers);
    next();
}

app.use(logRequests);
app.use(apimock.middleware);
app.use('/dev-interface', express.static(devInterface));


app.listen(app.get('port'), () => {
    console.log('@ng-apimock/core running on port', app.get('port'));
    console.log('@ng-apimock/dev-interface is available under /dev-interface');
});