'use strict';

const FrontendRouter = require('./dist/commonjs/index').FrontendRouter;
const FrontendController = require('./dist/commonjs/index').FrontendController;

function registerInContainer(container) {

  container.register('FrontendRouter', FrontendRouter)
    .dependencies('FrontendController')
    .tags('express-router')
    .singleton()
    .configure('frontend:router');

  container.register('FrontendController', FrontendController)
    .dependencies('FrontendService')
    .singleton();
}


module.exports.registerInContainer = registerInContainer;
