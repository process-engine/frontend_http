import { BaseRouter } from '@5minds/http';
import { FrontendController } from "./frontend_controller";
export declare class FrontendRouter extends BaseRouter {
    private _frontendController;
    config: any;
    constructor(frontendController: FrontendController);
    readonly baseRoute: string;
    initialize(): Promise<void>;
    initializeRouter(): Promise<void>;
    private readonly frontendController;
}
