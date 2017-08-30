define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class FrontendController {
        constructor(frontendService) {
            this._frontendService = undefined;
            this._frontendService = frontendService;
        }
        get frontendService() {
            return this._frontendService;
        }
        getFrontendCallback() {
            return this.frontendService.getFrontend();
        }
    }
    exports.FrontendController = FrontendController;
});

//# sourceMappingURL=frontend_controller.js.map
