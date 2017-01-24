import {IFrontendService} from '@process-engine-js/frontend_contracts';

export class FrontendController {

  private _frontendService: IFrontendService = undefined;

  constructor(frontendService: IFrontendService) {
    this._frontendService = frontendService;
  }

  private get frontendService(): IFrontendService {
    return this._frontendService;
  }

  public getFrontendCallback(): any {
    return this.frontendService.getFrontend();
  }

  public async initialize(): Promise<void> {
    return this.frontendService.initialize();
  }
}
