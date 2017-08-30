define(["require", "exports", "@process-engine-js/http_node", "express", "path"], function (require, exports, http_node_1, express, path) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});

//# sourceMappingURL=frontend_router.js.map
