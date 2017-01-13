import { platformBrowser } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

/*
 * App Module
 * our top level module that holds all of our components
 */
import { AppModuleNgFactory } from '../aot/src/app/app.module.ngfactory';

platformBrowserDynamic().bootstrapModuleFactory(AppModuleNgFactory);
