import { BaseRouter, HttpExtension } from '@process-engine-js/http_node';
import { FrontendController } from "./frontend_controller";
export declare class FrontendRouter extends BaseRouter {
    private _frontendController;
    private _httpExtension;
    config: any;
    constructor(frontendController: FrontendController, httpExtension: HttpExtension);
    readonly baseRoute: string;
    initialize(): Promise<void>;
    initializeRouter(): Promise<void>;
    private readonly frontendController;
    private readonly httpExtension;
}
