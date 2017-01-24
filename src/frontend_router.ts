import {BaseRouter} from '@5minds/http';
import {FrontendController} from "./frontend_controller";
import * as express from 'express';
import * as path from 'path';

export class FrontendRouter extends BaseRouter {

  private _frontendController: FrontendController = undefined;

  public config: any = undefined;

  constructor(frontendController: FrontendController) {
    super();

    this._frontendController = frontendController;
  }

  public get baseRoute(): string {
    return this.config.baseRoute || 'frontend';
  }

  public async initialize(): Promise<void> {
    await this.frontendController.initialize();
    await super.initialize();
  }

  public async initializeRouter(): Promise<void> {
    this.router.get('/', this.frontendController.getFrontendCallback());
    this.router.use(express.static(path.resolve(this.config.appStaticPath)));
  }

  private get frontendController(): any {
    return this._frontendController;
  }


}
