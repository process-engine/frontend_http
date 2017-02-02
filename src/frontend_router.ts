import {BaseRouter, HttpExtension} from '@process-engine-js/http';
import {FrontendController} from "./frontend_controller";
import * as express from 'express';
import * as path from 'path';

export class FrontendRouter extends BaseRouter {

  private _frontendController: FrontendController = undefined;
  private _httpExtension: HttpExtension = undefined;

  config: any = undefined;

  constructor(frontendController: FrontendController, httpExtension: HttpExtension) {
    super();

    this._frontendController = frontendController;
    this._httpExtension = httpExtension;
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
    this.httpExtension.app.use(express.static(path.resolve(this.config.appStaticPath)));
  }

  private get frontendController(): any {
    return this._frontendController;
  }

  private get httpExtension(): any {
    return this._httpExtension;
  }

}
