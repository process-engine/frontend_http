import {BaseRouter, HttpExtension} from '@essential-projects/http_node';
import * as express from 'express';
import * as path from 'path';
import {FrontendController} from './frontend_controller';

export class FrontendRouter extends BaseRouter {

  private _frontendController: FrontendController = undefined;
  private _httpExtension: HttpExtension = undefined;

  public config: any = undefined;

  constructor(frontendController: FrontendController, httpExtension: HttpExtension) {
    super();

    this._frontendController = frontendController;
    this._httpExtension = httpExtension;
  }

  public get baseRoute(): string {
    const baseRoute: string = (this.config.baseRoute || 'frontend');

    return `${baseRoute}*`;
  }

  public async initialize(): Promise<void> {
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
