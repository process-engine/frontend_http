'use strict';

const FrontendRouter = require('./dist/commonjs/index').FrontendRouter;
const FrontendController = require('./dist/commonjs/index').FrontendController;
const routerDiscoveryTag = require('@essential-projects/core_contracts').RouterDiscoveryTag;

function registerInContainer(container) {

  container.register('FrontendRouter', FrontendRouter)
    .dependencies('FrontendController', 'HttpExtension')
    .tags(routerDiscoveryTag)
    .singleton()
    .configure('frontend:router');

  container.register('FrontendController', FrontendController)
    .dependencies('FrontendService')
    .singleton();
}


module.exports.registerInContainer = registerInContainer;
