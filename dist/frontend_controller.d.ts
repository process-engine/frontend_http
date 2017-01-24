import { IFrontendService } from '@process-engine-js/frontend_contracts';
export declare class FrontendController {
    private _frontendService;
    constructor(frontendService: IFrontendService);
    private readonly frontendService;
    getFrontendCallback(): any;
    initialize(): Promise<void>;
}
