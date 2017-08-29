"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_node_1 = require("@process-engine-js/http_node");
const express = require("express");
const path = require("path");
class FrontendRouter extends http_node_1.BaseRouter {
    constructor(frontendController, httpExtension) {
        super();
        this._frontendController = undefined;
        this._httpExtension = undefined;
        this.config = undefined;
        this._frontendController = frontendController;
        this._httpExtension = httpExtension;
    }
    get baseRoute() {
        return (this.config.baseRoute || 'frontend') + '*';
    }
    async initialize() {
        await this.frontendController.initialize();
        await super.initialize();
    }
    async initializeRouter() {
        this.router.get('/', this.frontendController.getFrontendCallback());
        this.httpExtension.app.use(express.static(path.resolve(this.config.appStaticPath)));
    }
    get frontendController() {
        return this._frontendController;
    }
    get httpExtension() {
        return this._httpExtension;
    }
}
exports.FrontendRouter = FrontendRouter;

//# sourceMappingURL=frontend_router.js.map
